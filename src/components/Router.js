import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MenuComponent from "./MenuComponent";
import HomeComponent from "./HomeComponent";
import CrearPersonajeComponent from "./CrearPersonajeComponent";
import SerieComponent from "./SerieComponent";
import ModificarPersonajeComponent from "./ModificarPersonajeComponent";
import PersonajesSerieComponent from "./PersonajesSerieComponent";

export default class Router extends Component {
  render() {
    function SeriesElement() {
      let { idSerie } = useParams();
      return <SerieComponent idSerie={idSerie} />;
    }

    function PersonajesElement() {
      let { idSerie } = useParams();
      return <PersonajesSerieComponent idSerie={idSerie} />;
    }
    return (
      <BrowserRouter>
        <MenuComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/crearpersonaje" element={<CrearPersonajeComponent />} />
          <Route path="/serie/:idSerie" element={<SeriesElement />} />
          <Route
            path="/modificarpersonaje"
            element={<ModificarPersonajeComponent />}
          />
          <Route path="/personajes/:idSerie" element={<PersonajesElement />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
