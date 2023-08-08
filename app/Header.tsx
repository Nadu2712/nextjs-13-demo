import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-5 bg-blue-500">
      <Link href="/" className="px-4 py-1 bg-white text-blue-500 rounded-full">
        Home
      </Link>
    </header>
  );
};

export default Header;
