import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-amber-600">
      <div className="navbar pt-3 w-full lg:w-302 mx-auto px-4 lg:px-0 ">
        {/* Logo */}
        <div className="flex-1">
          <a className="font-bold text-2xl lg:text-lg ml-5 lg:ml-0">
            CS — Ticket System
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="menu menu-horizontal gap-6">
            <li>Home</li>
            <li>FAQ</li>
            <li>Changelog</li>
            <li>Blog</li>
            <li>Download</li>
            <li>Contact</li>
          </ul>
          <button className="bg-[#422AD5] px-3 py-1 rounded-sm text-sm text-white">
            + New Ticket
          </button>
        </div>
        {/* Mobile 3 Bar */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl cursor-pointer"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-4 " : "max-h-0"
        }`}
      >
        <div className="px-4 space-y-3 ml-5">
          <div>Home</div>
          <div>FAQ</div>
          <div>Changelog</div>
          <div>Blog</div>
          <div>Download</div>
          <div>Contact</div>
          <button className="bg-[#422AD5] w-32 h-8 px-3 py-1 rounded-sm text-sm text-white cursor-pointer">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
