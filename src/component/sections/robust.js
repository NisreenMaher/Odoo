import React from "react";
import Robustcomp from "./invidial/robustcomp";
import im1 from "../../asset/image/feature-tile-icon-01.svg";
import im2 from "../../asset/image/feature-tile-icon-02.svg";
import im3 from "../../asset/image/feature-tile-icon-03.svg";
import im4 from "../../asset/image/feature-tile-icon-04.svg";
import im5 from "../../asset/image/feature-tile-icon-05.svg";
import im6 from "../../asset/image/feature-tile-icon-06.svg";
import Textcomp from "./invidial/textcomp";
const arrImageNumber = [im1, im2, im3, im4, im5, im6];
const arrImage = [];
for (var i = 0; i < 6; i++)
  arrImage.push(<Robustcomp image={arrImageNumber[i]} />);

export default function robust() {
  return (
    <div className="mt-20 text-center mx-auto">
      <Textcomp
        texth1=" Build up the whole picture"
        textp="  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum — semper quis lectus nulla
          at volutpat diam ut venenatis."
      />

      <div class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
        {arrImage}
      </div>
    </div>
  );
}
