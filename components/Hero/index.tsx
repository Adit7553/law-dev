"use client";
import img from "next/image";
import { useState } from "react";
import IdealCarousel from "../IdealCarousel/Index";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 xl:pb-25 sm:pt-40 ">
        <div className="mx-auto max-w-c-1390 px-4 2xl:px-0">
          <div className="flex flex-col md:flex-row lg:items-center lg:gap-3 xl:gap-12.5">
            <div className="md:w-1/2 pl-[4%] sm:pt-[5%] md:pt-[0%] xl:pt-[0%] lg:pt-[0%]">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white mt-[100px] lg:mt-[1px] sm:mt-[1px] xl:mt-[1px]">
                🔥 Confianzza - Navigating Legal Frontiers
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Confianzza Law {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Firm
                </span>
              </h1>
              <p>
                The word "Confianza" in its literal sense means an atmosphere of
                trust, someone who's reliable and trustworthy. The Confianzza
                firm as its name suggests is a discreet and confidential promise
                of a knowledgeable and dignified counsel from an experienced and
                committed team of experts.
              </p>
            </div>

            <div className="animate_right md:w-1/2 lg:block mb-10 md:mb-0">
              <div className="relative 2xl:-mr-7.5">
                {/* <div className="relative aspect-[700/444] w-full">
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
                </div> */}
                <IdealCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
