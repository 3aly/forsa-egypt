import { apis } from "@services/envConstants";
import axios from "axios";

const querySectors = () => {
  return axios.get(`${apis.sectors}`).then((res) => res.data);
};
export default querySectors;
