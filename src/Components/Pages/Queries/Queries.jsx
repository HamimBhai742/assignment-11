import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import QueryCard from "./QueryCard";
import { TfiLayoutGrid2, TfiLayoutGrid3 } from "react-icons/tfi";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/usePublic";
import axios from "axios";

const Queries = () => {
  const [layout, setLayout] = useState(false);
  const [selected, setSlected] = useState();
  const axiosPublic = useAxiosPublic();

  const { data: loderQueries = [] } = useQuery({
    queryKey: ["queries"],
    queryFn: async () => {
      const res = await axiosPublic.get("/queries");
      return res.data;
    },
  });

  const handleToggle = () => {
    setLayout(!layout);
    };
    
  const handelSearchBtn = () => {
    const input = document.getElementById("seaarchValue");
    const inputValue = input.value;
    const searchData = queriesData.filter(
      (que) => que.productName === inputValue
    );
    setQueriesData(searchData);
    console.log(input.value);
  };
  const handelShortingBtn = (e) => {
    setSlected(e.target.value);
    // console.log(selected);
    // console.log(myCraft);
  };
  //   console.log(selected);
  if (selected === "Lowest Recommend") {
    const lowest = queriesData.sort((a, b) =>
      a.recommendationCount < b.recommendationCount
        ? -1
        : a.recommendationCount > b.recommendationCount
        ? 1
        : 0
    );
  } else if (selected === "Highest Recommend") {
    const highest = queriesData.sort((a, b) =>
      a.recommendationCount < b.recommendationCount
        ? 1
        : a.recommendationCount > b.recommendationCount
        ? -1
        : 0
    );
  }
  return (
    <div className="md:mx-5 mx-3 mt-28">
      <Helmet>
        <title>Queries</title>
      </Helmet>
      <div className=" flex justify-around mb-5">
        <div className="flex gap-3 items-center">
          <label className="input input-bordered flex items-center gap-2">
            <input
              id="seaarchValue"
              type="text"
              className="grow"
              placeholder="Search"
            />

            <svg
              onClick={handelSearchBtn}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6 opacity-70 hover:cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            {/* <input xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70 hover:cursor-pointer"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg> */}
          </label>
          <select
            value={selected}
            onChange={handelShortingBtn}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Sort By
            </option>
            <option>Highest Recommend</option>
            <option>Lowest Recommend</option>
          </select>
        </div>

        <div className="lg:flex gap-3 items-center hidden">
          <h4 className="font-lato font-semibold">Change Layout</h4>
          {/* <input type="checkbox"  className="toggle theme-controller" /> */}
          <label className="flex cursor-pointer gap-3 items-center">
            <span className="label-text text-xl">
              <TfiLayoutGrid3></TfiLayoutGrid3>
            </span>
            <input
              onChange={handleToggle}
              type="checkbox"
              value=""
              className="toggle theme-controller"
            />
            <span className="label-text text-xl">
              <TfiLayoutGrid2></TfiLayoutGrid2>
            </span>
          </label>
        </div>
      </div>
      <div
        className={
          layout
            ? "grid grid-cols-2 gap-8"
            : "grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1"
        }
      >
        {loderQueries?.map((query, idx) => (
          <QueryCard key={idx} query={query}></QueryCard>
        ))}
      </div>
    </div>
  );
};

export default Queries;
