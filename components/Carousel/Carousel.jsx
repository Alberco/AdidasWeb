"use client";
import Card from "./components/Card";
import { ChevronD, ChevronL } from "..";

function Carousel({ objetos, id }) {
  const handleScrollLeft = () => {
    const scrollContainer = document.getElementById(`scrollContainer${id}`);
    scrollContainer.scrollLeft -= 300;
  };

  const handleScrollRight = () => {
    const scrollContainer = document.getElementById(`scrollContainer${id}`);
    scrollContainer.scrollLeft += 300;
  };

  return (
    <>
      <div className="flex justify-end gap-3 pb-2 touch-pan-x">
        <button
          onClick={handleScrollLeft}
          className="group hover:bg-black transition-all duration-100"
        >
          <ChevronL stilo={"group-hover:stroke-white"} />
        </button>
        <button
          onClick={handleScrollRight}
          className="group hover:bg-black transition-all duration-100"
        >
          <ChevronD stilo={"group-hover:stroke-white"} />
        </button>
      </div>
      <div
        className="flex gap-4 overflow-hidden touch-pan-x"
        id={`scrollContainer${id}`}
        style={{ scrollBehavior: "smooth" }}
      >
        {objetos.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Carousel;
