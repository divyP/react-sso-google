import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;
let wikiUrl = "https://en.wikipedia.org/w/api.php";

export const loginWithGoogle = (data) =>
  axios({
    method: "POST",
    url: `${baseUrl}api/login/google`,
    data,
  })
    .then((response) => {
      console.log({ response });
      return response?.data;
    })
    .catch((error) => error);

export const searchDataFromWiki = (search) => {
  const params = {
    action: "query",
    list: "search",
    srsearch: search,
    format: "json",
    srlimit: 50,
  };

  wikiUrl = wikiUrl + "?origin=*";
  Object.keys(params).forEach((key) => {
    wikiUrl += "&" + key + "=" + params[key];
  });

  return axios({ method: "GET", url: wikiUrl })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
