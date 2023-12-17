import { querySectors } from "@services/index";
import { useQuery } from "@tanstack/react-query";

export const useFetchSectors = () => {
  const query = useQuery({
    queryKey: ["useFetchSectors"],
    queryFn: () => querySectors(),
    enabled: true,
  });

  return query;
};
