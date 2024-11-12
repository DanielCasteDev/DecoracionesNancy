import React from 'react';

export function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80"
          alt="Balloons background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-pink-500/70"></div>
      </div>
      
      <div className="relative text-center text-white px-4">
  <div className="flex flex-col items-center justify-center mb-6">
    <div className="relative w-48 h-48 mb-4">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-pink-500 to-blue-500 rounded-full opacity-50"></div>
      <div className="absolute inset-1 bg-white bg-opacity-80 rounded-full flex items-center justify-center animate-bounce">
        <img 
          src="/logo.png" 
          alt="Nancy Decoraciones Logo" 
          className="w-40 h-40 object-contain"
        />
      </div>
    </div>
    <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-blue-300 text-transparent bg-clip-text animate-gradient">
      Nancy Decoraciones
    </h1>
  </div>

  <p className="text-2xl mb-8 text-blue-50">Creando momentos mágicos para tus celebraciones especiales</p>
  
  <a 
   href="https://wa.me/523320221011?text=Hola%20bonito%20día,%20gracias%20por%20comunicarte%20con%20nosotros.%20¿Qué%20tema%20tendrá%20tu%20evento,%20en%20dónde%20y%20para%20cuándo%20lo%20necesitas?%20En%20un%20momento%20nos%20comunicamos%20contigo." target="_blank" rel="noopener noreferrer"

    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-blue-600 transition duration-300 transform hover:scale-105"
  >
    ¡Cotiza Ahora!
  </>
</div>

    </header>
  );
}