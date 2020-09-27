import axios from "axios";

let baseUrl = 'https://portal-tb.lynxx.co/api-test';

let get = url => {
  return axios.get(url, {
    crossDomain: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Accept: "application/json",
      signature: "asd",
      "Access-Control-Allow-Headers": "X-Requested-With",
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",
      data: {}
    }
  });
};

export default {
  baseUrl,

  //Get all images list
  getAllImagesList() {
    return get(`${baseUrl}/image/list`);
  }
};
