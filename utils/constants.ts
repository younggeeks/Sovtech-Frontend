export const API_BASE_URL = "https://swapi.dev/api/";

export const FILMS_URL = API_BASE_URL + "films/";
export const VEHICLES_URL = API_BASE_URL + "vehicles/";

export const getFilmSearchUrl = (searchTerm: string) => {
  return FILMS_URL + `?search=${searchTerm}`;
};

export const getFilmUrl = (id: string) => {
  if (!id) {
    return;
  }
  return FILMS_URL + id;
};

export function getPosterURL(url: string, type: "films" | "vehicles") {
  const id = url[url.length - 2];

  switch (type) {
    case "films":
      return `https://starwars-visualguide.com/assets/img/films/${id}.jpg`;
    case "vehicles":
      return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;

    default:
      break;
  }
}
