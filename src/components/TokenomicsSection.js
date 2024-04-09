import React, { useState, useEffect } from 'react';

const TokenomicsSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const gradientStart = `rgb(${Math.max(0, 75 - scrollY / 4)}, ${Math.max(0, 75 - scrollY / 4)}, ${Math.max(0, 75 - scrollY / 4)})`;
  const gradientEnd = 'rgb(0, 0, 0)'; // Always black

  return (
    <>
      <style jsx global>{`
        @keyframes textGlow {
          0%, 100% { 
            text-shadow: 0 0 8px #FFFFFF, 0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 40px #FFFFFF;
          }
          50% { 
            text-shadow: 0 0 4px #FFFFFF, 0 0 5px #FFFFFF, 0 0 10px #FFFFFF, 0 0 20px #FFFFFF;
          }
        }
      `}</style>
      <div 
        id="tokenomics" 
        className="flex justify-center items-center p-5 font-stone relative"
        style={{ 
          background: `linear-gradient(to bottom right, ${gradientEnd}, ${gradientStart})`,
          color: 'white'
        }}
      >
        <div className="max-w-6xl w-full rounded-lg shadow-xl overflow-hidden lg:flex">

          
          <div className="py-12 px-8 lg:px-12 xl:px-16 lg:w-1/2 xl:w-2/5">
            <h2 className="text-4xl font-bold mb-6" style={{ animation: 'textGlow 2s infinite', color: '#' }}>
            break free from the matrix and witness the real world
            </h2>
            <p className="mb-4">
              $SecretSociety will have a PreSale on Pump.Fun...
            </p>
            <h3 className="text-2xl font-bold mb-4 text-black "style={{ animation: 'textGlow 2s infinite', color: '#' }}>Bonding Curve Progress 96%</h3>
            <img 
              src="https://i.ibb.co/chvJ8kB/white.gif" 
              alt="Wen Logo" 
              className="mx-auto rounded-lg transition-transform duration-500 hover:-translate-y-1 hover:scale-110"
            />
          </div>
          <div className="lg:w-1/2 xl:w-3/5">
            <img 
              src="https://i.ibb.co/PC2q83h/black.gif" 
              alt="DIELA PreSale" 
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default TokenomicsSection;
