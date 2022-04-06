import Image from "next/image";
import React from "react";

const MovieCard: React.FC<{ film: any }> = ({ film }) => {
  return (
    <div className="max-w-xs  rounded-xl border border-gray-200 shadow-md relative h-72 overflow-hidden">
      <Image
        className="rounded-t-lg absolute inset-0 object-cover"
        src={film.posterUrl}
        alt={film.title}
        layout="fill"
      />
      <div className="px-5 py-3 backdrop-filter backdrop-blur-md bg-opacity-20 bg-white/70  absolute bottom-0 right-0 left-0  ">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
            {film.title}
          </h5>
        </a>

        <a
          href="#"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Read more
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
