type CarouselDotsProps = {
  itemsLength: number;
  selectedIndex: number;
};

const CarouselDots = ({ itemsLength, selectedIndex }: CarouselDotsProps) => {
  const arr = new Array(itemsLength).fill(0);

  return (
    <div className="my-2 flex -translate-y-5 justify-center gap-1">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={`h-2 w-2 rounded-full bg-[#4A6FA5] transition-all duration-300 ${
              selected ? "" : "opacity-50"
            }`}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

export default CarouselDots;
