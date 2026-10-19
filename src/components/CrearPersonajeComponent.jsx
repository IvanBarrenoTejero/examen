import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import ServiceSeries from "../services/ServiceSeries";

export default class CrearPersonajeComponent extends Component {
  service = new ServiceSeries();

  cajaNombre = React.createRef();
  cajaImagen = React.createRef();
  cajaSerie = React.createRef();

  state = {
    status: false,
    series: [],
    idSerieRedirect: -1,
  };

  loadSeries = async () => {
    let respuesta = await this.service.getSeries();
    this.setState({
      series: Array.isArray(respuesta) ? respuesta : respuesta.data || [],
    });
  };

  componentDidMount = async () => {
    await this.loadSeries();
  };

  crearPersonaje = async (e) => {
    e.preventDefault();

    let idSerieVal = parseInt(this.cajaSerie.current.value);

    let nuevoPersonaje = {
      idPersonaje: 0,
      nombre: this.cajaNombre.current.value,
      imagen: this.cajaImagen.current.value,
      idSerie: idSerieVal,
    };

    await this.service.crearPersonaje(nuevoPersonaje);

    this.setState({
      idSerieRedirect: idSerieVal,
      status: true,
    });
  };

  render() {
    if (this.state.status === true) {
      return <Navigate to={"/personajes/" + this.state.idSerieRedirect} />;
    }

    return (
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-normal text-gray-900 mb-2 border-b-2 border-blue-600 pb-2">
          Crear personaje
        </h1>

        <form onSubmit={this.crearPersonaje} className="w-full mt-4 space-y-4">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-normal text-gray-800 mb-1"
            >
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              ref={this.cajaNombre}
              required
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="imagen"
              className="block text-sm font-normal text-gray-800 mb-1"
            >
              Imagen
            </label>
            <input
              id="imagen"
              type="url"
              ref={this.cajaImagen}
              required
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="serie"
              className="block text-sm font-normal text-gray-800 mb-1"
            >
              Serie
            </label>
            <select
              id="serie"
              ref={this.cajaSerie}
              className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {this.state.series.map((serie) => (
                <option
                  key={serie.idSerie || serie.id}
                  value={serie.idSerie || serie.id}
                >
                  {serie.nombre}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-[#2a8555] hover:bg-[#226e46] text-white py-2.5 text-sm font-medium transition duration-200"
          >
            Crear personaje
          </button>
        </form>
      </div>
    );
  }
}
