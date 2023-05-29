type CarouselDotsProps = {
  itemsLength: number;
  selectedIndex: number;
};

const CarouselDots = ({ itemsLength, selectedIndex }: CarouselDotsProps) => {
  const arr = new Array(itemsLength).fill(0);

  return (
    <div className="flex gap-1 my-2 justify-center -translate-y-5">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={`h-2 w-2 rounded-full transition-all duration-300 bg-[#4A6FA5] ${
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
