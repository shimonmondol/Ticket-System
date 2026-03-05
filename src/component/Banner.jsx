import React from "react";
import { useEffect, useState } from "react";

const Banner = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  return (
    <div className="overflow-hidden bg-[#F5F5F5] pt-12">
      <div className="w-302 mx-auto flex flex-col lg:flex-row text-white">
        {/* In Progress */}
        <div
          className="bg-linear-to-r from-purple-500 to-purple-700 
                  w-124 lg:w-1/2 h-40 
                  flex justify-center items-center"
        >
          <div className="text-center text-xl">
            <h1>In-Progress</h1>
            <h2>0</h2>
          </div>
        </div>
        {/* Resolved */}
        <div
          className="bg-linear-to-r from-green-300 to-green-600 
                  w-124 lg:w-1/2 h-40 
                  flex justify-center items-center"
        >
          <div className="text-center text-xl">
            <h1>Resolved</h1>
            <h2>0</h2>
          </div>
        </div>
      </div>
      <div className="ml-10 lg:ml-20 pt-10">
        <h1 className="font-semibold text-lg">Customer Tickets</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Ticket Cards (2 column) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="bg-white p-4 rounded shadow">
                <div className="flex justify-between">
                  <h2 className="font-semibold">{ticket.title}</h2>
                  <h3>{ticket.status}</h3>
                </div>
                <p>{ticket.description}</p>
                <p className="text-gray-500">{ticket.customer}</p>
              </div>
            ))}
          </div>

          {/* Blank / Task Status Column */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-lg">Task Status</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
