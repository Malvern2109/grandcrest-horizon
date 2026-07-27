import Layout from '../components/Layout';

export default function About() {
  const coreValues = [
    { title: "Innovation", text: "We embrace creativity and continuously develop new ideas, solutions, and ventures that solve real-world problems." },
    { title: "Excellence", text: "We are committed to delivering high-quality services, products, and experiences in everything we do." },
    { title: "Empowerment", text: "We equip young people with knowledge, skills, and opportunities to take initiative and build meaningful futures." },
    { title: "Integrity", text: "We operate with honesty, accountability, and transparency in all our actions and relationships." },
    { title: "Collaboration", text: "We believe in partnerships, teamwork, and building strong networks to achieve greater impact." },
    { title: "Sustainability", text: "We create solutions and opportunities that are impactful, scalable, and beneficial for long-term development in society." }
  ];

  return (
    <Layout title="About Us">
      {/* Page Header */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">About Grandcrest Horizon</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our roots, our mission to drive sustainable development, and the core values that guide our multi-division enterprise.
          </p>
        </div>
      </section>

      {/* Profile & Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Company Profile */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-700 pl-4">Company Profile</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Grandcrest Horizon (Pvt) Ltd is a registered Private Limited Company headquartered in Harare, Zimbabwe. We operate as an innovative and diversified parent company that develops and manages ventures across multiple sectors, with a strong focus on empowering young people.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By integrating education, media, creative services, and venture incubation, we create a unified ecosystem that allows youth to develop real skills, create solutions, and build sustainable enterprises.
              </p>
            </div>

            {/* Vision, Mission, Purpose */}
            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Our Vision</h3>
                <p className="text-gray-700">To become a leading innovative and diversified company that builds and manages impactful ventures, shaping a future where young people are empowered to create, innovate, and drive sustainable development in society.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Our Mission</h3>
                <p className="text-gray-700">To design, develop, and deliver innovative products, services, and ventures across education, media, technology, and creative industries, while equipping young people alike with practical skills, opportunities, and platforms for growth through mentorship, entrepreneurship, and community-driven initiatives.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Our Purpose</h3>
                <p className="text-gray-700">To operate as an innovative and diversified company that develops and delivers ventures, products, and services which promote creativity, innovation, and sustainable opportunities for young people and society.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <div className="mt-2 h-1 w-20 bg-blue-700 mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-blue-700 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Founders & Leadership</h2>
            <div className="mt-2 h-1 w-20 bg-blue-700 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600">Equal ownership driving unified strategic direction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Chikomborero Basil Chiboyi */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-1">Chikomborero Basil Chiboyi</h3>
              <p className="text-blue-700 font-medium mb-4">Co-Founder and Director</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Also known as Sir Chiko, Chikomborero is a youth development advocate, STEM educator, and author with a Bachelor of Science Honours Degree in Chemical Engineering. He has extensive experience teaching Mathematics, Physics, and Chemistry, and leading community STEM programs
              </p>
              <p className="text-gray-700 leading-relaxed">
                As the author of <em>&quot;Plan Before You Start&quot;</em>, he organizes workshops that encourage resilience and personal growth. He oversees the strategic direction, education programs, and innovation initiatives at Grandcrest Horizon.
              </p>
            </div>

            {/* Melody Pande */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-1">Melody Pande</h3>
              <p className="text-blue-700 font-medium mb-4">Co-Founder and Director</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A Zimbabwean communication professional and media personality based in Beijing, China, Melody serves as Head of Marketing and Public Relations for Concord Young Women in Business-China.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As a recipient of the Pride of Africa Media Personality of the Year award, her strong expertise in media strategy positions her to lead the media, branding, creative services, and partnership development for the company, as well as the promotion of Judose across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}