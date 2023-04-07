import Image from "next/image";
import tendencia4 from "../../public/tendicia4.webp";
function Tendencias() {
  return (
    <section className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <h3 className="text-4xl font-bold py-4">TENDENCIAS</h3>
      <div className="flex flex-wrap xl:flex-nowrap gap-4 w-full h-auto">
        <article className="w-full h-full">
          <video loop autoPlay muted className="w-full h-full object-cover">
            <source src="tendencia1.mp4" type="video/mp4" />
          </video>
          <header className="py-2 h-20">
            <p className="text-lg font-semibold">
              CAMISETAS ALTERNATIVAS PARA LA COPA
            </p>
            <p className="text-lg font-semibold">MUNDIAL FEMENINA</p>
          </header>
          <footer className="py-2 h-10">
            <a className="border-b-2 border-black font-semibold">
              COMPRAR AHORA
            </a>
          </footer>
        </article>
        <article className="w-full h-full">
          <video loop autoPlay muted className="w-full h-full object-cover">
            <source src="tendencia2.mp4" type="video/mp4" />
          </video>
          <header className="py-2 h-20">
            <p className="text-lg font-semibold">
              Ultraboost Light. Nuestra Ultraboost más ligera.
            </p>
            <p className="text-xs">Energía épica en cada pisada.</p>
          </header>
          <footer className="py-2 h-10">
            <a className="border-b-2 border-black font-semibold">
              COMPRAR AHORA
            </a>
          </footer>
        </article>
        <article className="w-full h-full">
          <video loop autoPlay muted className="w-full h-full object-cover">
            <source src="tendencia3.mp4" type="video/mp4" />
          </video>
          <header className="py-2 h-20">
            <p className="text-lg font-semibold">Pasión por la blanquirroja</p>
            <p className="text-xs">
              Descubre el nuevo kit de entrenamiento de la Selección Peruana
              2023. Lleva los coleres del Perú dentro y fuera de la cancha.
            </p>
          </header>
          <footer className="py-2 h-10">
            <a className="border-b-2 border-black font-semibold">
              COMPRAR AHORA
            </a>
          </footer>
        </article>
        <article className="w-full h-full">
          <Image
            src={tendencia4}
            alt="tendencia4"
            className="w-full h-full object-cover"
          />
          <header className="py-2 h-20">
            <p className="text-lg font-semibold">adidas Sportswear</p>
            <p className="text-xs">
              Ropa deportiva icónica reimaginada para cualquier ocasión. Dentro
              y fuera de la cancha.
            </p>
          </header>
          <footer className="py-2 h-10">
            <a className="border-b-2 border-black font-semibold">
              COMPRAR AHORA
            </a>
          </footer>
        </article>
      </div>
    </section>
  );
}

export default Tendencias;
