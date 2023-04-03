"use client";
import { Favorite } from "@/components";
import Image from "next/image";
import React, { useState } from "react";

function Card({ data }) {
  const { name, description, price, img, status } = data;
  const [favorito, setFavorito] = useState(false);
  const handlerFavorite = () => {
    setFavorito(!favorito);
  };

  return (
    <article className="group-hover">
      <div className="relative w-72 group">
        <Image src={img} alt="zapatillas adidas" />
        <span
          className="absolute top-2 right-4 h-7 cursor-pointer"
          onClick={handlerFavorite}
        >
          <Favorite
            width={25}
            height={25}
            stilo={favorito ? "fill-black" : "stroke-black "}
          />
        </span>
        <span className="group-hover:-translate-y-2 duration-200 transition-transform absolute -bottom-1 left-2 px-2 py-1 bg-white text-sm">
          {status ? `S/. ${price}` : "agotado"}
        </span>
      </div>
      <header className="flex flex-col gap-1 py-2 px-2">
        <p className="text-sm">{name}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </header>
      <footer className="text-xs text-gray-600 font-medium px-2">
        <a href="">envío gratis</a>
      </footer>
    </article>
  );
}

export default Card;
