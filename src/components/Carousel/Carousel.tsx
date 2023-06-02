import CarouselDots from "@/components/Carousel/CarouselDots";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react";
import React from "react";
import { type PropsWithChildren, useEffect, useState } from "react";

type Props = PropsWithChildren & EmblaOptionsType;
useEmblaCarousel.globalOptions = { loop: true };

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      delay: 2000,
    }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const length = React.Children.count(children);

  return (
    <>
      <div className="w-full overflow-hidden md:w-1/3" ref={emblaRef}>
        <div className="flex rounded-xl">{children}</div>
        <CarouselDots itemsLength={length} selectedIndex={selectedIndex} />
      </div>
    </>
  );
};

export default Carousel;
