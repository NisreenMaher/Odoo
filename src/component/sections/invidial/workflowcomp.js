import React from "react";
import im1 from "../../../asset/image/features-split-image-01.png";

export default function workflowcomp({ img, dir }) {
  const element1 = (
    <div className="flex-1 md:text-left text-center font-Inter lg:mt-20 mt-10 md:order-2 order-1 ">
      <div className={!dir ? "md:ml-16 ml-0" : ""}>
        <span className="text-primary-500 font-medium text-sm my-2">
          LIGHTNING FAST WORKFLOW
        </span>
        <h1 className="text-3xl font-bold text-white my-2">
          Data-driven insights
        </h1>
        <div className="md:max-w-md max-w-sm mt-4 md:mb-4 mb-12 mx-auto md:mx-0">
          <p className="text-gray text-lg font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
  const element2 = (
    <div className="flex-1 md:max-w-full max-w-2xl mx-auto order-2">
      <img src={img} />
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row ">
      {dir ? (
        <>
          {element1}
          {element2}{" "}
        </>
      ) : (
        <>
          {element2}
          {element1}{" "}
        </>
      )}
    </div>
  );
}
