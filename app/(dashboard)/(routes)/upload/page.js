"use client";
import React from "react";
import UploadForm from "./_components/UploadForm";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "@/firebaseConfig";

function Upload() {
  const storage = getStorage(app);

  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };
    const storageRef = ref(storage, "file-upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on("state_changed", (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");

      progress === 100 &&
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
    });
  };

  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-[20px] text-center m-5 ">
        Hoist the <strong className="text-primary">Files</strong>, Share the{" "}
        <strong className="text-primary">Fortune</strong>!
      </h2>
      <UploadForm uploadBtnClick={(file) => uploadFile(file)} />
    </div>
  );
}

export default Upload;
