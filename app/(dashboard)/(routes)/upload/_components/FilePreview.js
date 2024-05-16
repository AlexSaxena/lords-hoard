import { File, X } from "lucide-react";
import React from "react";

function FilePreview({ file, removeFile }) {
  return (
    <div className="flex items-center gap-3 justify-between mt-5 border rounded-md p-2 border-blue-300">
      <div className="flex items-center p-2">
        <File />
        <div className="text-left pl-3">
          <h2>{file.name}</h2>
          <h2 className="text-[12px] text-gray-400">
            {file.type} / {(file.size / 1024 / 1024).toFixed(2)}MB
          </h2>
        </div>
      </div>
      <X className="text-red-600 cursor-pointer" onClick={() => removeFile()} />
    </div>
  );
}

export default FilePreview;
