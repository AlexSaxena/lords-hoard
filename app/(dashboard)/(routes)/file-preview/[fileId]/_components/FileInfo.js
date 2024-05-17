import React from "react";

function FileInfo({ fileData }) {
  return (
    <div>
      <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <img
          alt={`File -> ${fileData.fileName}`}
          src={fileData.fileUrl}
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6 text-center">
          <h3 className="text-lg font-medium text-gray-900">
            {fileData.fileName}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {fileData.fileType}
          </p>
        </div>
      </article>
    </div>
  );
}

export default FileInfo;
