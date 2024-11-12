import React from 'react';
import { Cake, Heart, Wine, PartyPopper, Baby, Building, Cross, Church } from 'lucide-react';

const services = [
  { icon: <Cake className="w-12 h-12 text-pink-500" />, title: "Cumpleaños", desc: "Decoraciones temáticas para todas las edades" },
  { icon: <Heart className="w-12 h-12 text-red-500" />, title: "Bodas", desc: "Arcos y centros de mesa elegantes" },
  { icon: <PartyPopper className="w-12 h-12 text-purple-500" />, title: "XV Años", desc: "Diseños únicos para tu día especial" },
  { icon: <Wine className="w-12 h-12 text-yellow-500" />, title: "Despedidas", desc: "Decoración divertida y festiva" },
  { icon: <Baby className="w-12 h-12 text-blue-500" />, title: "Baby Shower", desc: "Arreglos tiernos y delicados" },
  { icon: <Building className="w-12 h-12 text-green-500" />, title: "Eventos Corporativos", desc: "Decoración profesional y elegante" },
  { icon: <Cross className="w-12 h-12 text-sky-500" />, title: "Bautizos", desc: "Decoraciones celestiales para momentos sagrados" },
  { icon: <Church className="w-12 h-12 text-amber-500" />, title: "Primera Comunión", desc: "Arreglos especiales para celebrar la fe" }
];

export function Services() {
  return (
    <section className="py-20 px-4 bg-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-purple-800">Nuestros Servicios</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-xl transition duration-300">
            <div className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}