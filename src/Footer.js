import React from "react";

function Footer() {
  return (
    <footer className="bg-[#e6c2ac84] w-[100%] h-[20vh]">
      <div>
        <div className="p-5">
          <h1 className="font-bold text-xl text-center p-2">
            Created With Love
          </h1>
          <p className="text-xs text-center px-5">
            This Webite was created by{" "}
            <a
              href="https://www.instagram.com/tikkioninsta/"
              target="_blank"
              rel="noreferrer"
            >
              Trishan Phillipsz
            </a>{" "}
            and{" "}
            <a
              href="https://www.instagram.com/wasath.theekshana/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Wasath Theekshana
            </a>
            &nbsp;as a present to Shimara Ferdinandez on her birthday
          </p>
        </div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
