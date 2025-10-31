import React from 'react';
import { Page, Service } from '../types';
import Button from './Button';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface ServicePageProps {
  service: Service;
  onNavigate: (page: Page) => void;
}

const ServicePage: React.FC<ServicePageProps> = ({ service, onNavigate }) => {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <div className="bg-navy py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold font-display text-white tracking-tight">{service.title}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">{service.shortDescription}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-display text-navy">Solution Overview</h2>
              <p className="mt-4 text-lg text-gray-600">{service.overview}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Operational Workflow */}
              <div>
                <h3 className="text-xl font-bold font-display text-navy">Operational Workflow</h3>
                <ul className="mt-4 space-y-3">
                  {service.workflow.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRightIcon className="h-6 w-6 text-burgundy flex-shrink-0 mr-3 mt-1" />
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Integrations & Compliance */}
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold font-display text-navy">Supported Integrations</h3>
                  <p className="mt-3 text-gray-700">{service.integrations.join(', ')}.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-navy">Compliance & Reimbursement</h3>
                  <p className="mt-3 text-gray-700">{service.compliance}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center border-t pt-10">
              <h2 className="text-2xl font-bold font-display text-navy">Ready to Enhance Your Practice?</h2>
              <p className="mt-3 max-w-2xl mx-auto text-gray-600">
                Let's discuss how our {service.title} solution can be tailored to your specific needs.
              </p>
              <div className="mt-8">
                <Button onClick={() => onNavigate('contact')} variant="primary">
                  Request Service Package
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button onClick={() => onNavigate('home')} className="text-burgundy font-semibold hover:underline">
              &larr; Back to all services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;