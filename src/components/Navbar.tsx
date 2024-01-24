'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { CartDrawer } from './CartDrawer';
import DropdownMenu from './DropdownNav';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  
  // dropdown avatar profile name and logout
  return (
    <>
      <div
        className={`w-full bg-white sticky top-0 z-50 ${
          isMenuOpen ? "absolute" : "fixed"
        }`}
      >
        <div
          className={`flex items-center justify-between z-30 relative lg:px-10 sm:px-6 px-4 py-6 ${
            isMenuOpen ? "bg-white" : "bg-white"
          }`}
        >
          <div className="flex items-center justify-center">
            <Image
              className="xl:w-[90px] w-[80px]"
              src="/images/logo.png"
              alt="coffee logo"
              width={250}
              height={250}
            />
          </div>

          <button className="lg:hidden block" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <nav
            className={`sm:hidden lg:flex items-center bg-white xl:gap-10 gap-6 ${
              isMenuOpen ? "hidden" : "hidden"
            }`}
          >
            <Link href="/" passHref className="text-header font-semibold">
              HOME
            </Link>
            <Link href="/create" passHref className="text-header font-semibold">
              CREATE YOUR OWN
            </Link>
            <Link
              href="/favorite"
              passHref
              className="text-header font-semibold mr-12"
            >
              FAVORITE
            </Link>

            <DropdownMenu/>
            <CartDrawer />
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden flex items-center justify-start pt-28 pb-16 gap-12 flex-col z-20 fixed top-0 left-0 bg-white min-h-screen w-full">
            <Link href="/" passHref className="text-header font-semibold">
              HOME
            </Link>
            <Link href="/create" passHref className="text-header font-semibold">
              CREATE YOUR OWN
            </Link>
            <Link
              href="/favorite"
              passHref
              className="text-header font-semibold"
            >
              FAVORITE
            </Link>
            <div className='flex justify-center items-center space-x-8'>
              <DropdownMenu/>
              <CartDrawer />
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default Navbar;
