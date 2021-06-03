import React from "react";
import icon from "../../asset/image/iconinput.svg";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
  };
  return (
    <div
      className=" bg-no-repeat bg-right-bottom md:inline-flex bg-primary-500
      text-center md:text-left 
    my-16 font-semibold text-white w-full md:px-16 py-12 px-2 sm:text-3xl text-2xl"
      style={{ backgroundImage: "url(/cta-illustration.svg)" }}
    >
      <h1 className="mb-8 ">For previewing layouts and visual?</h1>
      <form onSubmit={handleSubmit} className=" ml-auto border-transparent">
        <div className="relative inline">
          <input
            className=" relative py-3 lg:px-8 md:px-12 px-16  w-full text-black text-base
             rounded-sm focus:outline-none"
            placeholder="Your best email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span class="absolute right-4 py-4 z-10 py-auto h-full ">
            <i>
              <img src={icon} />
            </i>
          </span>
        </div>
      </form>
    </div>
  );
}
