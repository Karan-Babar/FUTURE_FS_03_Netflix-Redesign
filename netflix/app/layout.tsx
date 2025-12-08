import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Netflix Redesign",
  description: "Netflix UI Clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <div className="pt-6 flex">
          <Sidebar />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
