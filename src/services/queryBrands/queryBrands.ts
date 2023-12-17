import { apis } from "@services/envConstants";
import axios from "axios";

const queryBrands = async () => {
  const response = await axios.get(`${apis.brands}`);
  return response.data;
};
export default queryBrands;
