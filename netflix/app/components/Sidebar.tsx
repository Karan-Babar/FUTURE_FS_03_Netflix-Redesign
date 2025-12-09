'use client';
import { FiHome, FiFilm, FiTv, FiMail, FiDownload } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkStyle = (href: string) =>
    `flex flex-col items-center cursor-pointer transition relative
     text-white/80 hover:text-white
     after:absolute after:-bottom-1 after:h-[3px] after:w-0 after:bg-red-600 after:transition-all after:duration-300
     hover:after:w-6
     ${isActive(href) ? "text-white after:w-6 after:bg-red-600" : ""}`;

  return (
    <aside className="hidden sm:flex flex-col items-center gap-6 w-20 py-6 fixed left-0 top-16 h-[calc(100vh-64px)] z-40">

      <Link href="/" className={linkStyle("/")}>
        <FiHome className="text-2xl" />
      </Link>

      <Link href="/movies" className={linkStyle("/movies")}>
        <FiFilm className="text-2xl" />
      </Link>

      <Link href="/tv" className={linkStyle("/tv")}>
        <FiTv className="text-2xl" />
      </Link>

      <Link href="/contact" className="flex flex-col items-center text-white/80 hover:text-red-600 transition cursor-pointer">
        <FiMail className="text-2xl" />
      </Link>

      <Link href="/download" className={linkStyle("/download")}>
        <FiDownload className="text-2xl" />
      </Link>

    </aside>
  );
}
