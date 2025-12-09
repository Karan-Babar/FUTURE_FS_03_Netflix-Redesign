"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const submitForm = async (e: any) => {
    e.preventDefault();

    await addDoc(collection(db, "contactMessages"), {
      ...form,
      createdAt: new Date(),
    });

    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="px-6 md:px-20 pt-24 pb-20 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">Contact Us</h1>

      {/* CONTACT INFO */}
      <div className="flex flex-col md:flex-row justify-center gap-10 mb-10">
        <div className="flex items-center gap-3">
          <FiMail className="text-red-500 text-2xl" />
          <p>Email: support@flixapp.com</p>
        </div>

        <div className="flex items-center gap-3">
          <FiPhone className="text-red-500 text-2xl" />
          <p>Phone: +1 800 123 4567</p>
        </div>

        <div className="flex items-center gap-3">
          <FiMapPin className="text-red-500 text-2xl" />
          <p>Mumbai, India</p>
        </div>
      </div>

      {/* CONTACT FORM */}
      <form
        onSubmit={submitForm}
        className="max-w-xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/10"
      >
        {success && (
          <p className="text-green-400 mb-4 text-center">
            Message Sent Successfully!
          </p>
        )}

        <label className="block mb-3">
          <span className="text-white/80">Name</span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full mt-1 px-3 py-2 rounded bg-white/20 text-white outline-none"
          />
        </label>

        <label className="block mb-3">
          <span className="text-white/80">Email</span>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full mt-1 px-3 py-2 rounded bg-white/20 text-white outline-none"
          />
        </label>

        <label className="block mb-5">
          <span className="text-white/80">Message</span>
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full mt-1 px-3 py-2 rounded bg-white/20 text-white outline-none"
          />
        </label>

        <button className="w-full bg-red-600 hover:bg-red-700 transition py-2 rounded text-white font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
}
