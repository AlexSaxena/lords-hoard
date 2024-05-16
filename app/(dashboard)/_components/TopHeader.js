import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import React from "react";
import Image from "next/image";

function TopHeader() {
  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end">
      <Menu className="md:hidden" />
      <Image
        src="/logo_chest.png"
        width={150}
        height={100}
        alt="logo"
        className="md:hidden"
      />
      <UserButton />
    </div>
  );
}

export default TopHeader;
