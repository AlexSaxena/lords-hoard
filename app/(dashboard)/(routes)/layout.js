import React from "react";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import SideNav from "../_components/SideNav";

function layout({ children }) {
  return (
    <div>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <div className="h-full w-64 flex-col fixed inset-y-0 z-50">
          <SideNav />
        </div>
        <div className="ml-64">
          {children}
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </div>
  );
}

export default layout;
