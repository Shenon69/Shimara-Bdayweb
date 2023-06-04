import React from "react";
import { motion as m } from "framer-motion";

function Hero() {
  return (
    <section>
      <m.h1
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold md:text-6xl lg:text-8xl lg:pl-10 lg:max-w-[80%]"
      >
        All the best to your exams <span className="text-white">Princess</span>!
      </m.h1>
      <div className="flex flex-col lg:flex-row">
        <div className="w-auto">
          <m.img
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            src="/heroImg.png"
            alt="hero"
            className="w-[70%] mx-auto mt-4 md:w-[50%] lg:w-[60%] "
          />
        </div>
        <div className="lg:max-w-[50%] lg:mt-10 lg:pl-10">
          <m.p
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            {" "}
            As you embark on your AL exams, I wanted to send you a heartfelt
            message of encouragement and support. <br /> You are about to
            showcase your incredible knowledge and abilities, and I have no
            doubt that you will soar through each paper with grace and
            brilliance. Remember, after you complete each exam, take a moment to
            celebrate your accomplishments and let go of any lingering doubts or
            worries. Trust in your preparation and the hard work you've put in.
            Each paper is an opportunity for you to shine, and you have the
            power to seize it. I believe in you wholeheartedly, and I want you
            to know that you are not alone in this journey. Lean on your
            strength, resilience, and determination to conquer every challenge
            that comes your way. Stay focused, remain calm, and let your passion
            guide you. Go out there and ace these exams, my love. Your future
            awaits, and I am here, cheering you on every step of the way.
          </m.p>

          {/* <button className="border-none rounded-[4rem] bg-[#4F0000] text-white px-2.5 py-1.5 text-[0.9rem] mt-4 lg:mt-10">
            Hit Shen
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
