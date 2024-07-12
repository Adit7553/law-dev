"use client";
import img from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20  xl:pb-25 sm:pt-40 ">
        <div className="mx-auto max-w-c-1390 px-4   2xl:px-0 ">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5 ">
            <div className=" md:w-1/2 pl-[4%] ">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white ">
                🔥 Confianzza - Navigating Legal Frontiers
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Confianzza Law {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Firm
                </span>
              </h1>
              <p>
                The word "Confianza" in its literal sense means an atmosphere of
                trust, someone who's reliable and trustworthy. The Confianzza
                firm as it's name suggests is a discreet and confidential
                promise of a knowledgeable and dignified counsel from a
                experienced and committed team of experts.
              </p>

              {/* <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p>
              </div> */}
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
               
                <div className=" relative aspect-[700/444] w-full">
                  <img
                    className="shadow-solid-l dark:hidden"
                    src="/images/img/law.png"
                    // src="/images/hero/hero-light.svg"
                    alt="Hero"
                    // fill
                  />
                  <img
                    className="hidden shadow-solid-l dark:block"
                    src="/images/img/law.png"
                    // src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    // fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
