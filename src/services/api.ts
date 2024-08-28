import axios from "axios";
import { Response } from "../App/App.types";

const fetchPhotos = async (
  query: string,
  page = 1,
  per_page = 5
): Promise<Response> => {
  const accessKey = "Ya5bTR-zqAPLSWCN6nLzgn1wPGjYhCAn38BH_Ynwe9s";
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: query,
      page,
      per_page,
    },
  });
  return response.data;
};

export default fetchPhotos;
