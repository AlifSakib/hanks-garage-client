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
          <div>
            {[...Array(pages).keys()].map((number) => (
              <button
                onClick={() => setPage(number)}
                className="mx-5 my-10 px-4 bg-red-500 py-1 text-white rounded-md"
                key={number}
              >
                {number + 1}
              </button>
            ))}
            <select
              className="mx-5 my-10 px-4 bg-red-500 py-1 text-white rounded-md"
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
      </section>
    </div>
  );
};

export default Services;
