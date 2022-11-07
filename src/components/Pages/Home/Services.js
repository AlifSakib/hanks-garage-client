import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(3);
  const pages = Math.ceil(count / size);
  useEffect(() => {
    fetch(`http://localhost:5000/services?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data.services);
        setCount(data.data.count);
      });
  }, [page, size]);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-medium title-font mb-4  text-red-600">
              Services
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-6">
            {services.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </div>
          <div className="flex justify-center space-x-4 mt-10 text-white">
            <div className="space-x-6 flex justify-center">
              {[...Array(pages).keys()].map((number) => (
                <button
                  onClick={() => setPage(number)}
                  className={
                    number === page
                      ? "px-4 py-2 mx-1 text-white transition-colors duration-300 transform bg-red-500 rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-red-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
                      : "px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-red-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 border-2"
                  }
                  key={number}
                >
                  {number + 1}
                </button>
              ))}
            </div>
            <div>
              <select
                className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-red-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 border-2"
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="3" selected>
                  3
                </option>
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
