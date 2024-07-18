import axios from "axios";

const fetchPhotos = async (query) => {
  const accessKey = "Ya5bTR-zqAPLSWCN6nLzgn1wPGjYhCAn38BH_Ynwe9s";
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query: query },
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  });
  return response.data;
};

export default fetchPhotos;
