import React from "react";

export default function textcomp({ texth1, textp, custom }) {
  return (
    <div className="mb-20">
      <h1 className="text-white xs:p-4 p-4 text-center font-extrabold font-Inter sm:text-4xl text-3xl">
        {texth1}
      </h1>
      <div
        className={
          !custom
            ? "sm:mx-auto mx-8 sm:max-w-2xl max-w-lg"
            : "sm:mx-auto mx-8 sm:max-w-xl max-w-lg"
        }
      >
        <p className="font-normal text-gray text-xl text-center">{textp}</p>
      </div>
    </div>
  );
}
