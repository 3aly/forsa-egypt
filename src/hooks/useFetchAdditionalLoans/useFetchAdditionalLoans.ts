import { queryAdditionalLoans } from "@services/index";
import { useQuery } from "@tanstack/react-query";

export const useFetchAdditionalLoans = () => {
  const query = useQuery({
    queryKey: ["useFetchAdditionalLoans"],
    queryFn: () => queryAdditionalLoans(),
    enabled: true,
  });

  return query;
};
