"use client";
import SectionHeader from "../Common/SectionHeader";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";

const Carousel = () => {
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
          className="animate_top mt-30 sm:mt-20 md:mx-20 lg:mx-5  "
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper m-3 ">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              autoplay={{
                delay: 2500,
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
             
              {[12, 13, 17, 20].map((i) => (
                <SwiperSlide key={i}>
                  <div className="min-h-[40vh] rounded-xl border-2 border-black p-3">
                    <img
                      src={`/images/img/${i}.jpeg`}
                      className="h-[78vh] w-[100%] rounded-xl "
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
};
export default Carousel;
