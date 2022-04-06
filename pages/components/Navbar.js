import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import ButtonConfetti from "./buttonConfetti";

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="border-b-2 border-white/20">
      <div className="max-w-8xl  mx-auto px-4 py-4 md:py-4">
      <div className="flex  md:flex-row justify-between items-center">
          <a className=" text-lg font-bold text-white hover:underline hover:underline-offset-4 transition duration-0 hover:duration-300 hover:ease-in-out" href="#">Della Avrillia{"'s"} Birthday</a>
        {/* Logo / Home / Text */}
          <ButtonConfetti />
        </div>
      </div>
    </div>
     //Rest of the code
  );
}