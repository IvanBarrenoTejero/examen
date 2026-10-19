import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import ServiceSeries from "../services/ServiceSeries";

export default class MenuComponent extends Component {
  service = new ServiceSeries();

  state = {
    series: [],
    mostrarSeries: false,
  };

  loadSeries = async () => {
    let series = await this.service.getSeries();
    this.setState({
      series: series,
    });
  };

  componentDidMount = async () => {
    await this.loadSeries();
  };

  render() {
    return (
      <nav className="w-full bg-blue-600 text-white rounded-t-lg">
        <div className="flex items-center px-4 py-2 gap-4">
          {/* Logo */}
          <NavLink to="/" className="shrink-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png"
              alt="Stranger Things"
              className="w-16 h-14 object-contain"
            />
          </NavLink>

          {/* Enlaces */}
          <NavLink to="/" className="text-white hover:text-gray-200">
            Home
          </NavLink>

          <NavLink
            to="/crearpersonaje"
            className="text-blue-200 hover:text-white"
          >
            Nuevo personaje
          </NavLink>

          <Link to="/modificar" className="text-blue-200 hover:text-white">
            Modificar personaje
          </Link>

          {/* Menú desplegable */}
          <div className="relative">
            <button
              onClick={() =>
                this.setState({
                  mostrarSeries: !this.state.mostrarSeries,
                })
              }
              className="flex items-center gap-1 text-blue-200 hover:text-white"
            >
              Series
              <span className="text-xs">▼</span>
            </button>
            {this.state.mostrarSeries && (
              <div className="absolute left-0 mt-2 w-48 bg-blue-700 rounded-md shadow-lg z-10 overflow-hidden">
                {this.state.series.map((serie, index) => (
                  <NavLink
                    key={index}
                    to={"/serie/" + serie.idSerie}
                    onClick={() => this.setState({ mostrarSeries: false })}
                    className="block px-4 py-2 text-sm text-blue-100 hover:bg-blue-500 hover:text-white"
                  >
                    {serie.nombre}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}
