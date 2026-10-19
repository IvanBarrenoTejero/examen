import React, { Component } from "react";
import ServiceSeries from "../services/ServiceSeries";
import { Link, NavLink } from "react-router-dom";

export default class SerieComponent extends Component {
  state = {
    serie: null,
    idSerie: -1,
  };

  service = new ServiceSeries();

  loadSerie = async (idSerie) => {
    let response = await this.service.getSeriesId(idSerie);
    this.setState({
      serie: response,
    });
  };

  componentDidMount = async () => {
    this.loadSerie(this.props.idSerie);
  };

  componentDidUpdate = (oldProps) => {
    if (oldProps.idSerie !== this.props.idSerie) {
      this.setState({
        serie: null,
      });

      this.loadSerie(this.props.idSerie);
    }
  };

  render() {
    if (this.state.serie === null) {
      return (
        <div className="flex justify-center items-center py-12">
          <h2 className="text-xl font-semibold text-gray-600 animate-pulse">
            Cargando serie...
          </h2>
        </div>
      );
    }

    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden border-t-4 border-t-blue-600">
          <div className="p-6">
            <div className="mb-4">
              <img
                src={this.state.serie.imagen}
                alt={this.state.serie.nombre}
                className="w-48 h-56 object-cover rounded-md shadow-sm"
              />
            </div>

            <div className="mb-6 space-y-1">
              <h1 className="text-2xl font-bold text-gray-900">
                {this.state.serie.nombre}
              </h1>
              <p className="text-gray-600 text-sm font-medium">
                IMDB: {this.state.serie.anyo}
              </p>
            </div>

            <NavLink
              to={`/personajes/${this.state.serie.idSerie}`}
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
            >
              Personajes
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
