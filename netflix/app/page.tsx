'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiSearch, FiHome, FiFilm, FiTv, FiDownload, FiMail, FiUser } from 'react-icons/fi';
import Link from "next/link";


// Helper to split an array into chunks of given size
function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}


// Small helper: sample movie data (replace URLs with your poster images in /public/movies)
const totalMovies = 18; // total posters you have in /public/movies
const sampleMovies = Array.from({ length: totalMovies }).map((_, i) => ({
  id: i + 1,
  title: `Movie ${i + 1}`,   // ADD THIS
  poster: `/movies/movie${i + 1}.jpg`,
}));


export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Top Navbar + Left Sidebar are placed in the layout of the page */}
      

      <div className="pt-16"> {/* padding top to avoid navbar overlap */}
        <div className="flex">
         

          <main className="flex-1">
            <Hero />

            <section className="px-4 py-8">
              <h2 className="text-1xl sm:text-2xl font-bold mb-2 sm:mb-4 md:ml-10">New this week</h2>
              <MovieRows movies={sampleMovies.slice(0, 14)} />
            </section>

            <section className="px-4 py-6 md:py-8 -mb-12 md:-mb-10">
              <h2 className="text-1xl sm:text-2xl font-bold mb-2 sm:mb-4 md:ml-10">Trending Now</h2>
              <MovieRows movies={sampleMovies.slice(4, 18)} />
            </section>

            <div className="h-24" /> {/* spacer */}
          </main>
        </div>
      </div>
    </div>
  );
}

/* ------------------ Navbar ------------------ */
// function Navbar() {
//   const [q, setQ] = useState('');

//   return (
//     <header className="fixed inset-x-0 top-0 z-40 bg-black/60 backdrop-blur-md border-b border-white/5">
//       <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">
//         <div className="flex items-center gap-6">
//           {/* Logo (replace with your AI logo in /public/logo.png) */}
//           <div className="w-28 h-10 relative ">
//             <Image src="/logo1.png" alt="logo" fill className='scale-200' style={{ objectFit: 'contain' }} />
//           </div>

//           <nav className="hidden md:flex items-center gap-6 ml-10 text-20 text-white/90 cursor-pointer ">
//            <Link href="/" className="hover:text-white transition">Home</Link>
//            <Link href="/movies" className="hover:text-white transition">Movies</Link>
//            <Link href="/tv" className="hover:text-white transition">TV Shows</Link>
//            <Link href="/plans" className="hover:text-white transition">Plans</Link>
//           </nav>
//         </div>

//         <div className="flex items-center gap-3">
//           {/* Search */}
//           <div className="relative hidden sm:flex items-center bg-white/8 rounded-full px-3 py-1 w-[360px] max-w-[60vw]">
//             <FiSearch className="text-white/70 w-5 h-5 mr-2 cursor-pointer" />
//             <input
//               value={q}
//               onChange={(e) => setQ(e.target.value)}
//               placeholder="Search"
//               className="bg-transparent outline-none placeholder:text-white/60 text-white w-full"
//             />
//           </div>

//           {/* Login Button */}
//           <button className="ml-2 rounded-md bg-red-600 hover:bg-red-700 px-4 py-1 text-sm font-semibold cursor-pointer">
//             Sign In
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

/* ------------------ Sidebar ------------------ */
// function Sidebar() {
//   const icons = [
//     { icon: <FiHome />, label: 'Home' },
//     { icon: <FiFilm />, label: 'Movies' },
//     { icon: <FiTv />, label: 'TV' },
//     { icon: <FiMail />, label: 'My List' },
//     { icon: <FiDownload />, label: 'Downloads' },
//   ];

//   return (
//     <aside className="hidden md:flex flex-col items-center gap-6 w-20 py-6 fixed left-0 top-16 h-[calc(100vh-64px)] z-40">

//   <Link href="/" className="flex flex-col items-center text-white/100 hover:text-red-600 transition cursor-pointer">
//     <FiHome className="text-2xl" />
//   </Link>

//   <Link href="/movies" className="flex flex-col items-center text-white/100 hover:text-red-600 transition cursor-pointer">
//     <FiFilm className="text-2xl" />
//   </Link>

//   <Link href="/tv" className="flex flex-col items-center text-white/100 hover:text-red-600 transition cursor-pointer">
//     <FiTv className="text-2xl" />
//   </Link>

//   <Link href="/contact" className="flex flex-col items-center text-white/100 hover:text-red-600 transition cursor-pointer">
//         <FiMail className="text-2xl" />
//       </Link>

//   <Link href="/download" className="flex flex-col items-center text-white/100 hover:text-red-600 transition cursor-pointer">
//     <FiDownload className="text-2xl" />
//   </Link>

// </aside>

//   );
// }

/* ------------------ Hero ------------------ */
function Hero() {
  return (
    <section className="relative z-0 h-[45vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden -mt-20 -mb-3">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/thumbnail2.jpg"
          alt="hero"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-120 md:scale-88 lg:scale-90 xl:scale-80 " 
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:ml-10 lg:ml-20 h-full flex items-end">
        <div className="pb-0 md:pb-0 w-full ">

          <div className="mb-2">
            <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              MONEY HEIST PART 4
            </h1>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 mb-3">
            <span className="bg-yellow-400 text-black px-2 py-0.5 rounded-md text-xs sm:text-sm font-semibold">
              IMDb 8.8/10
            </span>
            <span className="text-white/70 text-xs sm:text-sm">2B+ Streams</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button className="rounded-full bg-red-600 px-6 py-2 text-sm sm:text-lg font-semibold hover:bg-red-700">
              Play
            </button>
            <button className="rounded-full bg-white/20 px-6 py-2 text-sm sm:text-lg hover:bg-white/30">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ Movie Row ------------------ */
function MovieRows({ movies }: { movies: { id: number; title: string; poster: string }[] }) {
  const chunks = chunkArray(movies, 7); // split into rows of 7

  return (
    <div className="flex flex-col gap-6 -mb-10 md:-mb-10">
      {chunks.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-0 md:ml-10">
          {row.map((movie) => (
            <MovieCard key={movie.id} title={movie.title} poster={movie.poster} />
          ))}
        </div>
      ))}
    </div>
  );
}


function MovieCard({ title, poster }: { title: string; poster: string }) {
  return (
    <div className="inline-block w-30 sm:w-40 md:w-48 h-46 sm:h-60 cursor-pointer md:h-72 shrink-0 rounded-md overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="relative w-full h-full">
        <Image src={poster} alt={title || 'Movie poster'} fill style={{ objectFit: 'cover' }} />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition" />
      </div>
    </div>
  );
}
