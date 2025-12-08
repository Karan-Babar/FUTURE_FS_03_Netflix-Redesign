'use client';
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

 export default function Navbar() {
  const [q, setQ] = useState('');

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Logo (replace with your AI logo in /public/logo.png) */}
          <div className="w-28 h-10 relative ">
            <Image src="/logo1.png" alt="logo" fill className='scale-200' style={{ objectFit: 'contain' }} />
          </div>

          <nav className="hidden md:flex items-center gap-6 ml-10 text-20 text-white/90 cursor-pointer">
           <Link href="/" className="hover:text-white transition">Home</Link>
  <Link href="/movies" className="hover:text-white transition">Movies</Link>
  <Link href="/tv" className="hover:text-white transition">TV Shows</Link>
  <Link href="/plans" className="hover:text-white transition">Plans</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative hidden sm:flex items-center bg-white/8 rounded-full px-3 py-1 w-[360px] max-w-[60vw]">
            <FiSearch className="text-white/70 w-5 h-5 mr-2 cursor-pointer" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search"
              className="bg-transparent outline-none placeholder:text-white/60 text-white w-full"
            />
          </div>

          {/* Login Button */}
          <button className="ml-2 rounded-md bg-red-600 hover:bg-red-700 px-4 py-1 text-sm font-semibold cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}