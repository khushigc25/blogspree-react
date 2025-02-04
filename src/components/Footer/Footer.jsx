import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative py-16 bg-[#050c40] border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap">
          {/* Logo & Copyright */}
          <div className="w-full p-6 md:w-1/2 lg:w-4/12">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-6">
                <Logo width="120px" />
              </div>
              <div>
                <p className="text-sm text-gray-400">
                  &copy; 2024. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          {/* Company Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="text-lg font-semibold text-gray-300 mb-6 uppercase">
                Company
              </h3>
              <ul className="text-gray-200">
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition-colors"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition-colors"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition-colors"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition-colors"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Support Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="text-lg font-semibold text-gray-300 mb-6 uppercase">
                Support
              </h3>
              <ul className="text-gray-200">
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition-colors"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition-colors"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition-colors"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition-colors"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Legal Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="text-lg font-semibold text-gray-300 mb-6 uppercase">
                Legals
              </h3>
              <ul className="text-gray-200">
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition-colors"
                    to="/"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition-colors"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-gray-400 transition-colors"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
