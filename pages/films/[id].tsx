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
        <div className="mt-20 py-0 px-0 md:py-4 lg:px-7">
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
        <div className="max-w-4xl mx-auto bg-white md:bg-purple-50 lg:bg-purple-50 rounded-lg shadow-xl oveflow-hidden  mt-5 md:mt-20 lg:mt-20">
          <div className="flex overflow-hidden flex-col md:flex-row lg:flex-row mx-[30px] md:mx-0 lg:mx-0">
            <img
              src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
              className=" h-80 rounded-l-lg"
            />
            <div className="py-0 px-0 md:py-4 lg:px-7 h-80 space-y-1 mt-6 md:mt-0 lg:mt-0">
              <h4 className="font-medium text-2xl">
                Episode {data.episode_id} : {data.title}
              </h4>
              <p className="text-md">
                <span className="font-bold">Director:</span>
                <span className="text-gray-700"> {data.director}</span>
              </p>
              <p className="text-md">
                <span className="font-bold">Producer:</span>{" "}
                <span className="text-gray-700">{data.producer}</span>
              </p>
              <p className="text-md">
                <span className="font-bold">Opening Crawl:</span>{" "}
              </p>
              <p className=" text-ellipsis  h-56 text-md text-gray-700">
                {data.opening_crawl}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default FilmDetails;
