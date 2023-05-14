import "./styles.css";
import MyContext from "./MyContext";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import dataJson from "../src/fotos.json"

export default function App() {
  
  const photos = dataJson.photos
  const newData = photos.map(foto => ({...foto, liked:false}))
  console.log(newData)
  const [fotos, setFotos] = useState(newData);
  const globalData = {fotos, setFotos}

  const endpoint = "/fotos.json";
  console.log(fotos)

  return (
    <div className="App">
      <MyContext.Provider value={globalData}>

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>

    </div>
  );
}