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


const totalMovies = 40; 
const sampleMovies = Array.from({ length: totalMovies }).map((_, i) => ({
  id: i + 1,
  title: `Movie ${i + 1}`,   
  poster: `/movies/movie${i + 1}.jpg`,
}));


export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      

      <div className="pt-16"> 
        <div className="flex">
         

          <main className="flex-1">
            <Hero />

            <section className="px-4 py-8">
              <h2 className="text-1xl sm:text-2xl font-bold mb-2 sm:mb-4 md:ml-10">New this week</h2>
              <MovieRows movies={sampleMovies.slice(0, 20)} />
            </section>

            <section className="px-4 py-6 md:py-8 -mb-12 md:-mb-10">
              <h2 className="text-1xl sm:text-2xl font-bold mb-2 sm:mb-4 md:ml-10">Trending Now</h2>
              <MovieRows movies={sampleMovies.slice(21, 40)} />
            </section>

            <div className="h-24" /> {/* spacer */}
          </main>
        </div>
      </div>
    </div>
  );
}


function Hero() {
  return (
    <section className="relative z-0 h-[45vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden -mt-20 -mb-3">
      
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


function MovieRows({
  movies,
}: {
  movies: { id: number; title: string; poster: string }[];
}) {
  const chunks = chunkArray(movies, 10);

  return (
    <div className="flex flex-col gap-6 -mb-10 md:-mb-10">
      {chunks.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="
            flex gap-3 md:gap-4
            overflow-x-auto
            scrollbar-hide
            scroll-smooth
            px-0 
            md:ml-10
            min-w-full
          "
        >
          {row.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster={movie.poster}
            />
          ))}
        </div>
      ))}
    </div>
  );
}



function MovieCard({
  title,
  poster,
}: {
  title: string;
  poster: string;
}) {
  return (
    <div
      className="
        shrink-0
         w-28 h-44 sm:w-40 md:w-48
        sm:h-60 md:h-72
        rounded-md
        overflow-hidden
        cursor-pointer
        transition-transform
        duration-300
        hover:scale-105
      "
    >
      <div className="relative w-full h-full">
        <Image
          src={poster}
          alt={title || "Movie poster"}
          fill
          sizes="(max-width: 640px) 112px, (max-width: 768px) 160px, 192px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition" />
      </div>
    </div>
  );
}
