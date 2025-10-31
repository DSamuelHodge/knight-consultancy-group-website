import React, { useState } from 'react';
import { Page } from '../types';
import Button from './Button';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, onNavigate, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => onNavigate(page)}
      className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'text-burgundy'
          : 'text-charcoal hover:text-burgundy-dark'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => onNavigate('home')} className="text-left">
              <span className="text-2xl font-bold font-display text-navy">Knight Consultancy</span>
              <span className="block text-xs font-semibold text-burgundy tracking-wider">GROUP</span>
            </button>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink page="home" currentPage={currentPage} onNavigate={onNavigate}>Home</NavLink>
            <NavLink page="about" currentPage={currentPage} onNavigate={onNavigate}>About Us</NavLink>
            <NavLink page="contact" currentPage={currentPage} onNavigate={onNavigate}>Contact</NavLink>
          </nav>
          <div className="hidden md:block">
            <Button onClick={() => onNavigate('contact')} variant="primary">
              Schedule Consultation
            </Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-burgundy">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</button>
            <button onClick={() => { onNavigate('about'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About Us</button>
            <button onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</button>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2">
                <Button onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }} variant="primary" className="w-full">
                    Schedule Consultation
                </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;