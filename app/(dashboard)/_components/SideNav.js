import { File, HardHat, Upload } from "lucide-react";
import Image from "next/image";
import React from "react";

function SideNav() {
  // List of Items to be in sidebar
  const menuList = [
    { id: 1, name: "Upload", icon: Upload, path: "/upload" },
    { id: 2, name: "Files", icon: File, path: "/files" },
    { id: 3, name: "WIP", icon: HardHat, path: "#" },
  ];

  return (
    <div>
      <div className="p-5 border-b">
        <Image src="/logo_chest.png" width={150} height={100} alt="logo" />
      </div>
      <div className="flex flex-col float-left">
        {menuList.map((item, index) => (
          <button
            key={item.id}
            className="flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-gray-500"
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
