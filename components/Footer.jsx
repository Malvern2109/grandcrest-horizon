import Link from 'next/link';

export default function Footer() {
  const divisions = [
    "Grandcrest STEM Hub",
    "Grandcrest Media & Branding",
    "Grandcrest Print & Creative Works",
    "Grandcrest Youth Development & Talent",
    "Grandcrest Ventures"
  ]; // [cite: 83]

  return (
    <footer className="bg-blue-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Tagline */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-tight">GRANDCREST HORIZON</h3>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              Innovating Ideas. Empowering Futures. [cite: 14]<br/><br/>
              A Private Limited Company dedicated to developing impactful ventures and empowering youth. [cite: 15, 16]
            </p>
          </div>
          
          {/* Official Divisions */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Divisions</h3>
            <ul className="text-blue-200 text-sm space-y-2">
              {divisions.map((division, idx) => (
                <li key={idx}>
                  <Link href="/divisions">
                    <span className="hover:text-white cursor-pointer transition">{division}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="text-blue-200 text-sm space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>98A Anzac Dr, Mabelreign<br/>Harare, Zimbabwe [cite: 15]</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+263 787 370 842 / +263 713 038 105 [cite: 2]</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>admin@grandcresthorizon.co.zw [cite: 2]</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-sm text-blue-300">
          &copy; {new Date().getFullYear()} Grandcrest Horizon (Pvt) Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}