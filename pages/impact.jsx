import Layout from '../components/Layout';
import Link from 'next/link';

export default function Impact() {
  const pillars = [
    { title: "Practical STEM Education", desc: "Equipping students with hands-on scientific and technical skills that move far beyond theoretical textbook study." },
    { title: "Innovation & Problem Solving", desc: "Encouraging critical thinking and creativity to build functional prototypes for real-world African challenges." },
    { title: "Youth Entrepreneurship", desc: "Transforming job-seekers into job-creators by guiding young founders to start and scale their own enterprises." },
    { title: "Personal Development", desc: "Instilling the confidence, discipline, life planning, and leadership traits required to take full ownership of the future." }
  ];

  const communityPrograms = [
    { name: "STEM Outreach", desc: "Taking mobile science workshops, coding demonstrations, and lab experiments directly into underserved community schools." },
    { name: "Mentorship Clinics", desc: "Providing structured 1-on-one and group career guidance, connecting youth with established industry professionals." },
    { name: "Judose Development", desc: "Promoting physical wellness, teamwork, and mental discipline across Africa through our structured Judose sports programs." }
  ];

  return (
    <Layout title="Social Impact">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm">Our Driving Purpose</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mt-2 mb-4">Empowering Young People</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Grandcrest Horizon is not just a commercial business; it is a platform for transformation. We measure our true success by the lives we equip, the opportunities we unlock, and the communities we uplift.
          </p>
        </div>
      </section>

      {/* The 4 Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">The Four Pillars of Empowerment</h2>
            <div className="mt-2 h-1 w-20 bg-blue-700 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Our holistic methodology ensures young people are fully prepared to lead and contribute to the regional economy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-8 bg-blue-50/50 rounded-xl border border-blue-100 hover:bg-blue-50 transition">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-8 bg-blue-700 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-blue-900">{pillar.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed pl-6">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Community & Grassroots Initiatives</h2>
              <p className="mt-2 text-gray-600">Extending our impact far beyond paying clients to those who need it most.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityPrograms.map((prog, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{prog.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Sustainability Model */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Built for Lasting Sustainability</h2>
          <p className="text-gray-700 text-lg mb-10 leading-relaxed">
            We practice a <strong>Dual Sustainability Model</strong>: ensuring robust financial health through diversified commercial operations, while simultaneously reinvesting our success back into youth job creation, environmental responsibility, and accessible grassroots education.
          </p>
          <Link href="/contact">
            <span className="inline-block px-8 py-4 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition cursor-pointer shadow-sm">
              Partner With Our Impact Mission
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}