import { ArrowD } from "..";

function Footer() {
  return (
    <footer className="">
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 bg-[#EDE734] w-full py-10">
        <p className="font-bold text-3xl px-10 lg:px-0">
          UNITE AL CLUB Y CONSEGUÍ UN 15% DE DESCUENTO
        </p>
        <button className="group z-50 bg-black text-white font-bold px-3 py-2 flex items-center gap-2 hover:text-gray-300 duration-500 transition-colors">
          Registrate Gratis
          <span className="group-hover:text-gray-400">
            <ArrowD
              styleSvg={"group-hover:fill-gray-400 fill-white"}
              color={"white"}
            />
          </span>
        </button>
      </div>
      <ul className="flex flex-wrap text-xs lg:text-sm lg:flex-nowrap justify-around lg:justify-center gap-10  container mx-auto py-4">
        <li>
          <h5 className="text-lg font-bold pb-1">PRODUCTOS</h5>
          <ul className="flex flex-col gap-1 text-sm">
            <li>Calzado</li>
            <li>Zapatillas</li>
            <li>Ropa</li>
            <li>Accesorios</li>
            <li>Chimpunes</li>
            <li>Cortavientos</li>
            <li>Buzos</li>
            <li className="text-white"> - </li>
            <li>Novedades</li>
            <li>Cyber Wow</li>
            <li>Cyber Monday</li>
            <li>Cyber Days</li>
            <li>Black Fridat</li>
            <li>Outlet</li>
            <li className="text-white"> - </li>
            <li>adiClub</li>
            <li>adidas app</li>
            <li>adidas Runners</li>
          </ul>
        </li>
        <li>
          <h5 className="text-lg font-bold pb-1">DEPORTES</h5>
          <ul className="flex flex-col gap-1 text-sm pb-3">
            <li>Sporting Cristal</li>
            <li>Fútbol</li>
            <li>Running</li>
            <li>Básquet</li>
            <li>Training</li>
          </ul>
          <h5 className="text-lg font-bold pb-1">COLECCIONES</h5>
          <ul className="flex flex-col gap-1 text-sm">
            <li>Ultraboost</li>
            <li>Stan Smith</li>
            <li>Originals</li>
            <li>Forum</li>
            <li>adicolor</li>
            <li>Superstar</li>
            <li>Falcon</li>
          </ul>
        </li>
        <li className="hidden lg:block">
          <h5 className="text-lg font-bold pb-1">ASISTENCIA</h5>
          <ul className="flex flex-col gap-1 text-sm">
            <li>Dudas Frecuentes</li>
            <li>Realizar Pedidos</li>
            <li>Productos adidas</li>
            <li>Pago</li>
            <li>Envío</li>
            <li>Solicitar mi Devolución</li>
            <li>Devoluciones</li>
            <li>Cambio en Tiendas</li>
            <li>Como Usar Nuestro Sitio</li>
            <li>Como Saber la Talla de Bra</li>
            <li>Guia de Tallas</li>
            <li>Mapa del Sitio</li>
          </ul>
        </li>
        <li className="hidden lg:block">
          <h5 className="text-lg font-bold pb-1">INFORMACIÓN DE LA EMPRESA</h5>
          <ul className="flex flex-col gap-1 text-sm pb-3">
            <li>Acerca de adidas</li>
            <li>Trabaja en Nuestro Equipo</li>
            <li>Prensa</li>
          </ul>
          <h5 className="text-lg font-bold pb-1">TIENDAS</h5>
          <ul className="flex flex-col gap-1 text-sm">
            <li>Buscador de Tiendas</li>
            <li></li>
            <li></li>
          </ul>
        </li>
        <li className="hidden lg:block">
          <h5 className="text-lg font-bold pb-1">SÍGUENOS</h5>
          <ul className="flex flex-col gap-1 text-sm">
            <li>f</li>
            <li>i</li>
            <li>t</li>
            <li>p</li>
            <li>tk</li>
            <li>y</li>
          </ul>
        </li>
      </ul>
      <div className="bg-[#282C31]">
        <ul className="flex flex-wrap gap-10 lg:gap-0 lg:flex-nowrap text-white text-sm py-4 justify-center items-center">
          <li className="border-r-2 border-transparent lg:border-white/50 px-0 lg:px-3 text-center">
            Configuración de las cookies
          </li>
          <li className="border-r-2 border-transparent lg:border-white/50 px-0 lg:px-3 text-center">
            Nuestros Datos
          </li>
          <li className="border-r-2 border-transparent lg:border-white/50 px-0 lg:px-3 text-center">
            Términos y Condiciones
          </li>
          <li className="border-r-2 border-transparent lg:border-white/50 px-0 lg:px-3 text-center">
            Política de Privacidad
          </li>
          <li className="border-r-2 border-transparent lg:border-white/50 px-0 lg:px-3 text-center">
            Seleccionar País
          </li>
          <li className="border-transparent lg:border-white/50 px-0 lg:px-3">
            Uso del Sitio
          </li>
        </ul>
        <div className="py-4">
          <p className="text-gray-200 text-xs flex justify-center items-center text-center">
            © 2023 adidas Perú SAC, RUC 20347100316. Av. 28 de Julio 1011,
            interior 1001, Miraflores, Código Postal Lima 18
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
