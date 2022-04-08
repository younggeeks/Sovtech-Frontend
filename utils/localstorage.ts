import { Film } from "../components/MovieCard";

export const handleLocalstorage: (title: string, id?: string) => void = (
  title,
  id
) => {
  if (!id) {
    return;
  }
  const searches = localStorage.getItem("searches");

  if (!searches) {
    localStorage.setItem("searches", JSON.stringify([{ title, id }]));
  } else {
    const searchesArray = JSON.parse(searches);
    const item = searchesArray.find((item: Film) => item.id === id);
    if (!item) {
      searchesArray.push({ title, id });
      localStorage.setItem("searches", JSON.stringify(searchesArray));
      return;
    }
  }
};

export const getItemsFromLocalstorage = () => {
  const searches = localStorage.getItem("searches");
  if (!searches) {
    return [];
  }
  const searchesArray = JSON.parse(searches);
  return searchesArray;
};

export const deleteItemFromLocalstorage = (id: string) => {
  const searches = localStorage.getItem("searches");
  if (!searches) {
    return;
  }
  const searchesArray = JSON.parse(searches);
  const newSearchesArray = searchesArray.filter((item: Film) => item.id !== id);
  localStorage.setItem("searches", JSON.stringify(newSearchesArray));
};
