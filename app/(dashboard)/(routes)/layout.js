import React from "react";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import SideNav from "../_components/SideNav";
import TopHeader from "../_components/TopHeader";

function layout({ children }) {
  return (
    <div>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <div className="h-full w-64 flex-col fixed inset-y-0 z-50 md:flex hidden">
          <SideNav />
        </div>
        <div className="md:ml-64">
          <TopHeader />
          {children}
        </div>
      </SignedIn>
    </div>
  );
}

export default layout;
