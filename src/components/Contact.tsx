import React from 'react';
import { Phone, Mail, Instagram ,Facebook} from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 px-4 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8 text-purple-800">Contáctanos</h2>
    <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
      <a href="tel:+123456789" className="flex items-center justify-center gap-2 text-purple-600 hover:text-purple-800">
        <Phone className="w-6 h-6" />
        <span>3320221011</span>
      </a>
      <a href="https://www.facebook.com/reel/1106479217698098" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-purple-600 hover:text-purple-800">
        <Facebook className="w-6 h-6" />
        <span>Nancy Ortiz Ortiz</span>
      </a>
      <a href="https://www.instagram.com/nancyortiz569?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="flex items-center justify-center gap-2 text-purple-600 hover:text-purple-800">
        <Instagram className="w-6 h-6" />
        <span>@NancyOrtiz569</span>
      </a>
    </div>
  </div>
</section>

  );
}