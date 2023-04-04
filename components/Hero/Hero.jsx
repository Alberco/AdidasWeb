import Image from "next/image";
import HeroImg from "../../public/hero.jpg";
import logov2 from "../../public/logov2.webp";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative w-full h-auto">
      <div className="relative">
        <Image
          src={HeroImg}
          alt="hero adidas"
          width="100%"
          height="100%"
          className=""
          placeholder="blur"
          priority
        />
        <div className="absolute inset-y-0 left-4 lg:left-40 flex flex-col justify-center">
          <p className="text-md lg:text-4xl font-bold text-white">
            ¡LOS DESCUENTOS QUE
            <span className="block">ESPERABAS!</span>
          </p>
          <p className="text-[0.6em] lg:text-xl text-white py-2 w-40 lg:w-96">
            Hasta 40% OFF en el catálogo seleccionado, si eres miembro adiClub
            aprovecha envío gratis.
          </p>
          <ul className="text-white text-[0.6em] lg:text-lg font-bold flex flex-col gap-1 lg:gap-4">
            <li>
              <Link href="/" className="border-b-2 ">
                HOMBRE
              </Link>
            </li>
            <li>
              <Link href="/" className="border-b-2 ">
                MUJER
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-auto relative">
        <div className=" absolute inset-y-2 left-0 px-2 lg:px-0 lg:left-40 flex flex-col justify-center text-white">
          <Image src={logov2} alt="logov2" width={300} height={400} />
          <p className="text-xl lg:text-4xl font-bold">BATIENDO RECORDS</p>
          <p className="text-sm lg:text-xl my-2 w-60">
            Diseñadas para romper récords. Adizero.Creadas para ganar.
          </p>
          <button className="relative flex justify-center p-1 lg:p-3 bg-white text-sm lg:text-xl text-black font-bold my-2 w-36 lg:w-60">
            COMPRAR AHORA
          </button>
        </div>
        <video
          loop
          autoPlay
          muted
          className="min-w-full h-[300px] lg:h-[800px] object-cover"
        >
          <source src="hero.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Hero;
