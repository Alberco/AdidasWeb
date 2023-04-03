import React from "react";
import { ArrowD, Carousel } from "..";
import { objectCarousel } from "@/db/zapatillas";

function Novedades() {
  return (
    <section className="container px-4 lg:px-0  mx-auto pb-20 pt-20">
      <p className="text-2xl flex gap-1 font-bold pb-10">
        <span>
          <ArrowD color={"black"} />
        </span>
        NOVEDADES
      </p>
      <Carousel objetos={objectCarousel} id="1" />
    </section>
  );
}

export default Novedades;
