import React, { useState } from "react";

function FileItem({ file }) {
  const [password, setPassword] = useState("");
  return (
    file && (
      <div className="p-5 rounded-md bg-white flex flex-col items-center">
        <div className="text-center flex-col gap-3 items-center flex">
          <h2 className="text-[20px] text-gray-600">
            <strong>{file.userName}</strong> shared this file with you!
          </h2>
          <h2 className="text-[15px] text-gray-400">- File Details -</h2>
          <h2 className="text-gray-500 text-[15px]">
            File Name: {file.fileName} | File Type: {file.fileType} | File Size:
            {file.fileSize} Bytes
          </h2>
        </div>
        {file.password.length > 1 ? (
          <input
            type="password"
            className="p-2 border rounded-md text-[14px] mt-5 text-center outline-blue-400"
            placeholder="Enter Password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        ) : null}
        <button
          className="flex gap-2 p-2 bg-primary text-white rounded-full w-full items-center
         hover:bg-blue-600 text-[14px] mt-5 text-center justify-center disabled:bg-gray-300"
          onClick={() => window.open(file?.fileUrl)}
          disabled={file.password !== password}
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span> Download</span>
        </button>
      </div>
    )
  );
}

export default FileItem;
