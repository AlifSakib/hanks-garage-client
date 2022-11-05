import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { title, img, price } = service;

  return (
    <div>
      <div className="p-4 rounded shadow-md bg-gray-100">
        <div className="h-full flex flex-col items-center text-start">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={img}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
              {title}
            </h2>
            <h3 className="text-gray-500 mb-3">{price}$</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              debitis blanditiis beatae quidem nobis molestiae consectetur
              officia eaque ducimus voluptatum!
            </p>
            <Link
              to={`/checkout/${service._id}`}
              className="px-6 py-2 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
            >
              Take Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
