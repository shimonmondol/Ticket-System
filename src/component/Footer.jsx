import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-950 overflow-hidden h-170 lg:h-80">
      <footer className="footer grid grid-cols-2 lg:flex text-white p-10 gap-8 lg:justify-around">
        {/* Section 1 */}
        <div className="col-span-2 lg:col-span-1">
          <h1 className="font-bold text-lg">CS — Ticket System</h1>
          <p className="w-86 lg:w-60 text-[#A1A1AA] leading-6">
            The Ticket Management System is a simple web-based application
            designed to manage customer support tickets efficiently.It allows
            users to view, track, and update ticket.
          </p>
        </div>

        {/* Other Sections */}
        <nav className="text-[#A1A1AA]">
          <h1 className="font-bold text-lg text-white">Company</h1>
          <a className="link link-hover no-underline">About Us</a>
          <a className="link link-hover no-underline">Our Mission</a>
          <a className="link link-hover no-underline">Contact Sales</a>
        </nav>

        <nav className="text-[#A1A1AA]">
          <h1 className="font-bold text-lg text-white">Services</h1>
          <a className="link link-hover no-underline">Products & Services</a>
          <a className="link link-hover no-underline">Customer Stories</a>
          <a className="link link-hover no-underline">Download Apps</a>
        </nav>
        <nav className="text-[#A1A1AA]">
          <h1 className="font-bold text-lg text-white">Information</h1>
          <a className="link link-hover no-underline">Privacy Policy</a>
          <a className="link link-hover no-underline">Terms & Conditions</a>
          <a className="link link-hover no-underline">Join Us</a>
        </nav>
        <nav className="text-[#A1A1AA]">
          <h1 className="font-bold text-lg text-white">Social Links</h1>
          <a className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <FaXTwitter className="text-black text-xs" />
            </div>
            @CS — Ticket System
          </a>
          <a className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <FaLinkedinIn className="text-black text-xs" />
            </div>
            @CS — Ticket System
          </a>
          <a className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <FaFacebookF className="text-black text-xs" />
            </div>
            @CS — Ticket System
          </a>
          <a className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <MdEmail className="text-black text-xs" />
            </div>
            support@cst.com
          </a>
        </nav>
      </footer>
      <div className="h-px w-86 lg:w-300 mx-auto bg-[#A1A1AA]"></div>
      <p className="text-[#A1A1AA] text-center mt-6">
        © 2026 CS — Ticket System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
