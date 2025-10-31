import React, { useState, FormEvent } from 'react';
import Button from './Button';
import { SERVICES } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    practice: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({ name: '', practice: '', email: '', phone: '', service: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <div className="bg-navy py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold font-display text-white tracking-tight">Contact Us</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">Let's start a conversation about your practice's future. Schedule a consultation or send us a message below.</p>
        </div>
      </div>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold font-display text-navy">Contact Information</h2>
              <p className="mt-4 text-gray-600">Reach out to us directly or schedule a meeting at your convenience.</p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href="mailto:contact@knightconsultancy.group" className="ml-3 text-gray-700 hover:text-burgundy-dark">contact@knightconsultancy.group</a>
                </div>
                <div className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href="tel:+1-555-123-4567" className="ml-3 text-gray-700 hover:text-burgundy-dark">+1 (614) 302-9816</a>
                </div>
                <div className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <p className="ml-3 text-gray-700">Service Region: Nationwide Coverage</p>
                </div>
              </div>
              <div className="mt-10 p-6 bg-burgundy/10 rounded-lg">
                  <h3 className="font-bold text-navy">Schedule a Consultation</h3>
                  <p className="mt-2 text-sm text-gray-600">Use our online scheduler to find a time that works for you.</p>
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    <Button variant='primary' className="mt-4 w-full">Open Scheduler</Button>
                  </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold font-display text-navy">Send us a Message</h2>
              {formStatus === 'success' ? (
                <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-md">
                  <p className="font-semibold">Thank you!</p>
                  <p>Your message has been sent successfully. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-burgundy focus:border-burgundy" />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="practice" className="block text-sm font-medium text-gray-700">Practice / Organization</label>
                    <input type="text" name="practice" id="practice" required value={formData.practice} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-burgundy focus:border-burgundy" />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-burgundy focus:border-burgundy" />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-burgundy focus:border-burgundy" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Interest</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-burgundy focus:border-burgundy">
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-burgundy focus:border-burgundy"></textarea>
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" variant="primary" className="w-full" disabled={formStatus === 'submitting'}>
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;