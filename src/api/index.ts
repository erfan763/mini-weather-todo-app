import { AxiosRequestConfig, AxiosResponse } from "axios";
import { apiAgent } from "./axiosConfig";

export const fetcher = async (url: string) => {
  try {
    const resp = await get(url);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const get = async <T = any>(path: string, config?: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse<T>) => {
    return response.data;
  };

  const onError = (error: any) => {
    console.error("Get Request Failed:", error);

    return Promise.reject(error.response || error.message);
  };

  try {
    const response = await apiAgent.get<T>(path, config);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export const delete_ = async <T = any>(path: string, params: AxiosRequestConfig["params"] = null, data?: any) => {
  const onSuccess = (response: AxiosResponse<T>) => {
    return response.data;
  };

  const onError = (error: any) => {
    console.error("Delete Request Failed:", error);

    return Promise.reject(error.response || error.message);
  };

  try {
    const response = await apiAgent.delete<T>(path, {
      params,
      data,
    });
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export async function post<T = any>(path: string, data?: any, params?: any, config?: AxiosRequestConfig<any>) {
  const onSuccess = (response: AxiosResponse<T>) => {
    return response.data;
  };

  const onError = (error: any) => {
    console.error("Post Request Failed:", error);
    return Promise.reject(error.response || error.message);
  };

  try {
    const response = await apiAgent.post<T>(path, data, {
      ...config,
      params,
    });
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}

export async function put<T = any>(path: string, data: any, params?: any) {
  const onSuccess = (response: AxiosResponse<T>) => {
    return response.data;
  };

  const onError = (error: any) => {
    console.error("Put Request Failed:", error);

    return Promise.reject(error.response || error.message);
  };

  try {
    const response = await apiAgent.put<T>(path, data, {
      params,
    });
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}

export async function patch<T = any>(path: string, data: any, params?: any, config?: AxiosRequestConfig<any>) {
  const onSuccess = (response: AxiosResponse<T>) => {
    return response.data;
  };

  const onError = (error: any) => {
    console.error("Post Request Failed:", error);

    return Promise.reject(error.response || error.message);
  };

  try {
    const response = await apiAgent.patch<T>(path, data, {
      ...config,
      params,
    });
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}

export function uploadFile(name: string, file: any) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("sampleFile", name);
  formData.append("name", name);

  return post("/upload", formData);
}
