import { queryBrands } from "@services/index";
import { useQuery } from "@tanstack/react-query";

export const useFetchBrands = (rest: any) => {
  const query = useQuery({
    queryKey: ["useFetchBrands"],
    queryFn: () => queryBrands(),
    enabled: true,

    ...rest,
  });

  return query;
};
