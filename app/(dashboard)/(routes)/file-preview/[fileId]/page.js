"use client";
import { app } from "@/firebaseConfig";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";

function FilePreview({ params }) {
  const db = getFirestore(app);

  useEffect(() => {
    console.log(params?.fileId);
    params?.fileId && getFileInfo();
  }, []);

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  return <div>FilePreview</div>;
}

export default FilePreview;
