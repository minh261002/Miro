import React from "react";
import { SignInButton, UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <UserButton />
    </div>
  );
};

export default Home;
