'use client';

import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [q, setQ] = useState('');
  const rawPath = usePathname();         
  const pathname = rawPath ?? '/';       

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkStyle = (href: string) =>
    `relative pb-1 transition text-white
     hover:text-red-600
     after:transition-all after:duration-300
     ${isActive(href) ? " after:content-[''] after:absolute after:transition-all after:duration-300 after:left-0 after:-bottom-[2px] after:h-[3px] after:bg-red-600 after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <header className="fixed inset-x-0 z-50  bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1400px] h-12 sm:h-14 md:h-16 mx-auto px-4 py-0 sm:py-2 md:py-3 flex items-center justify-between">
        
        <div className="flex items-center gap-6">
          <div className="w-28 h-16  relative">
  <Image
    src="/logo1.png"
    alt="logo"
    fill
    className="
      object-contain
      scale-140    ml-3     /* default */
      sm:scale-140  sm:ml-5     /* ≥ 640px */
      md:scale-110  md:-ml-1     /* ≥ 768px */
      lg:scale-160  lg:ml-4    /* ≥ 1024px */
      xl:scale-150  xl:ml-20     /* ≥ 1280px */
    "
  />
</div>

        <nav className="hidden md:flex items-center gap-8 ml-10 text-sm md:text-sm md:-ml-2 md:gap-4 lg:gap-5 lg:text-base lg:ml-10 xl:text-base xl:gap-10 xl:ml-40 cursor-pointer">
             
            <Link href="/" className={linkStyle("/")}>Home</Link>
            <Link href="/movies" className={linkStyle("/movies")}>Movies</Link>
             <Link href="/tv" className={linkStyle("/tv")}>TV Shows</Link>
            <Link href="/contact" className={linkStyle("/contact")}>Contact</Link>

        </nav>

        </div>

        <div className="flex items-center gap-3">
          <div className=" flex items-center bg-white/15 rounded-full px-2 py-3 w-[130px] h-5 -ml-5 -mr-3 text-xs    
              sm:w-[220px] sm:text-sm sm:h-7           /* ≥640px */
              md:w-[260px] md:text-md md:h-8               /* ≥768px */
              lg:w-[360px] lg:text-md lg:mr-5     max-w-[70vw]">
            <FiSearch className="text-white/70 w-5 h-5 mr-2" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search"
              className="bg-transparent outline-none placeholder:text-white/60 text-white w-full"
            />
          </div>

          <button className="ml-2 rounded-md bg-red-600 hover:bg-red-700 px-2 py-1 mr-2 text-xs  /* smaller text for mobile */
                    sm:px-4 sm:py-1 sm:text-sm    /* ≥640px (tablets) */
                    md:px-5 md:py-1.5 md:text-sm  /* ≥768px */
                    lg:px-6 lg:py-2 lg:text-base lg:mr-3 xl:mr-20  /* ≥1024px desktops */ font-semibold cursor-pointer">
            Sign In
          </button>
        </div>

      </div>
    </header>
  );
}
