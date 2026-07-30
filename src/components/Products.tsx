import React from 'react';
import { products } from '@/data/products';
import { FaCheck } from 'react-icons/fa';

export const Products: React.FC = () => {
  return (
    <section id="produkty" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Naše produktové řady
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Od přenosných řešení pro zahrady až po profesionální systémy pro města
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-br from-water-50 to-white border border-water-100 rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Product image placeholder */}
              <div className="bg-gradient-to-r from-water-400 to-cool-400 h-48 flex items-center justify-center">
                <div className="text-white text-4xl">💧</div>
              </div>

              {/* Product info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                {/* Price */}
                <div className="mb-4 pb-4 border-b border-water-200">
                  <p className="text-2xl font-bold text-water-600">{product.price}</p>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FaCheck className="text-cool-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`#kontakt?produkt=${product.id}`}
                  className="block w-full text-center px-4 py-2 bg-water-600 text-white rounded-lg font-semibold hover:bg-water-700 transition-colors duration-200"
                >
                  Další info
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom solution CTA */}
        <div className="mt-16 bg-gradient-to-r from-water-600 to-cool-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Potřebujete vlastní řešení?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Nabízíme kompletně přizpůsobená řešení pro vaše specifické potřeby
          </p>
          <a
            href="#kontakt"
            className="inline-block px-8 py-3 bg-white text-water-600 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200"
          >
            Požádat o nabídku
          </a>
        </div>
      </div>
    </section>
  );
};
