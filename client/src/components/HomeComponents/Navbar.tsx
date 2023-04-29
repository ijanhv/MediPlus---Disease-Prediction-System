import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="max-w-9xl mx-auto px-4 sm:px-7 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-black font-bold ">
              <Image src={logo} className="h-8 w-auto " alt="MediPlus" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-16 flex items-baseline">
              <Link
                href="/predict"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 "
              >
                Predict Disease
              </Link>
              <Link
                href="/doctors"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Find Doctors
              </Link>
              <Link
                href="/symptom-checker"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Symptom Checker
              </Link>
              <Link
                href="#"
                className="px-3 ml-5 py-2 rounded-md text-sm font-medium border border-gray-600 text-gray-600 hover:text-blue-600 hover:border-blue-600"
              >
                Login/Sign Up
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-700  "
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-gray-100`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 text-gray-600 hover:text-gray-900"
          >
            Link 1
          </a>
          <a
            href="#"
            className="block px-3 py-2
rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-200"
          >
            Link 2
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 text-gray-600 hover:text-gray-900"
          >
            Link 3
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
