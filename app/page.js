import Image from "next/image";
import { Inter } from "next/font/google";
import {
  About,
  Banner,
  Hero,
  Novedades,
  Popular,
  Prime,
  Tendencias,
} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Banner />
      <Novedades />
      <Prime />
      <Tendencias />
      <About />
      <Popular />
    </div>
  );
}
