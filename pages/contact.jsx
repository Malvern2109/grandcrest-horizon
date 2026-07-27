import { useState } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    division: 'General Inquiry',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Format the message for WhatsApp (using asterisks for bold text)
    const textMessage = `*New Website Inquiry* 🌐

*Name:* ${formState.name}
*Email:* ${formState.email}
*Phone:* ${formState.phone || 'Not provided'}
*Division:* ${formState.division}

*Message:*
${formState.message}`;

    // 2. Encode the text so it can safely travel through a URL
    const encodedMessage = encodeURIComponent(textMessage);

    // 3. The official Grandcrest Horizon WhatsApp number (country code 263, no plus sign or spaces)
    const whatsappNumber = "263787370842";
    
    // 4. Construct the official WhatsApp API link
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // 5. Open WhatsApp in a new tab so they don't lose the website
    window.open(whatsappUrl, '_blank');
    
    // 6. Show the success state on the website
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout title="Contact Us">
      {/* Page Header */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">Get in Touch</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question about our STEM Hub, need a quote from Print & Creative Works, or want to discuss startup incubation? Reach out to our team directly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact info cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-blue-900 text-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Headquarters</h2>
                <ul className="space-y-4 text-blue-100">
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-blue-400 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div>
                      <strong className="block text-white font-semibold">Physical Address</strong>
                      <span>8A Anzac Dr, Mabelreign<br/>Harare, Zimbabwe</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-blue-400 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <div>
                      <strong className="block text-white font-semibold">Phone & WhatsApp</strong>
                      <span>+263 787 370 842<br/>+263 713 038 105</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-blue-400 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <div>
                      <strong className="block text-white font-semibold">Electronic Mail</strong>
                      <span>admin@grandcresthorizon.co.zw</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-600">
                <strong className="block text-gray-900 mb-1 font-bold">Operating Hours</strong>
                Monday &ndash; Friday: 8:00 AM &ndash; 5:00 PM CAT<br />
                Saturday: 9:00 AM &ndash; 1:00 PM CAT (STEM Hub Labs)
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-xl border border-gray-200 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Redirecting to WhatsApp...</h3>
                  <p className="text-gray-600 mb-6">Your message has been formatted. If WhatsApp did not open automatically, click the button below to send your message.</p>
                  
                  <div className="space-x-4">
                    <button onClick={() => window.open(`https://wa.me/263787370842?text=${encodeURIComponent('Hi, I tried to send an inquiry from the website.')}`, '_blank')} className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition">
                      Open WhatsApp
                    </button>
                    <button onClick={() => { setIsSubmitted(false); setFormState({name: '', email: '', phone: '', division: 'General Inquiry', message: ''}) }} className="text-blue-700 font-medium underline hover:text-blue-900">
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 border-b pb-3">Send a WhatsApp Inquiry</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                      <input type="text" id="name" name="name" required value={formState.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="e.g. Tinashe Moyo" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                      <input type="email" id="email" name="email" required value={formState.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="name@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formState.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="+263 77 000 0000" />
                    </div>
                    <div>
                      <label htmlFor="division" className="block text-sm font-semibold text-gray-700 mb-1">Target Division</label>
                      <select id="division" name="division" value={formState.division} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Grandcrest STEM Hub">Grandcrest STEM Hub</option>
                        <option value="Grandcrest Media & Branding">Grandcrest Media & Branding</option>
                        <option value="Grandcrest Print & Creative Works">Grandcrest Print & Creative</option>
                        <option value="Grandcrest Youth Development">Grandcrest Youth Development</option>
                        <option value="Grandcrest Ventures">Grandcrest Ventures</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Your Message *</label>
                    <textarea id="message" name="message" rows={4} required value={formState.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none resize-none" placeholder="Tell us how we can assist you..."></textarea>
                  </div>

                  <button type="submit" className="w-full py-3 px-6 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow-sm transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/></svg>
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}