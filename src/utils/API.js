import axios from "axios";

const URL = "https://randomuser.me/api/?results=500&nat=us";

export default {
  getEmployees: function () {
    return axios.get(URL);
  }
};