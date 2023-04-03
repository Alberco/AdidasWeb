import { Adidas, Carrito, Favorite, Menu, Search, User } from "..";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-100 hidden lg:block">
        {/* Mini Banner */}
        <div className="flex justify-center items-center text-white font-bold bg-black py-2">
          <p className="text-xs">
            🔽 REALIZA TUS DEVOLUCIONES DE MANERA RAPIDA AQUI 🔽
          </p>
        </div>
        {/* Mini Banner 2 */}
        <ul className="flex text-black text-xs justify-end items-center gap-4 pr-8 py-2">
          <li>ayuda</li>
          <li>cambios y devoluciones</li>
          <li>seguimiento de pedidos</li>
          <li>únete al club</li>
        </ul>
        {/* Banner Principal */}
        <div className="flex justify-between text-black px-10 py-1">
          <ul className="flex py-2 basis-1/4">
            <li className="w-16 h-auto">
              <a href="#" className="bg-green-700 w-full h-full">
                <Adidas />
              </a>
            </li>
          </ul>

          <ul className="flex justify-center items-center gap-6 text-sm font-bold tracking-widest basis-1/2">
            <li>MUJER</li>
            <li>HOMBRE</li>
            <li>NIÑOS</li>
            <li>NOVEDADES</li>
            <li>DEPORTE</li>
            <li>MUNDO ADIDAS</li>
            <li>CYYBER DAYS</li>
          </ul>

          <ul className="flex justify-end gap-3 items-center basis-1/4">
            <li>
              <form action="" className="relative">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Buscar"
                  className="px-2 py-1 relative"
                />
                <span className="absolute right-1 bottom-1">
                  <Search />
                </span>
              </form>
            </li>
            <li>
              <a href="">
                <User />
              </a>
            </li>
            <li>
              <a href="">
                <Favorite />
              </a>
            </li>
            <li>
              <a href="">
                <Carrito />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="bg-gray-100 block lg:hidden">
        {/* Mini Banner */}
        <div className="flex justify-center items-center text-white font-bold bg-black py-2">
          <p className="text-[0.5em] lg:text-xs">
            🔽 REALIZA TUS DEVOLUCIONES DE MANERA RAPIDA AQUI 🔽
          </p>
        </div>
        {/* Banner Principal */}
        <div className="flex justify-between items-center text-black px-4 lg:px-10 py-1">
          <ul className="flex py-2 ">
            <li className="w-16 h-auto">
              <a href="#" className="bg-green-700 w-full h-full">
                <Menu />
              </a>
            </li>
          </ul>
          <ul className="flex py-2">
            <li className="w-10 h-auto">
              <a href="#" className="bg-green-700 w-full h-full">
                <Adidas />
              </a>
            </li>
          </ul>

          <ul className="flex justify-end gap-3 items-center">
            <li>
              <a href="">
                <User />
              </a>
            </li>
            <li>
              <a href="">
                <Favorite />
              </a>
            </li>
            <li>
              <a href="">
                <Carrito />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
