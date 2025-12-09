"use client";

import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function TestFirebase() {
  const testBackend = async () => {
    console.log("⚡ Starting Firebase test…");

    try {
      const result = await addDoc(collection(db, "testCollection"), {
        test: "Hello Firebase",
        time: new Date(),
      });

      console.log("🔥 SUCCESS:", result);
      alert("SUCCESS — Firebase backend is working!");
    } catch (err) {
      console.error("❌ FIREBASE ERROR:", err);
      alert("ERROR — Check console for details");
    }
  };

  return (
    <div className="p-10">
      <button
        onClick={testBackend}
        className="bg-red-600 text-white px-5 py-2 rounded"
      >
        Test Firebase
      </button>
    </div>
  );
}
