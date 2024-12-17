import { IconPhoneCall, IconBrandWhatsapp } from '@tabler/icons-react';


export default function ContactButtons() {
  return (
    <div className="fixed right-7 bottom-4 space-y-4 z-50">
      {/* Phone Call Button */}
      <a
        href="tel:+27683897638" // Replace with your actual phone number
        className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-105"
        aria-label="Call Us"
      >
        <IconPhoneCall size={24} stroke={1.5} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/27683897638" // Replace with your actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-105"
        aria-label="WhatsApp"
      >
        <IconBrandWhatsapp size={24} stroke={1.5} />
      </a>
    </div>
  );
}