import "../assets/css/galeria.css";
import Heart from "./Heart";
import MyContext from "../MyContext";
import { useContext } from "react";

export default function Home() {

  const {fotos, setFotos} = useContext(MyContext)

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto)=>(
        <div key= {foto.id} className="galeria foto" style={{backgroundImage: "url(" + foto["src"].medium + ")"}}>
            <Heart filled={foto.liked}/>
            <p className="titulo">{foto["alt"]}</p>
        </div>
      ))}
    </div>
  );
}
