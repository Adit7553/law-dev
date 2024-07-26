"use client";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";

const HeroCarousel = () => {
  return (
    <>
    
      <section>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="arelative animate_top mt-30 sm:mt-20 md:mx-20 lg:mx-5 w-full h-[660px]"
        >
            <div className="relative animate_top mt-30 sm:mt-20 md:mx-20 lg:mx-2 w-full h-full">
  <div className="absolute inset-0 bg-cover rounded-xl"
            style={{ backgroundImage: "url('/banner.jpg')" , opacity: 0.6}}
  ></div>
  <div className="swiper m-3 flex w-full h-full">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 1
                },
              }}
            >
              <SwiperSlide>
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

           
          </div>
        </div>
      </section>
                </SwiperSlide>
              
                <SwiperSlide>
                    <div className="rounded-xl ">
                    <img
                      src={`/images/ideal/banner-1.png`}
                      className="rounded-xl w-full h-full"
                    />
                  </div>
                    
                 
                </SwiperSlide>
              
            </Swiper>
          </div>
</div>
          
        </motion.div>
      </section>
    </>
  );
};
export default HeroCarousel;
