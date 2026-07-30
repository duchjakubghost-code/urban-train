import React, { useState } from 'react';
import { reviews } from '@/data/reviews';
import { FaStar } from 'react-icons/fa';

export const Reviews: React.FC = () => {
  const [newReview, setNewReview] = useState({
    author: '',
    role: '',
    rating: 5,
    text: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle review submission
    console.log('New review:', newReview);
    setNewReview({ author: '', role: '', rating: 5, text: '' });
  };

  return (
    <section id="recenze" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Co si o nás myslí naši klienti?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Přečtěte si recenze od měst, obcí a soukromých uživatelů
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-900">{review.author}</h3>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
                {review.verified && (
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                    ✓ Ověřeno
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Add review form */}
        <div className="bg-gradient-to-r from-water-50 to-cool-50 rounded-xl p-12 border border-water-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Přidejte svou recenzi</h3>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Vaše jméno
                </label>
                <input
                  type="text"
                  value={newReview.author}
                  onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-water-600 focus:border-transparent outline-none transition-all"
                  placeholder="Jan Novák"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Vaše role
                </label>
                <input
                  type="text"
                  value={newReview.role}
                  onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-water-600 focus:border-transparent outline-none transition-all"
                  placeholder="Vedoucí parku"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Hodnocení
              </label>
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-water-600 focus:border-transparent outline-none transition-all"
              >
                <option value="5">★★★★★ Vynikající (5 hvězd)</option>
                <option value="4">★★★★☆ Velmi dobré (4 hvězdy)</option>
                <option value="3">★★★☆☆ Dobré (3 hvězdy)</option>
                <option value="2">★★☆☆☆ Uspokojivé (2 hvěz)</option>
                <option value="1">★☆☆☆☆ Slabé (1 hvězda)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Vaše recenze
              </label>
              <textarea
                value={newReview.text}
                onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-water-600 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Napište, jak se vám líbila naše řešení a proč bychom měli být doporučeni ostatním..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-water-600 to-water-700 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Odeslat recenzi
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
