
import emailjs from '@emailjs/browser';

const PUBLIC_KEY = 'wPNPrIMPiU6tRPKpN';
const SERVICE_ID = 'service_rty3svx';
const TEMPLATE_ID = 'template_iiafg6h';

// Initialize EmailJS with the public key
if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
}

export const sendEmail = async (params: Record<string, unknown>) => {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    throw new Error('EmailJS credentials are not set.');
  }
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
};
