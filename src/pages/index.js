// src/pages/index.js
import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FooterSection from '../components/FooterSection';
import AboutSection from '../components/AboutSection';
import TokenomicsSection from '../components/TokenomicsSection'; // Ensure this component exists

const Home = () => {
  useEffect(() => {
    // Initialize Jupiter Terminal when the window is available
    if (typeof window !== 'undefined' && window.Jupiter) {
      window.Jupiter.init({
        displayMode: "integrated",
        integratedTargetId: "jupiter-terminal", // Ensure the target ID matches your container ID
        endpoint: "https://your-solana-endpoint.com/", // Replace with your actual Solana RPC endpoint
        strictTokenList: false,
        formProps: {
          fixedOutputMint: true,
          initialOutputMint: "WARcU61sECeEK5DEbkY3wcjGxSGr4W8bVUpKbBNbgbu",
        },
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>SecretSociety</title>
        <style>{`
          body {
            cursor: url('https://i.ibb.co/FbkFrcd/vj-QDv-Rcq-Abjs-YJpkh-Quuj-Kro0t-Efgc471-Mk-Wc-Bxv-Fv3j-H4-Mag-GCA7-Ftcc-R3-KU1-6-Cr-B-zl-Z5-EANV3-B.gif'), auto; /* Replace with your cursor image URL */
          }
        `}</style>
      </Head>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TokenomicsSection /> {/* Ensure you've created TokenomicsSection */}
      <FooterSection />
      <div id="jupiter-terminal" className="container mx-auto mt-8">
        {/* Jupiter Terminal will be injected here */}
      </div>
    </>
  );
};

export default Home;
