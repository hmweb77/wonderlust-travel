"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../app/assets/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center md:flex-1 flex-none px-2 mx-2">
        <Image  src={logo} width={100} alt="logo"/>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-black border-black"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal custom-menu">
            <li className="mr-2"><Link href="/pricing"className="hover:bg-accent">Pricing</Link></li>
             <li className="mr-2"><Link href="/blogs" className="hover:bg-accent">Blogs</Link></li> 
            <li className="mr-2"><Link href="/contact-us" className="hover:bg-accent">Contact Us</Link></li>
            <li className="mr-2"><Link href="/start-designing" className="hover:bg-accent">Start Designing</Link></li>
            </ul>
            </div>
        </div>
        <div>
          <Link href="#get-started"className="btn btn-accent">
              Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
