import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const serviceCategories = [
    {
      category: "Education & STEM",
      services: [
        { title: "STEM Tutoring", desc: "Personalized and group tutoring in Mathematics, Physics, Chemistry, and STEM subjects." },
        { title: "Innovation Workshops", desc: "Hands-on coding, robotics, and engineering project sessions." },
        { title: "Science Kits", desc: "Pre-packaged educational materials for practical experiments and model building." }
      ]
    },
    {
      category: "Creative & Media",
      services: [
        { title: "Corporate Branding", desc: "Logos, visual identity, and promotional design tailored for businesses and NGOs." },
        { title: "Content Creation", desc: "Professional photography, video production, and social media management." },
        { title: "Media Training", desc: "Public speaking and communication workshops for individuals and teams." }
      ]
    },
    {
      category: "Printing & Production",
      services: [
        { title: "Commercial Printing", desc: "High-quality flyers, banners, posters, and booklets." },
        { title: "Branded Merchandise", desc: "Custom t-shirts, stationery, and corporate event materials." }
      ]
    },
    {
      category: "Youth Empowerment & Ventures",
      services: [
        { title: "Mentorship Programs", desc: "Life skills, leadership training, and personal development coaching." },
        { title: "Startup Incubation", desc: "Business advisory, networking, and support for emerging youth ventures." },
        { title: "Sports Development", desc: "Structured physical activity and engagement through our Judose initiatives." }
      ]
    }
  ];

  const portfolioItems = [
    {
      title: "Grandcrest STEM Hub",
      desc: "Cambridge & ZIMSEC performance tracking and practical science education.",
      img: "/images/stem-hub.jpg",
      tag: "Education"
    },
    {
      title: "ProRentit Platform",
      desc: "An upcoming property tech startup incubated by Grandcrest Ventures.",
      img: "/images/prorentit.jpg",
      tag: "Ventures"
    },
    {
      title: "Plan Before You Start (Book)",
      desc: "Authored by Co-Founder Sir Chiko, guiding youth to live with purpose.",
      img: "/images/book.jpg",
      tag: "Youth Development"
    },
    {
      title: "Premium Apparel Line",
      desc: "High-quality branded hoodies produced by Print & Creative Works.",
      img: "/images/hoodies.jpg",
      tag: "Merchandise"
    },
    {
      title: "Custom Graphic T-Shirts",
      desc: "Inspirational apparel line designed to keep youth focused and driven.",
      img: "/images/tshirts.jpg",
      tag: "Merchandise"
    }
  ];

  return (
    <Layout title="Our Services">
      {/* Page Header */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">Our Services & Products</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            From hands-on STEM education to professional media branding and incubated startups, explore the comprehensive solutions offered across our divisions.
          </p>
        </div>
      </section>

      {/* Services Text Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {serviceCategories.map((group, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-100 pb-3 mb-8">
                {group.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.services.map((service, sIdx) => (
                  <div key={sIdx} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition">
                    <h3 className="text-lg font-bold text-blue-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Portfolio & Products Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Featured Portfolio</h2>
            <div className="mt-2 h-1 w-20 bg-blue-700 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              A glimpse into our active programs, incubated startups, and physical merchandise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition group">
                <div className="relative h-72 w-full bg-gray-200 overflow-hidden">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {item.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-900 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-blue-200 mb-8">
            Whether you are looking for STEM tutoring, startup incubation, or branded merchandise, we are ready to build the future with you.
          </p>
          <Link href="/contact">
            <span className="inline-block px-8 py-3 bg-white text-blue-900 font-bold rounded-md hover:bg-gray-100 transition cursor-pointer">
              Get in Touch Today
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}