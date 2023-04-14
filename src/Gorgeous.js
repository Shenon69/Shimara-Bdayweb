import React from "react";
import { motion as m } from "framer-motion";

function Gorgeous() {
  return (
    <section className="mt-10 lg:mt-[10%]">
      <div>
        <m.h1
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='text-4xl font-bold md:text-6xl lg:text-8xl lg:pl-10 lg:max-w-[80%]"'
        >
          Look How <span className="text-white"> Gorgeous</span> You Are
        </m.h1>
      </div>
      <div className="mt-5 lg:flex">
        <div>
          <a
            href="https://www.instagram.com/shimara_ferdinandez/"
            target="_blank"
            rel="noreferrer"
          >
            <m.img
              initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src="/gorgeous1.png"
              alt="baby"
              className="mx-auto md:w-[70%] lg:mr-0"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/shimara_ferdinandez/"
            target="_blank"
            rel="noreferrer"
          >
            <m.img
              initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src="/gorgeous2.png"
              alt="babes"
              className="mx-auto md:w-[70%] lg:ml-0"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gorgeous;
