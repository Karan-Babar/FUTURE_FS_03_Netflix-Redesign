'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiSearch, FiHome, FiFilm, FiTv, FiDownload, FiList, FiUser } from 'react-icons/fi';

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
  poster: `/movies/movie${i + 1}.jpg`, // points to movie1.jpg ... movie12.jpg
}));

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Top Navbar + Left Sidebar are placed in the layout of the page */}
      <Navbar />

      <div className="pt-16"> {/* padding top to avoid navbar overlap */}
        <div className="flex">
          <Sidebar />

          <main className="flex-1">
            <Hero />

            <section className="px-6 py-8">
              <h2 className="text-2xl font-bold mb-4 ml-10">New this week</h2>
              <MovieRows movies={sampleMovies.slice(0, 14)} />
            </section>

            <section className="px-6 py-8">
              <h2 className="text-2xl font-bold mb-4 ml-10">Trending Now</h2>
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
function Navbar() {
  const [q, setQ] = useState('');

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Logo (replace with your AI logo in /public/logo.png) */}
          <div className="w-28 h-8 relative">
            <Image src="/logo.png" alt="logo" fill style={{ objectFit: 'contain' }} />
          </div>

          <nav className="hidden md:flex items-center gap-4 text-sm text-white/80">
            <a className="hover:text-white transition">Home</a>
            <a className="hover:text-white transition">Movies</a>
            <a className="hover:text-white transition">TV Shows</a>
            <a className="hover:text-white transition">Plans</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative hidden sm:flex items-center bg-white/8 rounded-full px-3 py-1 w-[360px] max-w-[60vw]">
            <FiSearch className="text-white/70 w-5 h-5 mr-2" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search"
              className="bg-transparent outline-none placeholder:text-white/60 text-white w-full"
            />
          </div>

          {/* Login Button */}
          <button className="ml-2 rounded-md bg-red-600 hover:bg-red-700 px-4 py-1 text-sm font-semibold">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}

/* ------------------ Sidebar ------------------ */
function Sidebar() {
  const icons = [
    { icon: <FiHome />, label: 'Home' },
    { icon: <FiFilm />, label: 'Movies' },
    { icon: <FiTv />, label: 'TV' },
    { icon: <FiList />, label: 'My List' },
    { icon: <FiDownload />, label: 'Downloads' },
  ];

  return (
    <aside className="hidden sm:flex flex-col items-center gap-6 w-20 py-6 fixed left-0 top-16 h-[calc(100vh-64px)] z-40">

      {icons.map((it, idx) => (
        <button
          key={idx}
          className="flex flex-col items-center text-white/80 hover:text-white transition"
          title={it.label}
        >
          <div className="text-2xl">{it.icon}</div>
        </button>
      ))}
    </aside>
  );
}

/* ------------------ Hero ------------------ */
function Hero() {
  return (
<section className="relative z-0 h-[40vh] md:h-[50vh] w-full">
      {/* Background image */}
       <div className="absolute inset-0 -z-10 scale-120 translate-x-80 -translate-y-5">
  <Image src="/thumbnail2.jpg" alt="hero" fill priority style={{ objectFit: 'contain' }} />
  <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-transparent to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent" />
  {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/55" /> */}
</div>


      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-end">
        <div className="pb-2 md:pb-8 w-full md:w-1/2">
          {/* Title image or text */}
          <div className="mb-4">
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight ml-10">MONEY HEIST PART 4</h1>
          </div>

          {/* meta + buttons */}
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-yellow-400 text-black px-2 py-0.5 rounded-md text-sm font-semibold ml-10">IMDb 8.8/10</span>
            <span className="text-white/70">2B+ Streams</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-full bg-red-600 px-6 py-2 text-lg font-semibold hover:bg-red-700 ml-10">Play</button>
            <button className="rounded-full bg-white/10 px-6 py-2 text-lg hover:bg-white/20">Watch Trailer</button>
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
    <div className="flex flex-col gap-6">
      {chunks.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-4 overflow-x-auto scrollbar-hide ml-10">
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
    <div className="inline-block w-40 md:w-48 h-60 md:h-72 shrink-0 rounded-md overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="relative w-full h-full">
        <Image src={poster} alt={title || 'Movie poster'} fill style={{ objectFit: 'cover' }} />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition" />
      </div>
    </div>
  );
}
