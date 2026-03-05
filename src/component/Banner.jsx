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
    <div className="overflow-hidden bg-[#F5F5F5] pt-12 h-650 lg:h-312">
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
        <h1 className="font-semibold text-2xl text-[#34485A]">
          Customer Tickets
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Ticket Cards (2 column) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => alert(`Ticket ${ticket.code} clicked`)}
                className="bg-white lg:max-w-2xl p-4 mt-4 rounded shadow cursor-pointer hover:shadow-lg transition"
              >
                <div className="flex justify-between">
                  <h2 className="font-semibold text-[#001931]">
                    {ticket.title}
                  </h2>

                  <h3
                    className={
                      ticket.status === "Open"
                        ? "bg-green-500 text-white px-2 rounded"
                        : ticket.status === "In Progress"
                          ? "bg-yellow-500 text-white px-2 rounded"
                          : "bg-gray-500 text-white px-2 rounded"
                    }
                  >
                    {ticket.status}
                  </h3>
                </div>

                <p className="text-gray-500 mt-3">{ticket.description}</p>

                <div className="flex mt-3 gap-4 flex-wrap">
                  <p className="text-gray-500">{ticket.code}</p>

                  <p
                    className={
                      ticket.priority === "High Priority"
                        ? "text-red-500 font-semibold"
                        : ticket.priority === "Medium Priority"
                          ? "text-yellow-500 font-semibold"
                          : ticket.priority === "Low Priority"
                            ? "text-green-500 font-semibold"
                            : "text-gray-500"
                    }
                  >
                    {ticket.priority}
                  </p>

                  <p className="text-gray-500">{ticket.customer}</p>
                  <p className="text-gray-500">{ticket.createdAt}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Blank / Task Status Column */}
          <div>
            <h2 className="text-lg font-semibold pb-6">Task Status</h2>
            <div className="bg-white p-6 rounded shadow w-86">
              <p>Select a ticket to start working.</p>
            </div>
            <div className="bg-white p-6 rounded shadow w-86">
              <p>Select a ticket to start working.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
