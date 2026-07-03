"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFBF7] to-[#FAF7F2] py-12 sm:py-16 lg:py-28 px-4 sm:px-6">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন (সাটল গ্লো এবং প্রফেশনাল ভাইব) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-orange-100/30 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-5 sm:gap-6 md:gap-8">
        {/* ১. টপ ব্যাজ/ট্যাগলাইন */}
        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-3 sm:px-4 py-1.5 rounded-full shadow-xs animate-fade-in max-w-[92vw]">
          <span className="flex h-2 w-2 shrink-0 rounded-full bg-[#ff7a00] animate-pulse" />
          <span className="text-[#ff7a00] text-[10px] sm:text-xs font-bold tracking-wide sm:tracking-wider uppercase whitespace-nowrap overflow-hidden text-ellipsis">
            The Tastiest Place on the Internet
          </span>
        </div>

        {/* ২. প্রিমিয়াম হেডিং/টাইটেল */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight leading-[1.2] sm:leading-[1.15]">
          Share, Discover &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a00] to-[#e06b00] drop-shadow-xs">
            Cook
          </span>{" "}
          <br className="hidden sm:inline" />
          the Best Recipes
        </h1>

        {/* ৩. শর্ট ডেসক্রিপশন */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl font-medium leading-relaxed text-[#555555] px-2 sm:px-0">
          From quick weeknight dinners to gourmet weekend feasts — find, save,
          and share kitchen-tested recipes you love with a global culinary
          community.
        </p>

        {/* ৪. অ্যাকশনেবল CTA বাটন গ্রুপ */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 w-full sm:w-auto px-4 sm:px-0">
          <Link
            href="/browse-recipes"
            className="w-full sm:w-auto text-center bg-gradient-to-r from-[#ff7a00] to-[#e5650f] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 duration-200 cursor-pointer"
          >
            Explore Recipes
          </Link>
          <Link
            href="/auth/signup"
            className="w-full sm:w-auto text-center border-2 border-amber-700/30 text-black font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 duration-200 cursor-pointer"
          >
            Create Account
          </Link>
        </div>

        {/* ৫. প্রফেশনাল ট্রাস্ট ফ্যাক্টর/স্ট্যাটাস কাউন্টার */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-12 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200/60 w-full max-w-xl text-center">
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-[#1a1a1a]">
              10k+
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-400 mt-1 leading-tight">
              Recipes
            </p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-[#1a1a1a]">
              5k+
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-400 mt-1 leading-tight">
              Active Chefs
            </p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-[#1a1a1a]">
              4.9★
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-400 mt-1 leading-tight">
              Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
