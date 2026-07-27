import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  const divisions = [
    { title: "Grandcrest STEM Hub", desc: "Practical science education, tutoring, and our Innovations Lab." },
    { title: "Grandcrest Media & Branding", desc: "Professional content creation, graphic design, and media training." },
    { title: "Grandcrest Print & Creative Works", desc: "High-quality printing and branded merchandise production." },
    { title: "Grandcrest Youth Development & Talent", desc: "Mentorship, leadership, and structured sports programs." },
    { title: "Grandcrest Ventures", desc: "Startup incubation and strategic business advisory." }
  ];

  return (
    <Layout title="Home">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 tracking-tight mb-6">
            Innovating Ideas. <br className="hidden md:block"/> Empowering Futures.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto mb-10">
            Grandcrest Horizon is a diversified ecosystem focused on developing ventures, products, and services that promote creativity, technical skills, and sustainable opportunities for young people and society.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/divisions">
              <span className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg cursor-pointer shadow-sm transition">
                Explore Our Divisions
              </span>
            </Link>
            <Link href="/contact">
              <span className="px-8 py-3 border border-blue-700 text-base font-medium rounded-md text-blue-700 bg-transparent hover:bg-blue-50 md:py-4 md:text-lg cursor-pointer transition">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview of Divisions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">An Integrated Ecosystem</h2>
            <div className="mt-2 h-1 w-20 bg-blue-700 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We operate through multiple specialized divisions to deliver holistic education, creative services, and enterprise development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((div, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-md flex items-center justify-center mb-4 font-bold text-xl">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{div.title}</h3>
                <p className="text-gray-600">{div.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}