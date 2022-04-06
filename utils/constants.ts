export const API_BASE_URL = "https://swapi.dev/api/";

export const FILMS_URL = API_BASE_URL + "films/";

export function getPosterURL(filmId: string) {
  return `https://starwars-visualguide.com/assets/img/films/${filmId}.jpg`;
}

// https://pixabay.com/api/?key=&q=Luke%20Skywalker&image_type=photo&pretty=true
