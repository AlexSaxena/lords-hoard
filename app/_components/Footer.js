import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start dark:text-teal-300">
            <Image src="/logo_chest.png" width={100} height={100} alt="logo" />
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400">
            No Copyright &copy; 2024. Created by Alex Saxena.
          </p>
        </div>
      </div>
    </footer>
  );
}
