import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Contact: React.FC = () => {
  return (
    <section id="kontakt" className="py-20 bg-gradient-to-b from-white to-water-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Kontaktujte nás
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Máte otázky? Chcete si objednat demo? Jsme tady pro vás.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-water-600 text-white">
                  <FaPhone />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Telefon</h3>
                <p className="text-gray-600">+420 777 123 456</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-water-600 text-white">
                  <FaEnvelope />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">info@mlzidla.cz</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-water-600 text-white">
                  <FaMapMarkerAlt />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Adresa</h3>
                <p className="text-gray-600">Praha 2, Česká republika</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Jméno
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-water-600 focus:border-transparent outline-none transition-all"
                    placeholder="Jan Novák"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-water-600 focus:border-transparent outline-none transition-all"
                    placeholder="jan@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Organizace
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-water-600 focus:border-transparent outline-none transition-all"
                  placeholder="Město/Obec/Firma"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Zájem
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-water-600 focus:border-transparent outline-none transition-all">
                  <option value="info">Obecné informace</option>
                  <option value="demo">Demo</option>
                  <option value="quote">Nabídka</option>
                  <option value="custom">Vlastní řešení</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Zpráva
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-water-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Napište nám svou zprávu..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-water-600 to-water-700 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Odeslat zprávu
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
