import React from "react";

function Hero() {
  return (
    <section>
      <h1 className="text-4xl font-bold md:text-6xl lg:text-8xl lg:pl-10 lg:max-w-[80%]">
        Happy Birthday To The <span className="text-white">Best</span>
      </h1>
      <div className="flex flex-col">
        <div className="w-[100%]">
          <img src="/heroImg.png" alt="hero" className="w-[90%] mx-auto mt-4 md:w-[50%] lg:w-[27%] lg:absolute lg:right-[15%] lg:top-[20%]"/>
        </div>
        <div className="lg:max-w-[50%] lg:mt-10 lg:pl-10">
          <p>
            {" "}
            There might be many things that distance can prevent us from doing
            together, but it can&apos;t stop us from celebrating your birthday! We&apos;ll
            always find a way to connect and celebrate, be it a fun little
            conversation or simply a chat over the phone, we&apos;ll commemorate your
            special day in our own way! Can&apos;t wait to see you again my food
            partner. Don&apos;t forget to bring me loaaaaaaaads of chocolate…. LOL!
            Well so yeah now I&apos;m just typing cause I have to fill the space to
            make the website look nice and cool… you know I&apos;m not good at
            writing, hehe. So sorry if I have made any mistakes.
          </p>
          <button className="border-none rounded-[4rem] bg-[#4F0000] text-white px-2.5 py-1.5 text-[0.9rem] mt-4 lg:mt-10">Hit Shen</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
