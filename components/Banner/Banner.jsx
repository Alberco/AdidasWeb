import cristal from "../../public/cristal.webp";
import boca from "../../public/boca.webp";
import arsenal from "../../public/arsenal.webp";
import madrid from "../../public/madrid.webp";
import unite from "../../public/unite.webp";
import juventus from "../../public/juventus.webp";
import bayer from "../../public/bayer.webp";
import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <article className="flex flex-col justify-center items-center gap-3 py-8 my-4 bg-gray-100">
      <p className="text-xl ">Encuentra a tu equipo</p>
      <ul className="flex px-10 lg:px-0 gap-1 lg:gap-8">
        <li>
          <Link href="/">
            <Image
              src={cristal}
              width={65}
              height={50}
              alt="escoge tu equipo"
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={boca} width={65} height={50} alt="escoge tu equipo" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src={arsenal}
              width={65}
              height={50}
              alt="escoge tu equipo"
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={madrid} width={65} height={50} alt="escoge tu equipo" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={unite} width={65} height={50} alt="escoge tu equipo" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src={juventus}
              width={65}
              height={50}
              alt="escoge tu equipo"
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={bayer} width={65} height={50} alt="escoge tu equipo" />
          </Link>
        </li>
      </ul>
    </article>
  );
}

export default Banner;
