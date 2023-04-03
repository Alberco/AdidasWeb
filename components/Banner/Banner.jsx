import cristal from "../../public/cristal.webp";
import boca from "../../public/boca.webp";
import arsenal from "../../public/arsenal.webp";
import madrid from "../../public/madrid.webp";
import unite from "../../public/unite.webp";
import juventus from "../../public/juventus.webp";
import bayer from "../../public/bayer.webp";
import Image from "next/image";

function Banner() {
  return (
    <article className="flex flex-col justify-center items-center gap-3 py-8 my-4 bg-gray-100">
      <p className="text-xl ">Encuentra a tu equipo</p>
      <ul className="flex px-10 lg:px-0 gap-1 lg:gap-8">
        <li>
          <Image src={cristal} width={65} height={50} alt="escoge tu equipo" />
        </li>
        <li>
          <Image src={boca} width={65} height={50} alt="escoge tu equipo" />
        </li>
        <li>
          <Image src={arsenal} width={65} height={50} alt="escoge tu equipo" />
        </li>
        <li>
          <Image src={madrid} width={65} height={50} alt="escoge tu equipo" />
        </li>
        <li>
          <Image src={unite} width={65} height={50} alt="escoge tu equipo" />
        </li>
        <li>
          <Image src={juventus} width={65} height={50} alt="escoge tu equipo" />
        </li>
        <li>
          <Image src={bayer} width={65} height={50} alt="escoge tu equipo" />
        </li>
      </ul>
    </article>
  );
}

export default Banner;
