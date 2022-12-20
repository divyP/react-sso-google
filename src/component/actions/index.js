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
    srsearch: "Nelson Mandela",
    format: "json",
  };

  wikiUrl = wikiUrl + "?origin=*";
  Object.keys(params).forEach(function (key) {
    wikiUrl += "&" + key + "=" + params[key];
  });

  axios({ method: "GET", url: wikiUrl })
    .then((response) => {
      if (response?.data?.query?.search[0]?.title === "Nelson Mandela") {
        console.log(
          "Your search page 'Nelson Mandela' exists on English Wikipedia"
        );
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
