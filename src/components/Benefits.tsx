import React from 'react';
import { benefits } from '@/data/benefits';

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-cool-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Proč zvolit Mlžítka?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Šest hlavních důvodů, proč se tisíce měst a domácností rozhodly pro naši řešení
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg hover:border-water-200 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>

              <ul className="space-y-2">
                {benefit.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-water-600 font-bold mt-1">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
