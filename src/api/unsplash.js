
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 247a3541f36ae2f1f0bec12e674967fc2497269bcf14b7163ffe27c59b5b9a8c"
  }
});
