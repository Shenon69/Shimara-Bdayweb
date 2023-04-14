import React from "react";
import { motion as m } from "framer-motion";

function Rage() {
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
          Release Your <span className="text-white">Rage</span> Here
        </m.h1>
      </div>
      <div className="mt-3">
        <a
          href="https://youtube.com/shorts/cMVOoImatnM?feature=share"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/rage.png"
            alt="rage-release"
            className="cursor-pointer md:w-[70%] md:mx-auto lg:w-[60%] lg:mt-11"
          />
        </a>
        <p className="text-sm md:pl-[15%] lg:pl-[20%]">
          *no animals were harmed
        </p>
      </div>
    </section>
  );
}

export default Rage;
