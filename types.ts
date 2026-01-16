import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export enum ServiceType {
  REPAIR = 'Repair',
  MAINTENANCE = 'Maintenance (AMC)',
  CUSTOM_BUILD = 'Custom Build',
  SPARE_PARTS = 'Spare Parts',
  CONSULTATION = 'Consultation'
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  serviceType: ServiceType;
  droneModel: string;
  problemDescription: string;
}
