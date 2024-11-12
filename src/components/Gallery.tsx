import React from 'react';

const images = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg",
];

export function Gallery() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
      <h2 className="text-4xl font-bold text-center mb-16 text-purple-800">Nuestros Trabajos</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl">
            <img 
              src={img} 
              alt={`Gallery ${index + 1}`} 
              className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
