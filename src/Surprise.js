import React from "react";
import { motion as m } from "framer-motion";

function Surprise() {
  return (
    <section className="mt-10 lg:mt-[10%]">
      <div>
        <m.h1
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold md:text-6xl lg:text-8xl lg:pl-10 lg:max-w-[80%]"
        >
          A Little <span className="text-white">Surprise</span> For You
        </m.h1>
      </div>
      <div className="mt-4 flex flex-col gap-9 lg:flex-row">
        <div className="lg:px-5 ">
          <div>
            <a
              href="https://youtu.be/u6y9LCQaOjk"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <img
                src="/surprise1.png"
                alt="firends surprise"
                className="mx-auto "
              />
            </a>
          </div>
          <div>
            <img
              src="/arrowup.png"
              alt="arrow-up"
              className="w-[7rem] lg:ml-10"
            />
            <m.p
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-left lg:ml-5"
            >
              This is a video of your dear friends wishing a very happy birthday
              to you! We will always be with you till the end.{" "}
            </m.p>
          </div>
        </div>
        <div className="lg:px-5">
          <div>
            <m.p
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-right lg:mr-5"
            >
              This is a video of me being super cringe! I mean im not good at
              this field. Still Thought about trying it for you. LOL!
            </m.p>
            <img
              src="/arrowdown.png"
              alt="arrow-down"
              className="w-[7rem] mr-0 ml-auto lg:mr-10"
            />
          </div>
          <div>
            <a
              href="https://youtube.com/shorts/jGk4uDUjKz0?feature=share"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <img
                src="/surprise2.png"
                alt="cringe-guitar"
                className="mx-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Surprise;
