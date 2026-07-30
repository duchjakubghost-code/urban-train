import React from 'react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Mlžítka - Moderní chlazen měst"
        defaultTitle="Mlžítka pro města - Ekologické chlazen bez mokrého oblečení"
        description="Profesionální mlžovací systémy pro města, parky a rezidenci. Úspora vody až 89%, energie až 70%. Připojení na vodovod 3-8 bar."
        canonical="https://mlzidla.cz"
        openGraph={{
          type: 'website',
          locale: 'cs_CZ',
          url: 'https://mlzidla.cz',
          site_name: 'Mlžítka',
          images: [
            {
              url: 'https://mlzidla.cz/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Mlžítka - Moderní chlazen měst',
              type: 'image/jpeg',
            },
          ],
        }}
        twitter={{
          handle: '@mlzidlacz',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
