import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { blogPosts } from '@/data/blog-posts';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  const post = blogPosts.find(p => p.slug === slug);
  const relatedPosts = post
    ? blogPosts.filter(p => post.relatedPostIds.includes(p.id))
    : [];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Článek nenalezen</h1>
          <Link href="/blog">
            <a className="text-water-600 hover:text-water-700 font-semibold">
              ← Zpět na blog
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        canonical={`https://mlzidla.cz/blog/${post.slug}`}
        openGraph={{
          type: 'article',
          url: `https://mlzidla.cz/blog/${post.slug}`,
          title: post.title,
          description: post.excerpt,
          images: [
            {
              url: post.image,
              alt: post.title,
            },
          ],
          article: {
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
          },
        }}
      />

      <article className="min-h-screen bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link href="/blog">
            <a className="text-water-600 hover:text-water-700 font-semibold mb-8 inline-block">
              ← Zpět na blog
            </a>
          </Link>

          {/* Header */}
          <header className="mb-12 pb-8 border-b-2 border-gray-200">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-water-100 text-water-700 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center justify-between text-gray-600">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {/* Simple markdown rendering - replace with actual markdown parser for production */}
            <div
              className="text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
            />
          </div>

          {/* Internal links */}
          {post.internalLinks.length > 0 && (
            <div className="bg-water-50 rounded-lg p-8 mb-12 border border-water-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Doporučené odkazy:</h3>
              <ul className="space-y-2">
                {post.internalLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={`https://mlzidla.cz/${link.slug}`}
                      className="text-water-600 hover:text-water-700 font-semibold hover:underline"
                    >
                      → {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-300 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="border-t-2 border-gray-200 pt-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Související články</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map(relatedPost => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 hover:text-water-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">{relatedPost.excerpt}</p>
                      <a className="text-water-600 font-semibold hover:text-water-700">
                        Přečíst článek →
                      </a>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default BlogPost;
