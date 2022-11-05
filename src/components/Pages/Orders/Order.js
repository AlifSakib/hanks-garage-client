import React from "react";

const Order = ({ order, handleStatus }) => {
  const {
    serviceName,
    customerDetails: { name, email },
    status,
  } = order;
  return (
    <div>
      <div className="p-4 ">
        <div className="flex border-2 rounded-lg border-red-300 border-opacity-50 p-8 sm:flex-row flex-col text-start ">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-red-100 text-black flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              {serviceName}
            </h2>
            <p className="leading-relaxed text-base">Name : {name}</p>
            <p className="leading-relaxed text-base">email : {email}</p>
            <button
              onClick={() => handleStatus(order)}
              className="mt-3 text-red-500 inline-flex items-center bg-red-100 px-1 pr-6 py-1 rounded-md hover:bg-red-200"
            >
              {status ? status : "Pending"}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
