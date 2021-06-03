import React from "react";
import Textcomp from "./invidial/textcomp";
import Cardcustomer from "./invidial/cardcustomer";

export default function Customertestimonials() {
  return (
    <div className="pt-20">
      <Textcomp
        texth1="Customer testimonials"
        textp="Vitae aliquet nullam nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare."
        custom={true}
      />
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-4  mt-8">
        <div>
          <Cardcustomer name="Roman Level " />
        </div>
        <div>
          <Cardcustomer name="Diana Rynzhuk" />
        </div>
        <div className="xl:col-span-1 md:col-span-2 col-span-1">
          <Cardcustomer name="Ben Stafford" />
        </div>
      </div>
    </div>
  );
}
