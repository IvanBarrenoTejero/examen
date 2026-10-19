import axios from "axios";
import Global from "../Global";

export default class ServiceSeries {
  async getSeries() {
    let url = Global.urlApiSeries;
    let request = "api/Series";
    let response = await axios.get(url + request);
    return response.data;
  }

  async getSeriesId(idSerie) {
    let url = Global.urlApiSeries;
    let request = "api/Series/" + idSerie;
    let response = await axios.get(url + request);
    return response.data;
  }

  async getPersonajesSerie(idSerie) {
    let url = Global.urlApiSeries;
    let request = "api/Series/PersonajesSerie/" + idSerie;
    let response = await axios.get(url + request);
    return response.data;
  }

  async crearPersonaje(personaje) {
    let url = Global.urlApiSeries;
    let request = "api/Personajes";
    let response = await axios.post(url + request, personaje);
    return response.data;
  }
}
