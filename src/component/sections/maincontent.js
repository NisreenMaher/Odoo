import React, { useState } from "react";
import Animation from "../animation";
import ModalVideo from "react-modal-video";

export default function Maincontent() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div class="context ">
      <div className="mt-16 text-center mx-auto">
        <h1 className=" text-white xs:p-4 p-4 text-center font-extrabold sm:text-6xl text-5xl">
          Landing template for <span className="text-primary">startups </span>
        </h1>
        <div className=" sm:mx-auto mx-6 max-w-2xl">
          <p className=" font-normal text-gray text-xl ">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
        </div>
        <div className="my-4 ">
          <button
            className="rounded-sm mx-4 h-12 sm:px-8 px-24 mx-auto sm:mx-2 font-semibold text-base bg-primary font-Inter 
                    text-white hover:text-white focus:outline-none 
                    hover:bg-primary-dark
                    sm:inline-block
                    block
                   "
          >
            Get started
          </button>
          <button
            className="rounded-sm  h-12 sm:px-8 px-20 mx-auto sm:mx-2 font-semibold text-base bg-gray-dark font-Inter 
                    text-white hover:text-white focus:outline-none 
                    hover:bg-gray-darkHover
                    sm:inline-block
                    block
                    my-4
                   "
          >
            View on Github
          </button>
        </div>
        <div className="text-center  my-8 ">
          <a
            data-video="https://player.vimeo.com/video/174002812"
            href="#0"
            aria-controls="video-modal"
          >
            <img
              class="mx-auto"
              src="bgvideo.png"
              width={896}
              height={504}
              onClick={() => setOpen(true)}
            />
          </a>
          <ModalVideo
            channel="vimeo"
            autoplay
            width={896}
            height={504}
            isOpen={isOpen}
            videoId="174002812"
            onClose={() => setOpen(false)}
          />
        </div>
      </div>
      <Animation />
    </div>
  );
}
