"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submission started");
    console.log("Form data:", form);
    setIsSubmitting(true);

    try {
      console.log("Attempting to add document to Firestore...");
      
      const docRef = await addDoc(collection(db, "contactMessages"), {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: new Date(),
      });

      console.log("✅ Document written with ID:", docRef.id);
      
      alert("Form submitted successfully!");
      
      setSuccess("Thank you! Your message has been sent successfully.");

      setForm({ name: "", email: "", message: "" });
      
      setTimeout(() => setSuccess(""), 5000);
      
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      alert("Failed to submit form. Please try again!");
      setSuccess("");
    } finally {
      console.log("Submission process completed");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 md:px-20 pt-10 md:mt-4 pb-20 text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-center">Contact Us</h1>


      <form
        onSubmit={submitForm}
        className="max-w-x1 mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-xl border w-[400px] sm:w-[420px] md:w-[500px] lg:w-[550px] border-white/10"
      >
        {success && (
          <p className="text-green-400 mb-4 text-center font-semibold">{success}</p>
        )}

        <label className="block mb-3">
          <span className="text-white/80">Name</span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full mt-1 px-3 py-2 rounded bg-white/20 text-white outline-none"
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-600 hover:bg-red-700 transition py-2 rounded text-white cursor-pointer font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 mb-8 sm:mb-0 mt-6 xl:mt-10">
        <div className="flex items-center gap-3">
          <FiMail className="text-red-500 text-2xl" />
          <p>Email: karan.babar2004@gmail.com</p>
        </div>

        <div className="flex items-center gap-3">
          <FiPhone className="text-red-500 text-2xl" />
          <p>Phone: +1 98 906 278**</p>
        </div>

        <div className="flex items-center gap-3">
          <FiMapPin className="text-red-500 text-2xl" />
          <p>Pune, India</p>
        </div>
      </div>

    </div>
  );
}