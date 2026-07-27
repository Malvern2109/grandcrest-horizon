import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title = 'Grandcrest Horizon' }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-white">
      <Head>
        <title>{title} | Innovating Ideas. Empowering Futures.</title>
        <meta name="description" content="An innovative and diversified company empowering youth through STEM, media, creativity, and entrepreneurship. [cite: 12]" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}