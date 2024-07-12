"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const TeamItem = ({ team }) => {
  const { image, name, designation, email, feature } = team;

  return (
    <>
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
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white h-[550px] p-4 pb-9 shadow-solid-3 dark:bg-blacksection transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark text-center"
        // className="animate_top z-40 rounded-lg border border-white bg-white p-2 pb-9 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
          <img className="mx-auto w-[100%]" src={image} alt={name} style={{height:350}} />

        <div className="px-4">
          <p className=" mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
              {`${name.slice(0, 40)}`}
          </p>
          <p className="line-clamp-3">{feature? (feature):""}{feature && <br/>}{designation}</p>

        </div>
      </motion.div>
    </>
  );
};

export default TeamItem;
