import { File, HardHat, Upload } from "lucide-react";
import Image from "next/image";
import React from "react";

function SideNav() {
  // List of Items to be in sidebar
  const menulist = [
    { id: 1, name: "upload", icon: Upload, path: "/upload" },
    { id: 2, name: "files", icon: File, path: "/files" },
    { id: 3, name: "WIP", icon: HardHat, path: "#" },
  ];

  return (
    <div>
      <div className="o-5 border-b">
        <Image src="/logo_chest.png" width={150} height={100} />
      </div>
    </div>
  );
}

export default SideNav;
