// components/HeroSection.tsx
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="flex items-center justify-between bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 py-20 px-4">
      <div className="w-full md:w-1/2 text-white space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          PT. KEONG SUMBER MAKMUR
        </h1>
        <p className="text-xl md:text-2xl">
          Keong Escargot Berkualitas untuk Anda
        </p>
        <Link
          href="#products"
          className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white rounded-full text-lg transition transform hover:bg-blue-700 hover:scale-105"
        >
          Pelajari Lebih Lanjut
        </Link>
      </div>

      {/* Gambar Produk */}
      <div className="w-full md:w-1/2 mt-20">
        <img
          src="/contoh.jpg" // Ganti dengan path gambar produk Anda
          alt="Keong Escargot"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
