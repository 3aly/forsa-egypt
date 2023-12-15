import axios from "axios";
import { apis } from "../envConstants";
// import {IAreaData} from 'src/modal';
// import {IAreaInfosDto} from 'src/dto';
// import {apis} from '@services/envConstants';
// import {httpClient} from '@services/httpClient';

const querySectors = () => {
  return axios.get(`${apis.sectors}`).then((res) => res.data);
};
export default querySectors;
