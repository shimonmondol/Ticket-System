import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-950 h-[340px]">
      <footer className="footer sm:footer-horizontal  text-white p-10 justify-around">
        <div>
          <h1 className="font-bold text-lg">CS — Ticket System</h1>
          <p className="w-[240px] text-[#A1A1AA]">
            The Ticket Management System is a simple web-based application
            designed to manage customer support tickets efficiently. It allows
            users to view, track, and update ticket statuses in an organized
            way.
          </p>
        </div>
        <nav className="mt-1 text-[#A1A1AA]">
          <h1 className="font-bold text-lg text-white">Company</h1>
          <a className="link link-hover no-underline">About Us</a>
          <a className="link link-hover no-underline">Our Mission</a>
          <a className="link link-hover no-underline">Contact Saled</a>
        </nav>
        <nav className="mt-1 text-[#A1A1AA]">
          <h1 className="font-bold text-lg text-white">Services</h1>
          <a className="link link-hover no-underline">Products & Services</a>
          <a className="link link-hover no-underline">Customer Stories</a>
          <a className="link link-hover no-underline">Download Apps</a>
        </nav>
        <nav className="mt-1 text-[#A1A1AA]">
          <h1 className="font-bold text-lg text-white">Infomation</h1>
          <a className="link link-hover no-underline">Privacy Policy</a>
          <a className="link link-hover no-underline">Terms & Conditions</a>
          <a className="link link-hover no-underline">Join Us</a>
        </nav>
        <nav className="mt-1 text-[#A1A1AA]">
          <h1 className="font-bold text-lg text-white">Social Links</h1>
          <a className="link link-hover no-underline flex">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <FaXTwitter className="text-black" />
            </div>
            <h1 className="ml-2">@CS — Ticket System</h1>
          </a>
          <a className="link link-hover no-underline flex">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <FaLinkedinIn className="text-black" />
            </div>
            <h1 className="ml-2">@CS — Ticket System</h1>
          </a>
          <a className="link link-hover no-underline flex">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <FaFacebookF className="text-black" />
            </div>
            <h1 className="ml-2">@CS — Ticket System</h1>
          </a>
          <a className="link link-hover no-underline flex">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <MdEmail className="text-black" />
            </div>
            <h1 className="ml-2">support@cst.com</h1>
          </a>
        </nav>
      </footer>
      <div className="h-[1px] w-[1190px] mx-auto bg-[#A1A1AA] my-6"></div>
      <p className="text-[#A1A1AA] text-center">
        © 2025 CS — Ticket System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
