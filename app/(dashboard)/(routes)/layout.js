import React from "react";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

function layout({ children }) {
  return (
    <div>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
        {children}
      </SignedIn>
    </div>
  );
}

export default layout;
