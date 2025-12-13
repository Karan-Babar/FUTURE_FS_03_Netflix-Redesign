"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiFilm, FiTv, FiMail, FiDownload } from "react-icons/fi";

export default function MobileNavbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const iconStyle = (href: string) =>
    `flex flex-col items-center text-2xl transition 
     ${isActive(href) ? "text-red-600" : "text-white/90"}
     hover:text-red-600`;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 border-t border-white/20 flex justify-between  px-8 py-4 backdrop-blur-lg z-50">

      <Link href="/" className={iconStyle("/")}>
        <FiHome />
      </Link>

      <Link href="/movies" className={iconStyle("/movies")}>
        <FiFilm />
      </Link>

      <Link href="/tv" className={iconStyle("/tv")}>
        <FiTv />
      </Link>

      <Link href="/contact" className={iconStyle("/contact")}>
        <FiMail />
      </Link>

      <Link href="/download" className={iconStyle("/download")}>
        <FiDownload />
      </Link>

    </nav>
  );
}
