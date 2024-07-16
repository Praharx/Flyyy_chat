"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <main className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center z-10">
        <span className="font-semibold italic text-2xl p-3 text-white">flyyy.</span>
        <div>
          <button 
            className="mx-6 my-4 px-6 py-2 text-white bg-transparent border border-neutral-700 rounded-md hover:bg-white hover:text-black transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50" 
            onClick={() => router.push("/chat")}
          >
            Try it Now!
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow-[0.6] flex justify-center items-center">
        <div className="relative">
          <Image 
            width={600} 
            height={300} 
            alt="backdrop" 
            className="opacity-[0.03] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="/backdrop.png"
          />
          <div className="text-center z-10 relative">
            <h1 className="text-6xl font-serif mb-4">
              <span className="text-zinc-100">Converse.</span>
              <span className="text-zinc-200">Create.</span>
              <span className="text-zinc-300">Change.</span>
            </h1>
            <p className="font-thin italic text-neutral-300">
              Not your ordinary chat app.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}