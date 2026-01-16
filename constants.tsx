import { Wrench, Cpu, ShieldCheck, Cog, Activity, Plane } from 'lucide-react';
import { ServiceItem, ServiceType, Testimonial } from './types';

export const DISPLAY_NAME = "QuickWings";
export const COMPANY_LEGAL_NAME = "Quickwings Advance System";
export const COMPANY_TAGLINE = "Advanced Aerial Solutions";

export const SERVICES: ServiceItem[] = [
  {
    id: 'repair',
    title: 'Precision Drone Repair',
    description: 'Expert diagnosis and repair for DJI, Autel, and custom FPV builds using certified components.',
    icon: Wrench
  },
  {
    id: 'parts',
    title: 'Genuine Spare Parts',
    description: 'Immediate availability of batteries, propellers, motors, and camera gimbals.',
    icon: Cog
  },
  {
    id: 'amc',
    title: 'Maintenance & AMC',
    description: 'Scheduled servicing plans for enterprise fleets to ensure zero downtime.',
    icon: Activity
  },
  {
    id: 'custom',
    title: 'Custom Drone Solutions',
    description: 'Tailored heavy-lift and surveillance drone fabrication for specific industrial needs.',
    icon: Cpu
  },
];

export const INDUSTRIES = [
  { name: 'Agriculture', icon: '🌾' },
  { name: 'Construction', icon: '🏗️' },
  { name: 'Cinematography', icon: '🎥' },
  { name: 'Surveillance', icon: '🛡️' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Alex Chen',
    role: 'Lead Cinematographer',
    company: 'SkyView Media',
    text: 'QuickWings saved our shoot. They repaired our Inspire 2 gimbal in under 24 hours. The precision is unmatched.',
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: 't2',
    name: 'Sarah Johnson',
    role: 'Operations Manager',
    company: 'AgriTech Solutions',
    text: 'Their AMC plan for our fleet of spraying drones keeps our operations running smoothly without hiccups.',
    avatar: 'https://picsum.photos/100/100?random=2'
  }
];

export const SERVICE_TYPES = [
  ServiceType.REPAIR,
  ServiceType.MAINTENANCE,
  ServiceType.CUSTOM_BUILD,
  ServiceType.SPARE_PARTS,
  ServiceType.CONSULTATION
];