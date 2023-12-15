import { querySectors } from "@services/index";
import { useQuery } from "@tanstack/react-query";

export const useFetchSectors = (rest: any) => {
  const query = useQuery({
    queryKey: ["querySectors"],
    queryFn: () => querySectors(),
    enabled: true,

    ...rest,
  });

  return query;
};
