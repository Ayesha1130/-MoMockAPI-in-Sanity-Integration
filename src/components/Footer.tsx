import React from "react";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col text-center font-semibold justify-center p-4">
      <h1 className="font-semibold text-2xl">
        Created by Senior Student Ayesha Iqbal
      </h1>

      <div className="flex justify-center gap-5 mt-4 animate-bounce">
        <Link href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/">
          <CiLinkedin size={30} />
        </Link>
        <Link href={"/"}>
          <FaGithub size={30} />
        </Link>
        <Link href={"/"}>
          <FaTwitter size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
