import React from "react";
import { Carousel } from "..";
import { objectCarousel } from "@/db/zapatillas";

function Prime() {
  return (
    <section className="container px-4 lg:px-0 mx-auto pb-20">
      <p className="text-4xl flex gap-1 font-bold pb-10">LO MEJOR DE ADIDAS</p>
      <Carousel objetos={objectCarousel} id="2" />
    </section>
  );
}

export default Prime;
