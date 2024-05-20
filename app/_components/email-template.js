import * as React from "react";

export const EmailTemplate = ({ response }) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#333333",
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h1 style={{ color: "#333333" }}>Lords Hoard</h1>
      <p>From: {response.userName},</p>
      <p>File name: {response.fileName}</p>
      <p>File Size: {response.fileSize}</p>
      <p>File Type: {response.fileType}</p>
      <a
        href={response.shortUrl}
        style={{
          display: "inline-block",
          backgroundColor: "#007BFF",
          color: "white",
          padding: "10px 20px",
          textAlign: "center",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
      >
        Click here to download
      </a>
    </div>
  );
};
