import axios from "axios";

export const instance = axios.create({
  baseURL: "http://apis.data.go.kr/B551011/KorService1",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
