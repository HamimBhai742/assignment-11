import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "./usePublic";
import useAuth from "./useAuth";

const useRecoForMe = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: recoForMe = [] } = useQuery({
    queryKey: ["recommendation"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/recommendation?email=${user?.email}`);
      return res.data;
    },
  });
  return [recoForMe];
};

export default useRecoForMe;
