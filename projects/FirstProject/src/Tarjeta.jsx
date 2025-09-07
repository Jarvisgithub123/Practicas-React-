

export function Tarjeta ({name, userName}) {

    
        return (
        <article id="Turnos" className="flex items-center gap-4 border border-gray-200 p-4 rounded-3xl max-w-dvh mx-auto mt-6 shadow-lg ">

            <header className="flex items-center gap-4 flex-1">
                
                <img className="border border-gray-300 rounded-full w-16 h-16 object-cover" 
                src={`https://unavatar.io/${userName}`}  //En JSX, para usar template strings necesitas usar backticks (`) en lugar de comillas.
                alt="Avatar de milagros" />
                
                <div className="flex flex-col text-amber-50">
                    <strong>{name}</strong>
                    <span className="Tarjeta-span">Estilista de pestaña</span>
                
                </div>
            
            </header>
            
            <aside>
                <button className="cursor-crosshair rounded-2xl border border-white px-4 py-2 text-white font-medium hover:bg-white hover:text-pink-500 transition duration-300">
                    Reservar turno
                </button>
            
            </aside>
        
        </article>
    )
}

