import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import GlobalApi from "../../../../../_utils/GlobalApi";

function FileForm({ fileData, onPasswordChange }) {
  const [passwordEnabled, setPasswordEnabled] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useUser();

  // Toggle password field enabled state and clear password if disabled
  const togglePassword = () => {
    if (!passwordEnabled) {
      setPassword(""); // Clear the password when disabling
      onPasswordChange(""); // Also clear the password in the parent component if disabling
    }
    setPasswordEnabled(!passwordEnabled);
  };

  // Update the password state on change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Update the email state on change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to save the password back to the parent component
  const savePassword = () => {
    onPasswordChange(password);
  };

  // Placeholder function for sending an email
  const sendEmail = () => {
    console.log("Sending email to:", email);

    const data = {
      emailToSend: email,
      userName: user?.fullName,
      fileName: fileData.fileName,
      fileSize: fileData.fileSize,
      fileType: fileData.fileType,
      shortUrl: fileData.shortUrl,
    };
    GlobalApi.SendEmail(data).then((resp) => {
      console.log("resp", resp);
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-8">
      <form className="grid grid-cols-1 gap-6">
        <div>
          <label
            htmlFor="shortUrl"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Short Url
          </label>
          <input
            type="text"
            id="shortUrl"
            name="short_url"
            value={fileData.shortUrl}
            readOnly
            className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
          />
        </div>

        <div>
          <label
            htmlFor="sendToEmail"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Share File by Email
          </label>
          <input
            type="email"
            id="sendToEmail"
            name="send_to_email"
            value={email}
            onChange={handleEmailChange}
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              id="enablePassword"
              checked={passwordEnabled}
              onChange={togglePassword}
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Enable Password
            </span>
          </label>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            disabled={!passwordEnabled}
            className={`mt-1 w-full rounded-md border-gray-200 text-sm shadow-sm ${
              passwordEnabled
                ? "bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                : "bg-gray-300 text-gray-500 dark:bg-gray-700 dark:text-gray-600"
            }`}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={savePassword}
            className="rounded-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:hover:bg-blue-700"
          >
            Save Password
          </button>
          <button
            type="button"
            onClick={sendEmail}
            className="rounded-md border border-green-600 bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 dark:hover:bg-green-700"
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
}

export default FileForm;
