import React from "react";

function Popular() {
  return (
    <section>
      <p className="container mx-auto px-10 lg:px-20 text-3xl font-bold pt-4 pb-16">
        POPULAR AHORA
      </p>
      <ul className="grid grid-cols-1 grid-rows-1  lg:grid-cols-3 lg:grid-rows-2 container mx-auto px-10 lg:px-20 gap-16 pb-8">
        <li>
          <a
            href=""
            className="text-4xl font-bold border-b-2 hover:border-b-8 transition-all duration-100 border-black"
          >
            Materiales Reciclados
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-4xl font-bold border-b-2 hover:border-b-8 transition-all duration-100 border-black"
          >
            Terrex
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-4xl font-bold border-b-2 hover:border-b-8 transition-all duration-100 border-black"
          >
            Casacas
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-4xl font-bold border-b-2 hover:border-b-8 transition-all duration-100 border-black"
          >
            Ultraboost
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-4xl font-bold border-b-2 hover:border-b-8 transition-all duration-100 border-black"
          >
            Precios Irresistibles
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-4xl font-bold border-b-2 hover:border-b-8 transition-all duration-100 border-black"
          >
            Forun
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Popular;
