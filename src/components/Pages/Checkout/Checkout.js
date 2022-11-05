import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const { data } = useLoaderData();
  const { _id, title, price, img } = data;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const customerDetails = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const order = {
      service: _id,
      serviceName: title,
      price,
      customerDetails,
    };

    console.log(order);
  };

  return (
    <div>
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-start ">
          <img
            alt="team"
            className="flex-shrink-0 rounded  w-full h-56 object-cover object-center mb-4"
            src={img}
          />
          <h1 class=" font-medium text-lg text-gray-900">{title}</h1>
          <h1 class=" font-medium  text-gray-900">Charge : {price}$</h1>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="text-start">
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                type="text"
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              Confirm Order
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
