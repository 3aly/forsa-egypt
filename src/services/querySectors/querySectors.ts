import { apis } from "@services/envConstants";
import axios from "axios";

const querySectors = async () => {
  const response = await axios.get(`${apis.sectors}`);
  return response.data;
};
export default querySectors;
