import Axios from "axios";

export const BaseUrl = "https://api.open-meteo.com/v1/";

export const apiAgent = Axios.create({ baseURL: BaseUrl });
apiAgent.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiAgent.interceptors.response.use(
  (config) => config,
  (error) => {
    return Promise.reject(error);
  }
);
