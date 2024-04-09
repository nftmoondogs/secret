import React, { useState, useEffect } from 'react';

export default function Navbar() {
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

  // Calculate darker gradient colors based on scroll position for the navbar
  const navbarGradientStart = `rgb(${Math.max(0, 50 - scrollY / 10)}, ${Math.max(0, 50 - scrollY / 10)}, ${Math.max(0, 50 - scrollY / 10)})`;
  const navbarGradientEnd = `rgb(${Math.min(255, scrollY / 10 + 25)}, ${Math.min(255, scrollY / 10 + 25)}, ${Math.min(255, scrollY / 10 + 25)})`;

  return (
    <>
      <style>
        {`
          @keyframes colorChange {
            0% { color: white; fill: white; }
            100% { color: white; fill: white; }
          }

          .flashy-text, .social-icon {
            animation: colorChange 0.5s infinite;
          }

          .logo-circle {
            border-radius: 50%;
            overflow: hidden;
            display: inline-block;
          }
        `}
      </style>
      <nav className="font-stone" style={{ background: `linear-gradient(to right, ${navbarGradientStart}, ${navbarGradientEnd})`, py: 4 }}>
        <div className="container mx-auto flex justify-between items-center px-4 xl:px-0">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              {/* Apply circle styling to the logo */}
              <div className="logo-circle">
                <img src="https://i.ibb.co/JrMyVPx/bannner-webp.gif" alt="ZERO" className="h-12 " />
              </div>
              <h2 className="text-2xl text-white font-bold">$SecretSociety</h2>
            </a>
          </div>
          <div className="flex items-center">
            {/* Icons remain unchanged */}
            <a href="https://twitter.com/bitmonsoltoken" target="_blank" rel="noopener noreferrer" className="px-3">
  <svg className="social-icon" width="30" height="30" viewBox="0 0 24 24" aria-label="Twitter" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.013-.608 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.925 0 .386.044.763.128 1.124-4.094-.206-7.725-2.166-10.152-5.144-.424.729-.666 1.577-.666 2.483 0 1.71.869 3.213 2.188 4.096-.806-.026-1.566-.247-2.228-.616-.001.021-.001.042-.001.063 0 2.386 1.697 4.374 3.946 4.827-.413.112-.848.171-1.296.171-.314 0-.621-.03-.917-.088.631 1.97 2.463 3.405 4.633 3.444-1.698 1.33-3.839 2.123-6.162 2.123-.399 0-.79-.023-1.174-.069 2.192 1.408 4.799 2.228 7.598 2.228 9.119 0 14.101-7.56 14.101-14.101 0-.215-.004-.429-.012-.643.968-.7 1.8-1.566 2.462-2.548l-.047-.02z"/>
  </svg>
</a>
<a href="https://t.me/bitmonbitcommunity" target="_blank" rel="noopener noreferrer" className="px-3">
  <svg className="social-icon" width="30" height="30" viewBox="0 0 24 24" aria-label="Telegram" xmlns="http://www.w3.org/2000/svg">
    <path d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M16.604,7.85c0.117,0.057,0.175,0.199,0.128,0.315 l-5.931,14.783c-0.152,0.379-0.518,0.585-0.897,0.5c-0.25-0.056-0.447-0.253-0.503-0.503L8.89,16.65L7.349,15.109 l-4.644-1.832c-0.379-0.15-0.585-0.518-0.5-0.897c0.057-0.25,0.253-0.447,0.503-0.503l14.783-5.931 C16.405,7.675,16.487,7.793,16.604,7.85z"/>
  </svg>
</a>


          </div>
        </div>
      </nav>
    </>
  );
}
