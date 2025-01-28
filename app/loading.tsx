import Image from "next/image";
import React from "react";
import loader from "@/assets/loader.gif";

export default function LoadingPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Image
        src={loader}
        alt="Loading"
        width={150}
        height={150}
      />
    </div>
  );
}
