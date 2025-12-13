"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white/70 mt-0 border-t border-white/40">
      <div className="max-w-[1400px] mx-auto px-6 py-5 ml-10 md:py-7">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-xs md:text-sm gap-2 md:gap-6 mb-10">
          <div className="flex flex-col gap:1 md:gap-3">
            <a className="hover:text-white cursor-pointer">FAQ</a>
            <a className="hover:text-white cursor-pointer">Investor Relations</a>
            <a className="hover:text-white cursor-pointer">Privacy</a>
            <a className="hover:text-white cursor-pointer">Speed Test</a>
          </div>

          <div className="flex flex-col gap:1 md:gap-3">
            <a className="hover:text-white cursor-pointer">Help Center</a>
            <a className="hover:text-white cursor-pointer">Jobs</a>
            <a className="hover:text-white cursor-pointer">Cookie Preferences</a>
            <a className="hover:text-white cursor-pointer">Legal Notices</a>
          </div>

          <div className="flex flex-col gap:1 md:gap-3">
            <a className="hover:text-white cursor-pointer">Account</a>
            <a className="hover:text-white cursor-pointer">Ways to Watch</a>
            <a className="hover:text-white cursor-pointer">Corporate Information</a>
            <a className="hover:text-white cursor-pointer">Only on Netflix</a>
          </div>

          <div className="flex flex-col gap:1 md:gap-3">
            <a className="hover:text-white cursor-pointer">Media Center</a>
            <a className="hover:text-white cursor-pointer">Terms of Use</a>
            <a className="hover:text-white cursor-pointer">Contact Us</a>
          </div>
        </div>

        <p className="text-white/80  text-xs md:text-sm mr-10 -mt-5 md:mt-3 hover:text-white text-center mb-10 md:-mb-2 ">Netflix Clone • Built by Karan ❤️</p>
      </div>
    </footer>
  );
}
