
import emailjs from '@emailjs/browser';

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// Initialize EmailJS with the public key
if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
}

export const sendEmail = async (params: Record<string, unknown>) => {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    console.error('EmailJS credentials are not set in vite.config.ts');
    throw new Error('EmailJS credentials are not set.');
  }
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
};
