
import emailjs from '@emailjs/browser';

const PUBLIC_KEY = 'xJkK_S2PqXp4-8g_c';
const SERVICE_ID = 'service_3a30krc';
const TEMPLATE_ID = 'template_h5bchdl';

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
