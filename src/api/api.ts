import axios from "axios";
import {selectLoginState} from "../store/selectors/login.selectors";
import {store} from "../store/store";

export const AUTH_BASE_URL = "/api/node/v1";
export const BASE_URL = "/api/go/v1";

export const authAxiosInstance = axios.create({
  baseURL: AUTH_BASE_URL,
  withCredentials: true,
});

export const appAxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    authorization: 'Bearer ' + "eyJhbGciOiJFUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwQ1FfUFdDQUVpZkNoX2hiNmdhYkdkblFWY1d4N2VoeTdLNTVUVVpZMy1zIn0.eyJleHAiOjE2NTgzMTMxNDYsImlhdCI6MTY1ODIyNjc0NiwianRpIjoiYzg1NWM3YTUtZWE4Ni00ZGRkLWE5NmQtYmE3YjM2YzJhYzMyIiwiaXNzIjoiaHR0cHM6Ly9rYy5zY2ItbW9uaXRvci5ydS9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYzY5ZjZlNTUtYzk3ZC00YjM2LWEyY2YtMzhlOGI2MzIxOTU4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibm9kZS1hdXRoIiwic2Vzc2lvbl9zdGF0ZSI6IjNlNjU3OTlmLTY3MjktNDZlYy04YTRjLWZhOGE2MDljOGVhZCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoidGVzdHVzZXIgdGVzdHVzZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0dXNlciIsImdpdmVuX25hbWUiOiJ0ZXN0dXNlciIsImZhbWlseV9uYW1lIjoidGVzdHVzZXIiLCJlbWFpbCI6InRlc3R1c2VyQGV4YW1wbGUuY29tIn0.mtcki-mxlUWN89MhQvZ4eEEz7WgE0p1p3UMcD1GQJ95_JwYDzaaP7PNUJIQ1k63BodXfmkLW4whp1vf4jjGEHA" }
});

appAxiosInstance.interceptors.request.use(
    (config) => {
      const token = getAccessToken();
      if (token) {
        config.headers = config.headers ?? {};
        config.headers.Authorization = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      Promise.reject(error).then();
    }
);

const getAccessToken = () => selectLoginState(store.getState());
