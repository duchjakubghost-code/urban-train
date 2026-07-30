import React from 'react';
import { blogPosts } from '@/data/blog-posts';
import Link from 'next/link';

export const BlogPreview: React.FC = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Poslední články a novinky
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zajímavosti, tipy a inspirace ze světa mlžítka a urbánního chlazení
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group h-full flex flex-col">
                {/* Image placeholder */}
                <div className="bg-gradient-to-r from-water-400 to-cool-400 h-48 flex items-center justify-center overflow-hidden">
                  <div className="text-white text-4xl group-hover:scale-110 transition-transform duration-300">📰</div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-water-100 text-water-700 rounded-full text-xs font-semibold">
                      {post.category === 'tipy' && '💡 Tipy'}
                      {post.category === 'innovations' && '🚀 Inovace'}
                      {post.category === 'uspory' && '💰 Úspory'}
                      {post.category === 'zdravi' && '❤️ Zdraví'}
                      {post.category === 'inspirace' && '✨ Inspirace'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-water-600 transition-colors">
                    {post.title}
                  </h3>
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

        {/* See all posts */}
        <div className="text-center">
          <Link href="/blog">
            <a className="inline-block px-8 py-3 bg-water-600 text-white rounded-lg font-semibold hover:bg-water-700 transition-colors duration-200">
              Přečtěte si všechny články →
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
