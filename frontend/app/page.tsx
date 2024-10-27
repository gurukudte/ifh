"use client";

import { Links } from "@/components/links";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-10 items-center justify-center text-center">
        <h1 className=" text-5xl">Welcome to Indian Food House (IFH) </h1>

        <h2 className="text-3xl">Order now by clicking below</h2>
      </div>

      <Links />
    </div>
  );
}
