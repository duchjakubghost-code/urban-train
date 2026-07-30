import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projekt nenalezen</h1>
          <Link href="/realizace">
            <a className="text-water-600 hover:text-water-700 font-semibold">
              ← Zpět na realizace
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <NextSeo
        title={project.title}
        description={project.description}
        canonical={`https://mlzidla.cz/realizace/${project.id}`}
        openGraph={{
          type: 'article',
          url: `https://mlzidla.cz/realizace/${project.id}`,
          title: project.title,
          description: project.description,
        }}
      />

      <div className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link href="/realizace">
            <a className="text-water-600 hover:text-water-700 font-semibold mb-8 inline-block">
              ← Zpět na realizace
            </a>
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
                <p className="text-2xl text-water-600 font-semibold">{project.location}</p>
              </div>
              <span className="inline-block px-4 py-2 bg-cool-100 text-cool-700 rounded-lg text-sm font-semibold">
                {project.type === 'city' && 'Město'}
                {project.type === 'municipality' && 'Obec'}
                {project.type === 'park' && 'Park'}
                {project.type === 'public' && 'Veřejné'}
              </span>
            </div>
          </header>

          {/* Image gallery placeholder */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-water-400 to-cool-400 rounded-xl h-96 flex items-center justify-center mb-4">
              <div className="text-white text-7xl">📸</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.images.map((img, idx) => (
                <div key={idx} className="bg-gradient-to-br from-water-300 to-cool-300 rounded-lg h-32 flex items-center justify-center">
                  <div className="text-white text-2xl">📸</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">O projektu</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{project.description}</p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Hlavní přínosy</h2>
            <ul className="space-y-3">
              {project.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-cool-600 font-bold text-lg mt-1">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-water-50 to-cool-50 rounded-xl p-12 border-l-4 border-water-600 mb-12">
            <p className="text-2xl font-serif italic text-gray-900 mb-4">
              "{project.testimonial.quote}"
            </p>
            <div>
              <p className="font-bold text-gray-900">{project.testimonial.author}</p>
              <p className="text-gray-600">{project.testimonial.role}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Klíčová slova:</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-water-600 to-cool-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Chcete si objednat podobné řešení?</h3>
            <p className="text-lg mb-6 opacity-90">Kontaktujte nás ještě dnes a my vám poskytneme bezplatnou konzultaci</p>
            <a
              href="/#kontakt"
              className="inline-block px-8 py-3 bg-white text-water-600 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200"
            >
              Objednat konzultaci
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
