import axios from "axios";

const ressource = axios.create({
  baseURL: "http://localhost:3001/people",
  withCredentials: true
});

const api = {
  getTeams: function() {
    return ressource.get("/people").then(res => res.data);
  }
  // getRandomBeer: function() {
  //   return axios
  //     .get("http://localhost:3001/beers/random")
  //     .then(res => res.data);
  // },
  // addNewBeer: function(beer) {
  //   return axios
  //     .post("http://localhost:3001/beers/new", beer)
  //     .then(res => res.data);
  // }
};

export default api;
