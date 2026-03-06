import React from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Banner = () => {
  const [tickets, setTickets] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);

  const handleTaskStatus = (ticket) => {
    setTaskStatus((prev) => {
      if (prev.some((t) => t.id === ticket.id)) {
        toast.error("Ticket already added");
        return prev;
      }
      return [...prev, ticket];
    });
  };

  const handleComplete = (task) => {
    setResolvedTask([...resolvedTask, task]);
    toast.success("Resolved Task Successfully");
    const remaining = taskStatus.filter((t) => t.id !== task.id);
    setTaskStatus(remaining);
  };

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="overflow-hidden bg-[#F5F5F5] pt-12 min-h-screen lg:min-h-screen">
        <div className="w-302 mx-auto flex flex-col lg:flex-row text-white">
          {/* In Progress */}
          <div className="bg-linear-to-r from-purple-500 to-purple-700 w-124 lg:w-1/2 h-60 flex justify-center items-center">
            <div className="text-center text-xl">
              <h1>In-Progress</h1>
              <h2>{taskStatus.length}</h2>
            </div>
          </div>
          {/* Resolved */}
          <div className="bg-linear-to-r from-green-300 to-green-600 w-124 lg:w-1/2 h-60 flex justify-center items-center">
            <div className="text-center text-xl">
              <h1>Resolved</h1>
              <h2>{resolvedTask.length}</h2>
            </div>
          </div>
        </div>
        <div className="ml-10 lg:ml-20 pt-10">
          <h1 className="font-semibold text-2xl text-[#34485A]">
            Customer Tickets
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Ticket Cards (2 column) */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 mb-0 lg:mb-20">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  onClick={() => handleTaskStatus(ticket)}
                  className="bg-white p-4 mt-4 rounded shadow cursor-pointer"
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
            {/* Task & Resolved Column */}
            <div>
              {/* Task Status Column */}
              <div className="p-4">
                <h2 className="font-bold text-[#34485A] text-2xl mb-3">
                  Task Status
                </h2>
                {taskStatus.length === 0 ? (
                  <p className="text-gray-500">
                    Select a ticket to add to Task Status
                  </p>
                ) : (
                  taskStatus.map((task) => (
                    <div
                      key={task.id}
                      className="w-82 bg-white p-4 mt-4 rounded shadow cursor-pointer"
                    >
                      <p className="font-semibold">{task.title}</p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleComplete(task);
                        }}
                        className="bg-green-500 w-full text-white px-2 py-1 rounded mt-3 cursor-pointer"
                      >
                        Complete
                      </button>
                    </div>
                  ))
                )}
              </div>
              {/* Resolved Task Column */}
              <div className="p-4 mb-10 lg:mb-0">
                <h2 className="font-bold text-[#34485A] text-2xl mb-3">
                  Resolved Task
                </h2>
                {resolvedTask.length === 0 ? (
                  <p className="text-gray-500">No resolved tasks yet.</p>
                ) : (
                  resolvedTask.map((task) => (
                    <div
                      key={task.id}
                      className="w-82 bg-white p-4 mt-4 rounded shadow cursor-pointer"
                    >
                      <p className="font-semibold">{task.title}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
