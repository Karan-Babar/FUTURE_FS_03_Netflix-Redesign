'use client';
import { FiHome, FiFilm, FiTv, FiList, FiDownload } from "react-icons/fi";
import Link from "next/link";

 export default function Sidebar() {
  const icons = [
    { icon: <FiHome />, label: 'Home' },
    { icon: <FiFilm />, label: 'Movies' },
    { icon: <FiTv />, label: 'TV' },
    { icon: <FiList />, label: 'My List' },
    { icon: <FiDownload />, label: 'Downloads' },
  ];

  return (
    <aside className="hidden sm:flex flex-col items-center gap-6 w-20 py-6 fixed left-0 top-16 h-[calc(100vh-64px)] z-40">

  <Link href="/" className="flex flex-col items-center text-white/80 hover:text-white transition cursor-pointer">
    <FiHome className="text-2xl" />
  </Link>

  <Link href="/movies" className="flex flex-col items-center text-white/80 hover:text-white transition cursor-pointer">
    <FiFilm className="text-2xl" />
  </Link>

  <Link href="/tv" className="flex flex-col items-center text-white/80 hover:text-white transition cursor-pointer">
    <FiTv className="text-2xl" />
  </Link>

  <Link href="/my-list" className="flex flex-col items-center text-white/80 hover:text-white transition cursor-pointer">
    <FiList className="text-2xl" />
  </Link>

  <Link href="/download" className="flex flex-col items-center text-white/80 hover:text-white transition cursor-pointer">
    <FiDownload className="text-2xl" />
  </Link>

</aside>

  );
}