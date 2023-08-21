import React from "react";
import Slider, { SliderItem } from "./Slider";
import Image from "next/image";

const Logos: React.FC = () => (
  <>
    <Slider className="" contentWidth={1290} initialOffset={0}>
      <SliderItem width={150}>
        <Image
          className="text-white"
          src="/class.png"
          width={150}
          height={50}
          alt="Class"
          objectFit="contain"
        />
      </SliderItem>

      <SliderItem width={150}>
        <Image
          className="text-white"
          src="/class.png"
          width={150}
          height={50}
          alt="Class"
          objectFit="contain"
        />
      </SliderItem>

      <SliderItem width={150}>
        <Image
          className="text-white"
          src="/class.png"
          width={150}
          height={50}
          alt="Class"
          objectFit="contain"
        />
      </SliderItem>

      <SliderItem width={150}>
        <Image
          className="text-white"
          src="/class.png"
          width={150}
          height={50}
          alt="Class"
          objectFit="contain"
        />
      </SliderItem>

      <SliderItem width={150}>
        <Image
          className="text-white"
          src="/class.png"
          width={150}
          height={50}
          alt="Class"
          objectFit="contain"
        />
      </SliderItem>
    </Slider>
  </>
);

export default Logos;
