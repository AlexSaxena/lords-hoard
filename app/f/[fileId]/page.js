"use client";
import { app } from "@/firebaseConfig";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FileItem from "./_components/FileItem";
import Link from "next/link";
import Image from "next/image";

function FileView({ params }) {
  const db = getFirestore(app);
  const [file, setFile] = useState();

  useEffect(() => {
    console.log(params.fileId);
    params.fileId && getFileInfo();
  }, []);

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("/f path data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  return (
    <div className="bg-gray-100 h-screen w-full flex justify-center items-center flex-col gap-4">
      <Link href="/">
        <Image src="/logo_chest.png" width={150} height={100} alt="logo" />
      </Link>
      <FileItem file={file} />
    </div>
  );
}

export default FileView;
