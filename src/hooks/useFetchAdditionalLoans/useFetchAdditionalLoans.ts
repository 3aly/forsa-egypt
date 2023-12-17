import { queryAdditionalLoans } from "@services/index";
import { useQuery } from "@tanstack/react-query";

export const useFetchAdditionalLoans = (rest: any) => {
  const query = useQuery({
    queryKey: ["useFetchAdditionalLoans"],
    queryFn: () => queryAdditionalLoans(),
    enabled: true,

    ...rest,
  });

  return query;
};
