import { apis } from "@services/envConstants";
import axios from "axios";

const queryOffers = async () => {
  const response = await axios.get(`${apis.offers}`);
  return response.data;
};
export default queryOffers;
