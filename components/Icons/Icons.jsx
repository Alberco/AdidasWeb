export function Adidas() {
  return (
    <svg viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
        fill="black"
      ></path>
    </svg>
  );
}

export function Carrito() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-shopping-cart"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="17" cy="19" r="2" />
      <path d="M17 17h-11v-14h-2" />
      <path d="M6 5l14 1l-1 7h-13" />
    </svg>
  );
}

export function Favorite({ width = null, height = null, stilo = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={stilo === null ? "" : stilo}
      width={width === null ? "32" : width}
      height={height === null ? "32" : height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>
  );
}

export function User() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-user-circle"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
    </svg>
  );
}

export function Search() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-search"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="10" cy="10" r="7" />
      <line x1="21" y1="21" x2="15" y2="15" />
    </svg>
  );
}

export function ArrowD({ color, styleSvg }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styleSvg}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="15" y1="16" x2="19" y2="12" />
      <line x1="15" y1="8" x2="19" y2="12" />
    </svg>
  );
}

export function ChevronL({ width = null, height = null, stilo = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={stilo}
      width={width === null ? "32" : width}
      height={height === null ? "32" : height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="15 6 9 12 15 18" />
    </svg>
  );
}

export function ChevronD({ width = null, height = null, stilo = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={stilo}
      width={width === null ? "32" : width}
      height={height === null ? "32" : height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

export function Menu({ width = null, height = null, stilo = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={stilo}
      width={width === null ? "32" : width}
      height={height === null ? "32" : height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

export function Facebook({ width = null, height = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-facebook"
      width={width === null ? "32" : width}
      height={height === null ? "32" : height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
    </svg>
  );
}

export function Instagram({ width = null, height = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-instagram"
      width={width === null ? "32" : width}
      height={height === null ? "32" : height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3" />
      <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
    </svg>
  );
}

export function Telegram({ width = null, height = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-telegram"
      width={width === null ? "32" : width}
      height={height === null ? "32" : height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
    </svg>
  );
}
export function Pinterest({ width = null, height = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-pinterest"
      width={width === null ? "32" : width}
      height={height === null ? "32" : height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="8" y1="20" x2="12" y2="11" />
      <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}
export function Youtube({ width = null, height = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-youtube"
      width={width === null ? "32" : width}
      height={height === null ? "32" : height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="3" y="5" width="18" height="14" rx="4" />
      <path d="M10 9l5 3l-5 3z" />
    </svg>
  );
}
