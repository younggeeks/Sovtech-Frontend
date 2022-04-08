import Image from "next/image";
import Link from "next/link";
import React from "react";

export type Film = {
  id: string;
  posterUrl: string;
  title: string;
  director: string;
  url: string;
  episode_id?: string;
};

const MovieCard: React.FC<{ film: Film }> = ({ film }) => {
  const id = film.url[film.url.length - 2];
  return (
    <Link href={`/films/${id}`}>
      <a className="mb-24">
        <div className="shadow-2xl h-[250px]  relative w-80 mx-auto md:w-[180px]">
          <Image
            className="rounded-lg shadow-red-800 "
            src={film.posterUrl}
            alt={film.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute -bottom-[70px]">
            <h5 className="mt-4 text-sm font-bold">{film.title}</h5>
            <p className="text-sm text-gray-400 mt-1">
              <span>Directed by</span> {film.director}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default MovieCard;
