"use client";
import React, { useState } from "react";
import UploadForm from "./_components/UploadForm";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "@/firebaseConfig";
import { useUser } from "@clerk/nextjs";
import { generateRandomString } from "@/app/_utils/GenerateRandomString";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function Upload() {
  const { user } = useUser();
  const [progress, setProgress] = useState();

  const router = useRouter();

  const storage = getStorage(app);
  const db = getFirestore(app);

  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };
    const storageRef = ref(storage, "file-upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on("state_changed", (snapshot) => {
      const progressUpdate =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progressUpdate + "% done");
      setProgress(progressUpdate);

      if (progressUpdate === 100) {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          saveInfo(file, downloadURL);
        });
      }
    });
  };

  const saveInfo = async (file, fileUrl) => {
    const docId = generateRandomString().toString();
    try {
      await setDoc(doc(db, "uploadedFile", docId), {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        fileUrl: fileUrl,
        userEmail: user?.primaryEmailAddress.emailAddress,
        userName: user?.fullName,
        id: docId,
        shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
      });
      successfulUpload(docId);
    } catch (error) {
      console.error("Failed to save file info", error);
      unsuccessfulUpload();
    }
  };

  const successfulUpload = (docId) => {
    toast("Upload successful!");
    setTimeout(() => {
      router.push("./file-preview/" + docId);
    }, 3000);
  };

  const unsuccessfulUpload = () => {
    toast.error("Upload failed, please try again!");
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <div className="p-5 px-8 md:px-28 bg-gray-900 w-full h-full">
      <h2 className="text-[20px] text-center m-5">
        Hoist the <strong className="text-primary">Files</strong>, Share the{" "}
        <strong className="text-primary">Fortune</strong>!
      </h2>
      <UploadForm
        uploadBtnClick={(file) => uploadFile(file)}
        progress={progress}
      />
    </div>
  );
}

export default Upload;
