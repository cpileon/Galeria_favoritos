import MyContext from "../MyContext";
import { useContext } from "react";

export default function Favoritos() {
  const {fotos, setFotos} = useContext(MyContext)

    return (
      <div>
        <h1>Fotos favoritas</h1>
        <div className="p-3 galeria grid-columns-4">
          {fotos.filter(f => f.liked == true).map((foto)=>(
          <div key= {foto.id} className="galeria fav" style={{backgroundImage: "url(" + foto["src"].medium + ")"}} onClick={()=> toggleHeart(foto.id)}>
              <p className="titulofav">{foto["alt"]}</p>
          </div>
          ))}
        </div>
      </div>
    );
  }