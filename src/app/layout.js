// app/layout.js
import React from 'react';
import Head from 'next/head';

export const metadata = {
  title: 'Your SEO Title',
  description: 'Your SEO Description',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
      </Head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
