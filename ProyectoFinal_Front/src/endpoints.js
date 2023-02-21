import axios from "axios";

export default {
  //aqui se llamaria a la BD
  async getDefaultEndpoint(endpoint) {
    const info = await axios.get(endpoint);
    return info.data;
  },
  async getSerieList() {
    const list = await axios.get(`http://localhost:5000/series`);
    return list.data;
  },
  async getSerie(id) {
    const list = await axios.get(`http://localhost:5000/series/${id}`);
    return list.data;
  },
  async getCapList(id) {
    const list = await axios.get(
      `http://localhost:5000/series/${id}/capitulos`
    );
    return list.data;
  },
  async getCapitulo(id) {
    const list = await axios.get(`http://localhost:5000/capitulo/${id}`);
    return list.data;
  },
};
