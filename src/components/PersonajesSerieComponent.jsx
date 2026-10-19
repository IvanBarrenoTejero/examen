import React, { Component } from "react";
import ServiceSeries from "../services/ServiceSeries";
import { NavLink } from "react-router-dom";

export default class PersonajesSerieComponent extends Component {
  service = new ServiceSeries();

  state = {
    personajes: [],
  };

  loadPersonajes = async (idSerie) => {
    let personajes = await this.service.getPersonajesSerie(idSerie);
    this.setState({
      personajes: personajes,
    });
  };

  componentDidMount = async () => {
    this.loadPersonajes(this.props.idSerie);
  };

  componentDidUpdate = (oldProps) => {
    if (oldProps.idSerie !== this.props.idSerie) {
      this.setState({
        personajes: [],
      });
      this.loadPersonajes(this.props.idSerie);
    }
  };

  render() {
    if (this.state.personajes.length === 0) {
      return (
        <div className="flex justify-center items-center py-12">
          <h2 className="text-xl font-semibold text-gray-600 animate-pulse">
            Cargando personajes...
          </h2>
        </div>
      );
    }

    return (
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-medium text-gray-900 mb-4">
          Personajes de {this.props.idSerie}
        </h1>

        <div className="bg-white border border-gray-200 border-t-4 border-t-blue-600 rounded-t-sm p-4 shadow-sm">
          <NavLink
            to={"/serie/" + this.props.idSerie}
            className="block w-full bg-rose-600 hover:bg-rose-700 text-white text-center py-2 px-4 rounded transition-colors duration-200 font-normal mb-4"
          >
            Volver a serie
          </NavLink>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-blue-500">
                <th className="py-2 text-gray-900 font-bold w-1/2">
                  Personaje
                </th>
                <th className="py-2 text-gray-900 font-bold w-1/2">Imagen</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {this.state.personajes.map((personaje, index) => (
                <tr key={personaje.idPersonaje || personaje.id || index}>
                  <td className="py-4 text-gray-900 font-normal align-top">
                    {personaje.nombre}
                  </td>
                  <td className="py-4 align-top">
                    <img
                      src={personaje.imagen}
                      alt={personaje.nombre}
                      className="w-36 h-36 object-cover rounded-sm shadow-sm"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
