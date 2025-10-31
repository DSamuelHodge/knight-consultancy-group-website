import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
             <button onClick={() => onNavigate('home')} className="text-left">
              <span className="text-3xl font-bold font-display text-white">Knight Consulting</span>
              <span className="block text-sm font-semibold text-burgundy-light tracking-wider">GROUP</span>
            </button>
            <p className="mt-4 text-gray-300 max-w-md">Transforming Practices, Empowering Patients. Expert guidance for the modern healthcare provider.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-display tracking-wider uppercase text-gray-200">Navigate</h3>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => onNavigate('home')} className="hover:text-burgundy-light transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-burgundy-light transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-burgundy-light transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-display tracking-wider uppercase text-gray-200">Contact</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li><a href="mailto:contact@knightconsultancy.group" className="hover:text-burgundy-light transition-colors">contact@knightconsultancy.group</a></li>
              <li><a href="tel:+1-555-123-4567" className="hover:text-burgundy-light transition-colors">+1 (614) 302-9816</a></li>
              <li className="pt-2">Service region: Nationwide</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Knight Consultancy Group. A division of NKEnterprises, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;