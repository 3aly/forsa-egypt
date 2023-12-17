import { queryOffers } from "@services/index";
import { useQuery } from "@tanstack/react-query";

export const useFetchOffers = () => {
  const query = useQuery({
    queryKey: ["useFetchOffers"],
    queryFn: () => queryOffers(),
    enabled: true,
  });

  return query;
};
