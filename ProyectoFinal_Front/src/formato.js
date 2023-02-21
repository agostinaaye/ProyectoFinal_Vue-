//formatear texto: primera letra de cada palabra en mayuscula
export default {
  capitalize(text) {
    if (text !== undefined) {
      let palabras = text.split(" "); //separa en un array cada palabra
      palabras = palabras.map(
        (palabra) => (palabra = palabra[0].toUpperCase() + palabra.slice(1))
      );
      return palabras.join(" ");
    }
  },
  capitulosOrdenados(vector) {
    return vector.sort((cap1, cap2) => (cap1.numero < cap2.numero ? -1 : 0));
  },
};
