import { queryBrands } from "@services/index";
import { useQuery } from "@tanstack/react-query";

export const useFetchBrands = () => {
  const query = useQuery({
    queryKey: ["useFetchBrands"],
    queryFn: () => queryBrands(),
    enabled: true,
  });

  return query;
};
