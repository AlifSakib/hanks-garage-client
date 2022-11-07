import React from "react";
import hero from "../../../assets/hero.avif";
const Hero = () => {
  return (
    <div>
      <>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-4/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src={hero}
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Bulletin boards are sort of the garage bands of cyberspace.
              </h1>
              <p className="mb-8 leading-relaxed">
                An automobile repair shop (also known regionally as a garage or
                a workshop) is an establishment where automobiles are repaired
                by auto mechanics and technicians.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Explore
                </button>
                <button className="ml-4 inline-flex bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-900 text-white rounded text-lg">
                  Order
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Hero;
