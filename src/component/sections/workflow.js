import React from "react";
import Textcomp from "./invidial/textcomp";
import Workflowcomp from "./invidial/workflowcomp";
import im1 from "../../asset/image/features-split-image-01.png";
import im2 from "../../asset/image/features-split-image-02.png";
import im3 from "../../asset/image/features-split-image-03.png";
const arrImage = [im1, im2, im3];
const arrElements = [];
var dir = true;
for (var i = 0; i < 3; i++) {
  arrElements.push(<Workflowcomp dir={dir} img={arrImage[i]} />);
  dir = !dir;
}
export default function workflow() {
  return (
    <div
      className="mt-20 mb-20 pt-20 text-center mx-auto bg-right bg-no-repeat"
      style={{ backgroundImage: "url(/illustration-section-02.svg)" }}
    >
      <Textcomp
        texth1="Workflow that just works"
        textp=" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis."
        custom={false}
      />
      <div class="grid grid-cols-1 gap-12 mt-8">{arrElements}</div>
    </div>
  );
}
