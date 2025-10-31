import React from 'react';
import Button from './Button';
import { Page } from '../types';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <>
      <div className="bg-navy py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold font-display text-white tracking-tight">About Knight Consultancy Group</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">A trusted clinical and technology partner delivering scalable, compliant, high-performance medical solutions.</p>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Mission Statement */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display text-navy">Our Mission</h2>
              <blockquote className="mt-6 text-2xl text-charcoal italic border-l-4 border-burgundy pl-6">
                "To empower healthcare providers with innovative solutions and expert guidance that elevate patient care and practice performance."
              </blockquote>
            </div>

            {/* Leadership Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold font-display text-navy text-center">Leadership & Expertise</h2>
              <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                Knight Consulting Group is led by a team of seasoned healthcare administrators, clinical specialists, and technology experts. Our collective experience spans decades across primary care, pain management, surgical operations, and laboratory sciences. We are committed to translating this deep industry knowledge into practical, impactful solutions for our clients.
              </p>
              {/* Optional Bios Section Placeholder */}
              <div className="mt-10 text-center p-8 bg-gray-50 rounded-lg">
                <p className="text-gray-500 italic">Leadership biographies will be featured here soon.</p>
              </div>
            </div>
            
            {/* Commitment Section */}
            <div>
              <h2 className="text-3xl font-bold font-display text-navy text-center">Our Commitment</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-display text-navy">To Outcomes</h3>
                  <p className="mt-2 text-gray-600">We measure our success by the success of your practice and the improved outcomes of your patients. Our solutions are data-driven and results-oriented.</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-display text-navy">To Compliance</h3>
                  <p className="mt-2 text-gray-600">In an ever-changing regulatory environment, we provide the expertise to ensure your practice operates with the highest standards of compliance and integrity.</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-display text-navy">To Patient Care</h3>
                  <p className="mt-2 text-gray-600">Everything we do is in service of empowering you to deliver exceptional patient care. We streamline operations so you can focus on what matters most.</p>
                </div>
              </div>
            </div>
             <div className="mt-16 text-center border-t pt-10">
              <h2 className="text-2xl font-bold font-display text-navy">Partner with Us</h2>
              <p className="mt-3 max-w-2xl mx-auto text-gray-600">
                Discover how our expertise can transform your practice.
              </p>
              <div className="mt-8">
                <Button onClick={() => onNavigate('contact')} variant="primary">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;