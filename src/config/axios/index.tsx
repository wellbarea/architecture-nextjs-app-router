import { TEN_SECONDS } from "@/src/constants";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
  timeout: TEN_SECONDS,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  responseType: "json",
});
