import React from 'react';
import './HeroSection.css'; // Assuming you have an external CSS file for styles

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="gif-container transition duration-500 ease-in-out bg-zinc-900 ">
        <img src="https://i.ibb.co/nkPPhCy/banner.gif" alt="Dynamic Background" />
      </div>
    </div>
  );
}
