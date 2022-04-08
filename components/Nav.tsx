import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Nav = () => {
  return (
    <>
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start bg-black fixed top-0 left-0 right-0 z-10 ">
        <div className="flex-shrink-0 flex items-center container mx-auto">
          <Link href="/">
            <a>
              <Image src="/logo.svg" height={60} width={80} />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
