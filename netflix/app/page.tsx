'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiSearch, FiHome, FiFilm, FiTv, FiDownload, FiList, FiUser } from 'react-icons/fi';

// Small helper: sample movie data (replace URLs with your poster images in /public/movies)
const sampleMovies = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Movie ${i + 1}`,
  poster: `/movies/movie${(i % 6) + 1}.jpg`, // ensure you have movie1.jpg ... movie6.jpg
}));

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navbar + Left Sidebar are placed in the layout of the page */}
      <Navbar />

      <div className="pt-16"> {/* padding top to avoid navbar overlap */}
        <div className="flex">
          <Sidebar />

          <main className="flex-1">
            <Hero />

            <section className="px-6 py-8">
              <h2 className="text-2xl font-bold mb-4">New this week</h2>
              <MovieRow movies={sampleMovies.slice(0, 8)} />
            </section>

            <section className="px-6 py-8">
              <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
              <MovieRow movies={sampleMovies.slice(4, 12)} />
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
    <aside className="hidden sm:flex flex-col items-center gap-6 w-20 py-6 fixed left-0 top-16 h-[calc(100vh-64px)]">
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
    <section className="relative h-[60vh] md:h-[72vh] w-full">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image src="/thumbnail.png" alt="hero" fill priority style={{ objectFit: 'cover' }} />
        {/* Gradient overlay to create vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/95" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-end">
        <div className="pb-12 md:pb-20 w-full md:w-1/2">
          {/* Title image or text */}
          <div className="mb-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">MONEY HEIST — PART 4</h1>
          </div>

          {/* meta + buttons */}
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-yellow-400 text-black px-2 py-0.5 rounded-md text-sm font-semibold">IMDb 8.8/10</span>
            <span className="text-white/70">2B+ Streams</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-full bg-red-600 px-6 py-2 text-lg font-semibold hover:bg-red-700">Play</button>
            <button className="rounded-full bg-white/10 px-6 py-2 text-lg hover:bg-white/20">Watch Trailer</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ Movie Row ------------------ */
function MovieRow({ movies }: { movies: { id: number; title: string; poster: string }[] }) {
  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
        {movies.map((m) => (
          <MovieCard key={m.id} title={m.title} poster={m.poster} />
        ))}
      </div>
    </div>
  );
}

function MovieCard({ title, poster }: { title: string; poster: string }) {
  return (
    <div className="inline-block w-40 md:w-48 h-60 md:h-72 shrink-0 rounded-md overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="relative w-full h-full">
        <Image src={poster} alt={title} fill style={{ objectFit: 'cover' }} />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition" />
      </div>
    </div>
  );
}
