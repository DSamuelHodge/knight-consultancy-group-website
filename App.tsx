
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ServicePage from './components/ServicePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import { Page, Service } from './types';
import { SERVICES } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const navigateToService = (service: Service) => {
    setSelectedService(service);
    setCurrentPage('service');
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    if (page !== 'service') {
      setSelectedService(null);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedService]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigateToService={navigateToService} onNavigate={navigateTo} />;
      case 'services':
        // This case can be used for a dedicated services list page if needed.
        // For now, it redirects to home where services are listed.
        return <HomePage onNavigateToService={navigateToService} onNavigate={navigateTo} />;
      case 'service':
        if (selectedService) {
          return <ServicePage service={selectedService} onNavigate={navigateTo} />;
        }
        // Fallback to home if no service is selected
        navigateTo('home');
        return null;
      case 'about':
        return <AboutPage onNavigate={navigateTo}/>;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigateToService={navigateToService} onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="bg-white text-charcoal font-body antialiased">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
