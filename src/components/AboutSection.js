import React, { useState, useEffect } from 'react';

export default function AboutSection() {
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

        @keyframes titleGlow {
          0%, 100% {
            text-shadow: 0 0 8px #FFFFFF, 0 0 16px #FFFFFF, 0 0 24px #FFFFFF;
          }
          50% {
            text-shadow: 0 0 4px #FFFFFF, 0 0 12px #FFFFFF, 0 0 20px #FFFFFF;
          }
        }
      `}</style>
      <div 
        className=" flex justify-center items-center p-5"
        style={{ 
          background: `linear-gradient(to bottom right, ${gradientStart}, ${gradientEnd})` 
        }}
      >
        {/* Adjusted max-w-xl to max-w-6xl for a larger card and adjusted padding for more content space */}
        <div className="max-w-6xl w-full bg-zinc-900 rounded-lg shadow-xl overflow-hidden lg:flex">
          <div className="lg:w-1/2 xl:w-3/5">
            <img 
              className="object-cover w-full h-full" 
              src="https://i.ibb.co/dJ0xJzF/hybrid.gif" 
              alt="Intriguing Digital Art"
            />
          </div>
          
          <div className="py-12 px-8 lg:px-12 xl:px-16 lg:w-1/2 xl:w-2/5 font-stone">
            <h2 className="text-4xl  font-bold mb-4" style={{ animation: 'titleGlow 2s infinite' }}>
            The Truth sets you free
            </h2>
            <p className="text-white mb-6">
            In a world shrouded in darkness and deception, the truth is the only light that can guide us to freedom.  That's what SecretSociety - $SS is all about – unveiling the truth and breaking free from the lies that keep us enslaved. 
            </p>
            <div className="flashy-text text-white text-lg mb-5" style={{ animation: 'textGlow 1s infinite' }}>
              "The puppet masters"
            </div>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
              he puppet masters have long kept the masses in the dark, feeding them a steady diet of misinformation and propaganda. But SecretSociety - $SS knows that the truth is out there, waiting to be discovered by those brave enough to seek it. 
              </li>
              {/* Consider adding more list items or content here to fill the larger space effectively */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
