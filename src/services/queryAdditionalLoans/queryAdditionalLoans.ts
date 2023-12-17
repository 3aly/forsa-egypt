import { apis } from "@services/envConstants";
import axios from "axios";

const queryAdditionalLoans = async () => {
  const response = await axios.get(`${apis.loansinfo}`);
  return response.data;
};
export default queryAdditionalLoans;
