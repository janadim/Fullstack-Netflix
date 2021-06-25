// login

const getMoviesFromApi = (data) => {
  console.log("Se están pidiendo las películas de la app", data);
  return fetch(
    `http://localhost:4000/movies?gender=${data.gender}&sort=${data.sort}`
  ).then((response) => response.json());
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
