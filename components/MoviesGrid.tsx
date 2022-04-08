import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  deleteItemFromLocalstorage,
  getItemsFromLocalstorage,
} from "../utils/localstorage";
import MovieCard, { Film } from "./MovieCard";

const MoviesGrid: React.FC<{
  films: Film[];
}> = ({ films }) => {
  const [itemChanged, setItemChanged] = useState(false);
  const [updatedSearches, setUpdatedSearches] = useState([]);

  useEffect(() => {
    const searches = getItemsFromLocalstorage();
    setUpdatedSearches(searches);
  }, [itemChanged]);

  return (
    <div className="bg-white rounded-lg   mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 grid-flow-row-dense auto-cols-max">
      <div className="col-span-1 md:col-span-2 lg:col-span-4">
        <div className="py-4 mb-3 ml-[50px]">
          <h5 className=" gradient-header">Featured Films</h5>
          <p className="text-gray-600">People's choice</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {films.map((film: Film) => (
            <MovieCard film={film} key={film.episode_id} />
          ))}
        </div>
      </div>
      <div className="hidden md:block lg:block col-span-1 md:col-span-2 lg:md-col-span-2 mx-10 md:sticky">
        <div className="py-4 mb-3">
          <h5 className=" gradient-header ">Recent Searches</h5>
          <p className="text-gray-600">May the force find you</p>
        </div>
        {updatedSearches.length > 0 ? (
          updatedSearches.map((search: { title: string; id: string }) => (
            <div
              className="  bg-transparent hover:border-l-[10px] pl-2  transition-all  duration-400 rounded-l flex justify-between"
              key={search.title}
            >
              <Link href={`/films/${search.id}`} key={search.id}>
                <a>
                  <div className=" bg-white text-black  text-lg font-light text-start py-2">
                    {search.title}
                  </div>
                </a>
              </Link>
              <button
                onClick={() => {
                  setItemChanged(!itemChanged);
                  deleteItemFromLocalstorage(search.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))
        ) : (
          <div className="text-lg">No searches yet...</div>
        )}
      </div>
    </div>
  );
};

export default MoviesGrid;
