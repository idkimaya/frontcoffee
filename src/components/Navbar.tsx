'use client'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <header className={`z-40 w-full text-base text-black ${isMenuOpen ? 'absolute' : 'fixed'}`}>
      <div className={`flex items-center justify-between z-30 relative lg:px-10 sm:px-6 px-4 py-6 ${isMenuOpen ? 'bg-white' : ''}`}>

        <div className="flex items-center justify-center">
          <Image className="xl:w-[200px] w-[200px]" src="/images/logo.png" alt="Topnetworky logo" width={250} height={250} />
        </div>

        <button className="lg:hidden block" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <nav className={`lg:flex items-center xl:gap-10 gap-6 ${isMenuOpen ? 'hidden' : ''}`}>
          <Link href="/" passHref>
            <a className="text-white">Accueil</a>
          </Link>
          <Link href="/about" passHref>
            <a className="text-white">À propos</a>
          </Link>
          {/* Ajoutez d'autres liens ici */}
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden flex items-center justify-start pt-28 pb-16 gap-12 flex-col z-20 fixed top-0 left-0 bg-white min-h-screen w-full">
          <Link href="/" passHref>
            <a className="text-black">Accueil</a>
          </Link>
          <Link href="/about" passHref>
            <a className="text-black">À propos</a>
          </Link>
          {/* Ajoutez d'autres liens ici */}
        </nav>
      )}
    </header>
  );
};

export default Navbar;


