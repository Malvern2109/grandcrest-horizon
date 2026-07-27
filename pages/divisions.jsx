import Layout from '../components/Layout';
import Link from 'next/link';

export default function Divisions() {
  const divisions = [
    {
      name: "Grandcrest STEM Hub",
      focus: "Practical STEM education for primary, secondary, and tertiary students.",
      details: ["Tutoring and enrichment programs", "Development of science kits", "Innovations Lab for hands-on projects"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "Grandcrest Media & Branding",
      focus: "Professional media, branding, and marketing solutions.",
      details: ["Graphic design and corporate branding", "Video production and photography", "Media training and communication skills"],
      color: "bg-gray-50 border-gray-200"
    },
    {
      name: "Grandcrest Print & Creative Works",
      focus: "High-quality printing and merchandise production.",
      details: ["Flyers, banners, and booklets", "Branded educational materials", "Merchandise for schools and events"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "Grandcrest Youth Development & Talent",
      focus: "Holistic empowerment through mentorship and leadership training.",
      details: ["Entrepreneurship and life-skills workshops", "Judose sports development programs", "Book publications and authoring"],
      color: "bg-gray-50 border-gray-200"
    },
    {
      name: "Grandcrest Ventures",
      focus: "Incubation and management of new youth-led business ideas.",
      details: ["Startup support and advisory", "Venture incubation", "Strategic partnerships for sustainable growth"],
      color: "bg-blue-50 border-blue-200"
    }
  ];

  return (
    <Layout title="Our Divisions">
      {/* Page Header */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Our Divisions</h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            An integrated ecosystem combining education, creative services, and enterprise development to maximize our impact.
          </p>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {divisions.map((div, idx) => (
              <div key={idx} className={`p-8 md:p-10 rounded-xl border ${div.color} shadow-sm flex flex-col md:flex-row gap-8 items-start`}>
                
                {/* Number Indicator */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-700 text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                  0{idx + 1}
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{div.name}</h2>
                  <p className="text-gray-700 text-lg font-medium mb-4">{div.focus}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {div.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to work with us?</h3>
            <Link href="/services">
              <span className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 transition cursor-pointer shadow-sm">
                View Our Services
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}