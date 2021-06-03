import React from "react";
import img from "../../../asset/image/icon.svg";
export default function cardcustomer({ name }) {
  return (
    <div className="bg-gray-dark text-left mb-4 py-8 px-6 max-w-sm mx-auto">
      <div className="grid grid-col-1 divide-y divide-gray-light divide-opacity-20">
        <div>
          <img src={img} />
          <p className="font-normal text-lg text-gray my-6 ">
            — Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum cillum dolore eu fugiat.
          </p>
        </div>
        <div></div>
      </div>
      <div className="mt-4">
        <span className="font-semibold text-white text-base font-Inter">
          {name}
          <span className="text-gray-light"> / </span>
          <a
            href="https://www.google.com"
            className="text-green hover:text-green-light"
          >
            AppName
          </a>
        </span>
      </div>
    </div>
  );
}
