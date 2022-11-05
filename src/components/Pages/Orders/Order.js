import React from "react";

const Order = ({ order }) => {
  const {
    serviceName,
    customerDetails: { name, email },
  } = order;
  return (
    <div>
      <div class="p-4 ">
        <div class="flex border-2 rounded-lg border-red-300 border-opacity-50 p-8 sm:flex-row flex-col text-start ">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-red-100 text-black flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
              {serviceName}
            </h2>
            <p class="leading-relaxed text-base">Name : {name}</p>
            <p class="leading-relaxed text-base">email : {email}</p>
            <button class="mt-3 text-red-500 inline-flex items-center bg-red-100 px-1 pr-6 py-1 rounded-md hover:bg-red-200">
              Pending
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
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
