import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

const Blog = () => {
  const categories = Array.from(new Set(blogPosts.map(p => p.category)));

  return (
    <>
      <NextSeo
        title="Blog - Články o mlžítích a chlazen"
        description="Přečtěte si zajímavé články o chlazen měst, evaporativním chlazen a novch technologích"
        canonical="https://mlzidla.cz/blog"
        openGraph={{
          url: 'https://mlzidla.cz/blog',
          title: 'Blog - Mlžítka',
        }}
      />

      <div className="bg-gradient-to-b from-water-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link href="/">
              <a className="text-water-600 hover:text-water-700 font-semibold mb-4 inline-block">
                ← Zpět na úv
              </a>
            </Link>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog a novinky</h1>
            <p className="text-xl text-gray-600">
              Všechny články o chlazen, inovacích a inspiraci
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            <Link href="/blog">
              <a className="px-4 py-2 bg-water-600 text-white rounded-full font-semibold hover:bg-water-700 transition-colors">
                Všechno
              </a>
            </Link>
            {categories.map(cat => (
              <Link key={cat} href={`/blog?category=${cat}`}>
                <a className="px-4 py-2 bg-gray-200 text-gray-900 rounded-full font-semibold hover:bg-gray-300 transition-colors">
                  {cat === 'tipy' && '💡 Tipy'}
                  {cat === 'innovations' && '🚀 Inovace'}
                  {cat === 'uspory' && '💰 Úspory'}
                  {cat === 'zdravi' && '❤️ Zdrav'}
                  {cat === 'inspirace' && '✨ Inspirace'}
                </a>
              </Link>
            ))}
          </div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group h-full flex flex-col border border-gray-100">
                  <div className="bg-gradient-to-r from-water-400 to-cool-400 h-48 flex items-center justify-center overflow-hidden">
                    <div className="text-white text-5xl group-hover:scale-110 transition-transform duration-300">📰</div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-water-100 text-water-700 rounded-full text-xs font-semibold">
                        {post.category === 'tipy' && '💡 Tipy'}
                        {post.category === 'innovations' && '🚀 Inovace'}
                        {post.category === 'uspory' && '💰 Úspory'}
                        {post.category === 'zdravi' && '❤️ Zdrav'}
                        {post.category === 'inspirace' && '✨ Inspirace'}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-water-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-500">{post.author}</span>
                      <span className="text-xs text-gray-500">{post.date}</span>
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

export default Blog;
