import { queryOffers } from "@services/index";
import { useQuery } from "@tanstack/react-query";

export const useFetchOffers = (rest: any) => {
  const query = useQuery({
    queryKey: ["useFetchOffers"],
    queryFn: () => queryOffers(),
    enabled: true,

    ...rest,
  });

  return query;
};
