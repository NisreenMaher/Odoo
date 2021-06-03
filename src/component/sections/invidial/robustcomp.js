import React from "react";

export default function robustcomp({ image }) {
  return (
    <div>
      <div className="mx-auto mx-2 max-w-xs">
        <div className="  text-center bg-primary rounded-full h-16 w-16  flex mx-auto items-center justify-center">
          <img className="" src={image} />
        </div>

        <h1 className="text-white xs:p-4 p-4 text-center font-bold font-Inter text-2xl">
          Robust Workflow
        </h1>
        <div className="md:mx-auto mx-0 ">
          <p className="font-normal text-gray text-lg text-center ">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
        </div>
      </div>
    </div>
  );
}
