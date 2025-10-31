import { Service, ValuePillar, Testimonial } from './types';
import StethoscopeIcon from './components/icons/StethoscopeIcon';
import ClipboardIcon from './components/icons/ClipboardIcon';
import ShieldIcon from './components/icons/ShieldIcon';
import PillIcon from './components/icons/PillIcon';

export const VALUE_PILLARS: ValuePillar[] = [
  {
    icon: StethoscopeIcon,
    title: 'Advanced Medical Equipment Deployment',
    description: 'We source, deploy, and manage cutting-edge medical technologies to enhance your diagnostic and therapeutic capabilities.',
  },
  {
    icon: ClipboardIcon,
    title: 'Clinical Workflow & Infrastructure Design',
    description: 'Our experts optimize your practice\'s operational flow, from patient intake to billing, ensuring efficiency and scalability.',
  },
  {
    icon: ShieldIcon,
    title: 'Regulatory & Compliance Expertise',
    description: 'Navigate the complex healthcare landscape with confidence. We provide guidance on CLIA, HIPAA, and billing compliance.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'bracing',
    title: 'Cervical & Lumbar Bracing Programs',
    shortDescription: 'Comprehensive orthopedic support solutions.',
    icon: PillIcon,
    overview: 'We establish turn-key bracing programs for orthopedic and pain management practices, integrating vendor partnerships, staff training, and patient protocols to ensure optimal outcomes and compliant billing.',
    workflow: [
      'Needs Assessment & Program Design',
      'Vendor Selection & Integration',
      'Staff Training on Fitting & Patient Education',
      'Inventory Management Setup',
      'Billing & Reimbursement Protocol Development',
    ],
    integrations: ['Major Orthoses Vendors', 'EHR Templates', 'Practice Management Systems'],
    compliance: 'Our programs are designed around strict adherence to Medicare and commercial payer guidelines for Durable Medical Equipment (DME).',
  },
  {
    id: 'bgs',
    title: 'Bone Growth Stimulator Solutions',
    shortDescription: 'Accelerate patient recovery post-surgery.',
    icon: PillIcon,
    overview: 'Implement advanced bone growth stimulation systems to enhance fusion rates and improve patient recovery timelines. We manage equipment setup, define clinical protocols, and support outcomes tracking.',
    workflow: [
      'Technology Evaluation & Procurement',
      'Clinical Protocol Customization',
      'Physician & Staff Training',
      'Patient Adherence Monitoring',
      'Outcomes Data Analysis & Reporting',
    ],
    integrations: ['Post-Surgical Care Plans', 'Patient Monitoring Platforms'],
    compliance: 'We ensure all documentation and clinical justifications meet stringent payer requirements for medical necessity.',
  },
  {
    id: 'surgical',
    title: 'Surgical & Diagnostic Technology',
    shortDescription: 'Equip your facility with the latest technology.',
    icon: StethoscopeIcon,
    overview: 'From needs assessment to implementation, we guide surgical and diagnostic centers in acquiring and integrating the right technology. Our focus is on enhancing precision, safety, and operational efficiency.',
    workflow: [
      'Device Assessment & Feature Comparison',
      'Procurement & Negotiation Support',
      'Sterile Workflow Optimization',
      'Integration with Existing Systems (PACS, EHR)',
      'Technician & Clinician Training',
    ],
    integrations: ['Imaging Systems (C-Arms, Ultrasounds)', 'Surgical Navigation', 'Diagnostic Scopes'],
    compliance: 'We assist with technology credentialing and ensure all equipment meets federal and state regulatory standards.',
  },
  {
    id: 'lab',
    title: 'Laboratory Infrastructure Setup',
    shortDescription: 'In-house diagnostic testing programs.',
    icon: ClipboardIcon,
    overview: 'For primary care, addiction, and pain management clinics, we design and implement in-house laboratory programs. This includes CLIA compliance, workflow design, LIMS integration, and staff training.',
    workflow: [
      'CLIA Certification Guidance',
      'Specimen Handling & Processing Workflow Design',
      'Laboratory Information Management System (LIMS) Selection',
      'Toxicology & Bloodwork Service Setup',
      'Quality Control & Physician Training Protocols',
    ],
    integrations: ['LIMS & EHR Systems', 'Automated Analyzers', 'Reference Labs'],
    compliance: 'Our comprehensive approach ensures your lab meets all CLIA, state, and federal guidelines for moderate complexity labs.',
  },
  {
    id: 'compliance',
    title: 'Compliance, Billing, & Credentialing',
    shortDescription: 'Navigate healthcare regulations with ease.',
    icon: ShieldIcon,
    overview: 'Our team provides expert guidance on the labyrinth of healthcare regulations. We help with physician credentialing, develop compliant billing practices, and prepare your practice for audits.',
    workflow: [
      'Practice Policy & Procedure Review',
      'Billing Code Audit & Optimization',
      'Physician Credentialing with Payers',
      'HIPAA & OSHA Compliance Training',
      'Audit Preparedness & Response Planning',
    ],
    integrations: ['Billing Software', 'Clearinghouses', 'Payer Portals'],
    compliance: 'We stay ahead of regulatory changes to ensure your practice remains compliant and financially sound.',
  },
  {
    id: 'automation',
    title: 'Practice Workflow Automation',
    shortDescription: 'Boost efficiency with technology.',
    icon: ClipboardIcon,
    overview: 'We analyze your current operational workflows and identify opportunities for automation. By leveraging technology, we help reduce administrative burden, minimize errors, and free up staff to focus on patient care.',
    workflow: [
      'Current-State Workflow Analysis',
      'Automation Opportunity Identification',
      'Software & Tool Recommendation',
      'Implementation & Staff Training',
      'Performance Monitoring & Optimization',
    ],
    integrations: ['Patient Communication Platforms', 'Automated Appointment Reminders', 'Digital Intake Forms', 'Robotic Process Automation (RPA)'],
    compliance: 'All automation solutions are implemented with HIPAA security and patient data privacy as a top priority.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Knight Consulting Group revolutionized our workflow. Their expertise in lab infrastructure allowed us to bring testing in-house, drastically improving turnaround times and patient satisfaction.",
    name: "Dr. Alisha Chen",
    title: "Medical Director, Summit Pain Management",
    avatarUrl: "https://i.pravatar.cc/100?u=alisha",
  },
  {
    quote: "The compliance and billing guidance we received was invaluable. They navigated the complexities with ease, ensuring our practice was not only compliant but also financially optimized. A true partner.",
    name: "Martha Jennings",
    title: "Practice Manager, Oakside Primary Care",
    avatarUrl: "https://i.pravatar.cc/100?u=mark",
  },
  {
    quote: "From surgical technology assessment to deployment, their team was professional, knowledgeable, and incredibly efficient. Our new diagnostic equipment has elevated our standard of care.",
    name: "Dr. Bernadette Carter",
    title: "Chief of Surgery, Ridgeway Surgical Center",
    avatarUrl: "https://i.pravatar.cc/100?u=ben",
  },
];
