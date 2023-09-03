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
        Congratsss Angel! You are Super{" "}
        <span className="text-white">Amazing</span>!
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
            I wanted to take a moment to express my immense pride and joy as I
            congratulate you on your exceptional A-Level exam results. Your
            achievements have left me absolutely awestruck, and I couldn't be
            happier for you. You have shown not only incredible intelligence but
            also an unwavering determination and work ethic that truly set you
            apart. These results are a testament to the countless hours of
            studying, the dedication you poured into your education, and your
            unyielding commitment to excellence. <br /> It's no surprise that
            you have excelled so brilliantly because I've always known you to be
            a remarkable individual with boundless potential. As I look at your
            accomplishments, I am filled with admiration and gratitude for
            having you in my life. Your success is a reflection of your
            character, and it serves as an inspiration to everyone fortunate
            enough to know you. You've proven that with passion, perseverance,
            and a relentless pursuit of your goals, there are no limits to what
            you can achieve. As you stand on the threshold of an exciting new
            chapter in your life, I have every confidence that you will continue
            to achieve greatness in all that you do. Your journey is just
            beginning, and I am excited to witness the many more incredible
            milestones that lie ahead for you. Remember, this moment is a
            testament to your hard work and determination, but it also reflects
            the love and support of those who believe in you. I am incredibly
            proud to be one of those people, cheering you on every step of the
            way.
          </m.p>

          {/* <button className="border-none rounded-[4rem] bg-[#4F0000] text-white px-2.5 py-1.5 text-[0.9rem] mt-4 lg:mt-10">
            Hit Shen
          </button> */}
        </div>
      </div>
      <div className="my-36">
        <m.div
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className=" p-5"
        >
          <p className="text-center font-bold text-4xl lg:text-7xl">
            "I am so so so proud of you princess. <br /> You did your best!"
          </p>
          <p className="text-center text-gray-600 italic mt-5 lg:text-right lg:pr-16 lg:text-2xl">
            -Jelly Toffee-
          </p>
        </m.div>
      </div>
    </section>
  );
}

export default Hero;
