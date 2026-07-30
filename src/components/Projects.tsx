import React from 'react';
import { projects } from '@/data/projects';
import Link from 'next/link';

export const Projects: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <section id="realizace" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Naše realizace
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Podívejte se, jak jsme zlepšili kvalitu života v českých městech a obcích
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/realizace/${project.id}`}
            >
              <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
                {/* Image placeholder */}
                <div className="bg-gradient-to-br from-water-400 to-cool-400 h-48 flex items-center justify-center overflow-hidden">
                  <div className="text-white text-5xl group-hover:scale-110 transition-transform duration-300">📸</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                      <p className="text-sm text-water-600 font-semibold">{project.location}</p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-cool-100 text-cool-700 rounded-full text-xs font-semibold">
                      {project.type === 'city' && 'Město'}
                      {project.type === 'municipality' && 'Obec'}
                      {project.type === 'park' && 'Park'}
                      {project.type === 'public' && 'Veřejné'}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Testimonial */}
                  <div className="bg-water-50 rounded-lg p-4 mb-4">
                    <p className="text-sm italic text-gray-700 mb-2">"<span className="line-clamp-2">{project.testimonial.quote}</span>"</p>
                    <p className="text-xs font-semibold text-water-600">{project.testimonial.author}</p>
                  </div>

                  <a
                    href={`/realizace/${project.id}`}
                    className="inline-block text-water-600 font-semibold hover:text-water-700 transition-colors"
                  >
                    Více informací →
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See all projects */}
        <div className="text-center mt-12">
          <Link href="/realizace">
            <a className="inline-block px-8 py-3 bg-water-600 text-white rounded-lg font-semibold hover:bg-water-700 transition-colors duration-200">
              Zobrazit všechny realizace →
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
