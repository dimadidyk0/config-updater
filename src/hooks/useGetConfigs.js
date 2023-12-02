import { useQuery } from "@tanstack/react-query";
import { API } from "../constants/api";

export const useGetConfigs = () => {
  return useQuery({
    queryKey: API.CONFIGS,
    queryFn: () => fetch(API.CONFIGS).then((r) => r.json()),
  });
};
