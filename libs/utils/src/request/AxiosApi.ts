import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

export type CommonResponse = {
  status: number;
  statusText: string;
  data: unknown;
  message: string;
};

const timeOut = 5000;

export const DefaultConfig: AxiosRequestConfig = {
  timeout: timeOut,
  withCredentials: true,
} as const;

export interface ClientRequestConfig extends AxiosRequestConfig {
  abortController?: AbortController;
}

export class AxiosApi {
  protected client: AxiosInstance;

  constructor(config: ClientRequestConfig) {
    this.client = axios.create(config);
  }

  protected onRequestConfig(config: InternalAxiosRequestConfig) {
    return config;
  }

  protected onRequestError(error: AxiosError) {
    return Promise.reject(error);
  }

  public getClient() {
    return this.client;
  }
}
