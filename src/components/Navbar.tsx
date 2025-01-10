import React from "react";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-col text-center font-semibold justify-center  p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
        Learning Data Fetching Methods with MockAPI in Sanity Integration
      </h1>

      <div className="flex justify-center gap-5 mt-5 animate-bounce">
        <Link href={"/"}>
          <FaHome size={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/">
          <CiLinkedin size={30} />
        </Link>
        <Link href={"/"}>
          <FaGithub size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
