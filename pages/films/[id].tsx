import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { Nav } from "../../components/Nav";
import { getFilmUrl } from "../../utils/constants";
import { fetcher } from "../../utils/fetcher";

const FilmDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const url = getFilmUrl(id as string);

  if (url) {
    const { data, error } = useSWR(url, fetcher);

    if (error) return <div>failed to load</div>;

    if (!data) return <p>Loading</p>;

    return (
      <div className="container mx-auto">
        <Nav />
        <div className="mt-20">
          <Link href="/">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-800 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </div>
        <div className="max-w-4xl mx-auto bg-purple-50 rounded-lg shadow-xl oveflow-hidden  mt-20">
          <div className="flex overflow-hidden">
            <img
              src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
              className=" h-80 rounded-l-lg"
            />
            <div className="py-4 px-7 h-80 space-y-1">
              <h4 className="font-medium text-2xl">
                Episode {data.episode_id} : {data.title}
              </h4>
              <p className="text-md">
                <span className="font-bold">Director:</span> {data.director}
              </p>
              <p className="text-md">
                <span className="font-bold">Producer:</span> {data.producer}
              </p>
              <p className="text-md">
                <span className="font-bold">Opening Crawl:</span>{" "}
              </p>
              <p className=" text-ellipsis  h-56 text-md ">
                {data.opening_crawl}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Something went wrong</p>;
  }
};

export default FilmDetails;
