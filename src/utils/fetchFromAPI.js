import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": 'a90003c7eamshee4496b32059196p1d33fdjsnb5709b147265',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
 return data;
};

//1ba7fc2be0msh06bafebfc9b8213p1f9f76jsn615e605deb5b