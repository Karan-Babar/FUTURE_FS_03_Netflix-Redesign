'use client';

import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [q, setQ] = useState('');
  const rawPath = usePathname();          // may be undefined briefly
  const pathname = rawPath ?? '/';       // safe fallback

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // NOTE: after:content-[''] is REQUIRED so the pseudo-element actually exists.
  const linkStyle = (href: string) =>
    `relative pb-1 transition text-white
     hover:text-red-600
     after:transition-all after:duration-300
     ${isActive(href) ? " after:content-[''] after:absolute after:transition-all after:duration-300 after:left-0 after:-bottom-[2px] after:h-[3px] after:bg-red-600 after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">
        
        <div className="flex items-center gap-6">
          <div className="w-28 h-10 relative">
            <Image src="/logo1.png" alt="logo" fill className="scale-200" style={{ objectFit: 'contain' }} />
          </div>

          <nav className="hidden md:flex items-center gap-8 ml-10 text-20 cursor-pointer">
            <Link href="/" className={linkStyle("/")}>Home</Link>
            <Link href="/movies" className={linkStyle("/movies")}>Movies</Link>
            <Link href="/tv" className={linkStyle("/tv")}>TV Shows</Link>
            <Link href="/plans" className={linkStyle("/plans")}>Plans</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:flex items-center bg-white/8 rounded-full px-3 py-1 w-[360px] max-w-[60vw]">
            <FiSearch className="text-white/70 w-5 h-5 mr-2" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search"
              className="bg-transparent outline-none placeholder:text-white/60 text-white w-full"
            />
          </div>

          <button className="ml-2 rounded-md bg-red-600 hover:bg-red-700 px-4 py-1 text-sm font-semibold cursor-pointer">
            Sign In
          </button>
        </div>

      </div>
    </header>
  );
}
