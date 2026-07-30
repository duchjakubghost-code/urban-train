import React from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { Hero } from '@/components/Hero';
import { Products } from '@/components/Products';
import { Benefits } from '@/components/Benefits';
import { Projects } from '@/components/Projects';
import { Reviews } from '@/components/Reviews';
import { BlogPreview } from '@/components/BlogPreview';
import { Contact } from '@/components/Contact';

const Home = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Mlžítka',
    description: 'Profesionální mlžovací systémy pro města a rezidenci',
    url: 'https://mlzidla.cz',
    logo: 'https://mlzidla.cz/logo.png',
    sameAs: [
      'https://www.facebook.com/mlzidla',
      'https://www.instagram.com/mlzidla',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CZ',
      addressRegion: 'Česká republika',
      streetAddress: 'Praha 2',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+420777123456',
      email: 'info@mlzidla.cz',
      availableLanguage: ['cs', 'en'],
    },
  };

  return (
    <>
      <NextSeo
        title="Mlžítka pro města - Moderní chlazen bez mokrého oblečení"
        description="Profesionální mlžovací systémy pro města, parky a rezidenci. Úspora vody až 89%, energie až 70%. Připojení na vodovod 3-8 bar."
        canonical="https://mlzidla.cz"
        openGraph={{
          type: 'website',
          url: 'https://mlzidla.cz',
          title: 'Mlžítka - Moderní chlazen měst',
          description: 'Mlžovací systémy s evaporativním chlazeím pro města, parky a zahrady',
          images: [
            {
              url: 'https://mlzidla.cz/og-home.jpg',
              width: 1200,
              height: 630,
              alt: 'MlžítkaGo - Chlazen měst',
            },
          ],
        }}
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <meta name="keywords" content="mlžítka, chlazen, města, evaporativní, úspora vody, ekologické" />
        <meta name="author" content="Mlžítka.cz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main content */}
      <main className="overflow-x-hidden">
        <Hero />
        <Products />
        <Benefits />
        <Projects />
        <Reviews />
        <BlogPreview />
        <Contact />
      </main>
    </>
  );
};

export default Home;
