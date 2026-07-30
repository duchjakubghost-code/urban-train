import React from 'react';
import { FaWater, FaBolt, FaLeaf, FaSmile } from 'react-icons/fa';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-water-50 via-white to-cool-50 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-water-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cool-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Animated title */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-water-600 via-cool-600 to-water-800">
            Mlžítka pro moderní města
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Chlaďte veřejné prostory bez mokrého oblečení. Pouze připojení na vodovod 3-8 bar.
            Úspora vody až 89%, energetické náklady až 70% nižší.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <a
            href="#produkty"
            className="px-8 py-4 bg-gradient-to-r from-water-600 to-water-700 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
          >
            Prozkoumat produkty
          </a>
          <a
            href="#kontakt"
            className="px-8 py-4 border-2 border-water-600 text-water-600 rounded-lg font-semibold text-lg hover:bg-water-50 transition-all duration-300"
          >
            Vyžádat demo
          </a>
        </div>

        {/* Benefits preview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl w-full">
          <div className="bg-white/80 backdrop-blur p-4 rounded-lg text-center">
            <FaWater className="text-water-600 text-3xl mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-700">89% úspora vody</p>
          </div>
          <div className="bg-white/80 backdrop-blur p-4 rounded-lg text-center">
            <FaBolt className="text-yellow-500 text-3xl mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-700">70% nižší energia</p>
          </div>
          <div className="bg-white/80 backdrop-blur p-4 rounded-lg text-center">
            <FaLeaf className="text-cool-600 text-3xl mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-700">Ekologické</p>
          </div>
          <div className="bg-white/80 backdrop-blur p-4 rounded-lg text-center">
            <FaSmile className="text-pink-500 text-3xl mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-700">Komfortní</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-water-600 text-center">
          <p className="text-sm font-semibold mb-2">Přejedete dolů</p>
          <div className="text-2xl">↓</div>
        </div>
      </div>
    </div>
  );
};
