import "./index.css"
import { Tarjeta } from "./Tarjeta.jsx"
import { Header } from "./Header.jsx"
import { Reseñas } from "./Reseñas.jsx" 

export function App () {
    return  (   
        <>     
            <Header />
            <Tarjeta name="Milagros" userName="Milagros Kamila"/>
            <Reseñas />
        </>


    )   
}


