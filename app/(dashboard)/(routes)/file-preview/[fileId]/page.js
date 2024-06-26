"use client";
import { app } from "@/firebaseConfig";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FileInfo from "./_components/FileInfo";
import FileForm from "./_components/FileForm";

function FilePreview({ params }) {
  const db = getFirestore(app);
  const [fileData, setFileData] = useState();

  useEffect(() => {
    console.log(params?.fileId);
    params?.fileId && getFileInfo();
  }, [params?.fileId]);

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFileData(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const handlePasswordChange = async (newPassword) => {
    console.log("Password updated in FilePreview:", newPassword);
    const docRef = doc(db, "uploadedFile", params?.fileId);
    await updateDoc(docRef, {
      password: newPassword,
    });
  };

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 w-full h-[70vh] bg-gray-900">
      {/* {console.log("fileData Page ->", fileData)} */}
      {fileData && (
        <>
          <FileInfo fileData={fileData} />
          <FileForm
            fileData={fileData}
            onPasswordChange={handlePasswordChange}
          />
        </>
      )}
    </div>
  );
}

export default FilePreview;
