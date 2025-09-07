export function Header() {
  return (
    <header className="bg-gray-500 shadow-lg max-w mx-auto px-6 py-4 flex items-center border-b-1 border-white">
        

        {/* Links */}
        <nav className="">
            <ul className="flex gap-6 text-white font-medium text-lg">
                <li>
                    <a href="#Turnos" className="hover:text-pink-200 transition-colors">Turnos</a>
                </li>
                <li>
                    <a href="#" className="hover:text-pink-200 transition duration-300">Reseñas</a>
                </li>
                <li>
                    <a href="#" className="hover:text-pink-200   transition duration-300">Nosotros</a>
                </li>
          </ul>
        </nav>
    </header>
  )
}
