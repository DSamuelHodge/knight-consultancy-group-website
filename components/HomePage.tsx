import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Page, Service } from '../types';
import { VALUE_PILLARS, SERVICES, TESTIMONIALS } from '../constants';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface HomePageProps {
  onNavigateToService: (service: Service) => void;
  onNavigate: (page: Page) => void;
}

interface HeroImage {
  url: string;
  user: {
    name: string;
    link: string;
  };
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToService, onNavigate }) => {
  const [heroImage, setHeroImage] = useState<HeroImage | null>(null);

  useEffect(() => {
    const fetchMedicalImage = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/random?query=medical,healthcare,doctor,technology,lab&orientation=landscape",
          {
            headers: {
              Authorization: `Client-ID mNXGKB4CYxgFMZJB4bY47dEABj4ztX7SWFwcnme40JI`,
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Unsplash API responded with status: ${response.status}`);
        }
        const data = await response.json();
        if (data.urls && data.user) {
          setHeroImage({
            url: data.urls.regular,
            user: {
              name: data.user.name,
              link: data.user.links.html,
            },
          });
        }
      } catch (error) {
        console.error('Error fetching image from Unsplash:', error);
      }
    };
    fetchMedicalImage();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy text-white h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          {heroImage && <img src={heroImage.url} alt="High-impact clinical technology" className="w-full h-full object-cover opacity-20"/>}
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl text-center mx-auto sm:text-left sm:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight">
              Transforming Practices, Empowering Patients.
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
              Operational excellence and advanced medical solutions for modern healthcare practices.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 justify-center sm:justify-start">
              <Button onClick={() => onNavigate('contact')} variant="primary" className="w-full sm:w-auto">
                Schedule Consultation
              </Button>
              <Button onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })} variant="secondary" className="w-full sm:w-auto">
                View Capabilities
              </Button>
            </div>
          </div>
        </div>
        {heroImage && (
            <div className="absolute bottom-4 right-6 text-xs text-white/70 z-10">
                Photo by <a href={`${heroImage.user.link}?utm_source=knight_consultancy_group&utm_medium=referral`} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{heroImage.user.name}</a> on <a href="https://unsplash.com/?utm_source=knight_consultancy_group&utm_medium=referral" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Unsplash</a>
            </div>
        )}
      </section>

      {/* Value Proposition Section */}
      <section id="capabilities" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold font-display text-navy">Your Clinical and Technology Partner</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Delivering scalable, compliant, and high-performance medical solutions.</p>
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-1 md:grid-cols-3">
            {VALUE_PILLARS.map((pillar) => (
              <div key={pillar.title} className="text-center p-8 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-burgundy/10 mx-auto">
                  <pillar.icon className="h-8 w-8 text-burgundy" />
                </div>
                <h3 className="mt-6 text-xl font-bold font-display text-navy">{pillar.title}</h3>
                <p className="mt-4 text-base text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services Snapshot */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold font-display text-navy">Our Core Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Comprehensive solutions to elevate every aspect of your practice.</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => onNavigateToService(service)}
                className="group p-6 bg-white rounded-lg shadow-lg text-left hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-burgundy/10">
                    <service.icon className="h-6 w-6 text-burgundy" />
                  </div>
                </div>
                <div className="mt-4 flex-grow">
                  <h3 className="text-lg font-bold font-display text-navy">{service.title}</h3>
                  <p className="mt-2 text-base text-gray-600">{service.shortDescription}</p>
                </div>
                <div className="mt-6">
                  <span className="text-sm font-semibold text-burgundy group-hover:underline">
                    Learn More <ChevronRightIcon className="inline h-4 w-4" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold font-display text-navy">What Our Partners Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Real results from practices we've empowered.</p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
                <div className="flex-grow mb-6">
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center mt-auto">
                  <img className="h-14 w-14 rounded-full object-cover" src={testimonial.avatarUrl} alt={testimonial.name} />
                  <div className="ml-4">
                    <p className="font-bold font-display text-navy">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;