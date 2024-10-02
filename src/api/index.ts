import axios, { Axios, AxiosError, AxiosRequestConfig } from "axios";
const VITE_KORSERVICE_URL = import.meta.env.VITE_KORSERVICE_URL;

interface APIResponse<T> {
  statusCode: number; // 상태코드 (보인 서버상태코드)
  errorCode: number; // 에러코드 (본인 서버에러코드)
  message: string; // 메시지
  result: T; // 데이터 내용
}
const client: Axios = axios.create({
  baseURL: VITE_KORSERVICE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getData = async <T>(url: string, config?: AxiosRequestConfig) => {
  try {
    const response = await client.get<APIResponse<T>>(url, config);
    if (response && response.data) {
      return response.data;
    } else {
      console.error("No data returned in the response");
      return undefined;
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.log(
        "Axios error:",
        axiosError.response?.data || axiosError.message
      );
      return axiosError.response?.data || axiosError.message;
    } else if (error instanceof Error) {
      console.error("General error:", error.message);
      return error.message;
    } else {
      console.error("Unexpected error", error);
      return undefined;
    }
  }
};
