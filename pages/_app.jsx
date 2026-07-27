import { Roboto } from 'next/font/google';
import '../styles/globals.css';

// Initialize Roboto with the standard corporate font weights
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  );
}