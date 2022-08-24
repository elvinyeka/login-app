import axios from "axios";

export default axios.create({
  baseURL: "http://18.216.47.120:8085/syncpass/authorization",
});
