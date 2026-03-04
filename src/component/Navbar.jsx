import React from "react";

const Navbar = () => {
  return (
    <div className="w-[1200px] mx-auto">
      <div className="navbar mt-3">
        <div className="flex-1">
          <a className="font-bold text-lg">CS-Ticket System</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-6 mt-1">
            <li>Home</li>
            <li>FAQ</li>
            <li>Changelog</li>
            <li>Blog</li>
            <li>Download</li>
            <li>Contact</li>
          </ul>
          <button className="bg-[#422AD5] px-3 py-1 ml-6 rounded-sm text-sm text-white cursor-pointer">+  New Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
