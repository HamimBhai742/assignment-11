import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./usePublic";

const useMyQueries = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: myQueriesData = [], refetch } = useQuery({
    queryKey: ["myQueriesData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/my-queries?email=${user?.email}`,{withCredentials:true});
      return res.data;
    },
  });
  return [myQueriesData, refetch];
};

export default useMyQueries;
