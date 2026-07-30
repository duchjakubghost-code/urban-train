import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <>
      <NextSeo
        title="Naše realizace - Mlžítka v praxi"
        description="Podívejte se, jak jsme zlepšili kvalitu života v českých městech, obcích a parcích"
        canonical="https://mlzidla.cz/realizace"
        openGraph={{
          url: 'https://mlzidla.cz/realizace',
          title: 'Naše realizace - Mlžítka',
        }}
      />

      <div className="bg-gradient-to-b from-water-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link href="/">
              <a className="text-water-600 hover:text-water-700 font-semibold mb-4 inline-block">
                ← Zpět na úvod
              </a>
            </Link>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Naše realizace</h1>
            <p className="text-xl text-gray-600">
              Známe každý projekt osobně. Zde ukazujeme, jak jsme pomáhali městům, obcím a rezidencím.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map(project => (
              <Link key={project.id} href={`/realizace/${project.id}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 h-full flex flex-col">
                  {/* Image */}
                  <div className="bg-gradient-to-br from-water-400 to-cool-400 h-64 flex items-center justify-center overflow-hidden">
                    <div className="text-white text-6xl group-hover:scale-110 transition-transform duration-300">📸</div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-water-600 transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-water-600 font-semibold">{project.location}</p>
                      </div>
                      <span className="inline-block px-3 py-1 bg-cool-100 text-cool-700 rounded-full text-xs font-semibold">
                        {project.type === 'city' && 'Město'}
                        {project.type === 'municipality' && 'Obec'}
                        {project.type === 'park' && 'Park'}
                        {project.type === 'public' && 'Veřejné'}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>

                    {/* Benefits */}
                    <div className="mb-6 pb-6 border-t border-gray-200 pt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Hlavní přínosy:</h4>
                      <ul className="space-y-1">
                        {project.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-700">
                            <span className="text-cool-600 font-bold">✓</span> {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-water-50 rounded-lg p-4 border border-water-200">
                      <p className="text-sm italic text-gray-700 mb-2">"<span className="line-clamp-2">{project.testimonial.quote}</span>"</p>
                      <p className="text-xs font-semibold text-water-600">{project.testimonial.author}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
