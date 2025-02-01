import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { AxiosApi, ClientRequestConfig, DefaultConfig } from "./AxiosApi";

export class ClientAxiosRequest extends AxiosApi {
  private static thisInstance: ClientAxiosRequest;
  private pending: Map<string, ClientRequestConfig> = new Map();

  public static getInstance(): ClientAxiosRequest {
    if (!this.thisInstance) {
      this.thisInstance = new ClientAxiosRequest({
        ...DefaultConfig,
      });
    }

    return this.thisInstance;
  }

  public getPending() {
    return this.pending;
  }

  constructor(config: ClientRequestConfig) {
    super(config);

    const { interceptors } = this.client;

    interceptors.request.use(
      this.onRequestConfig.bind(this),
      this.onRequestError.bind(this)
    );
    interceptors.response.use(
      this.onSuccess.bind(this),
      this.onResponseError.bind(this)
    );
  }

  protected onSuccess(response: AxiosResponse) {
    const { config } = response || {};

    this.removePending(config);

    return response;
  }

  protected onResponseError = async (error: AxiosError) => {
    const { config } = error;

    if (axios.isCancel(error)) {
      // 응답을 받기 전 중복된 요청인 경우
      return Promise.reject(error);
    }

    if (config) {
      this.removePending(config);
    }

    return Promise.reject(error);
  };

  private removePending(config: AxiosRequestConfig) {
    const hashCodeValue: string = this.getConfigHashCode(config);

    this.pending.delete(hashCodeValue);
  }

  protected onRequestConfig(config: InternalAxiosRequestConfig) {
    const hashCodeValue: string = this.getConfigHashCode(config);
    const abortController = new AbortController();

    config.signal = abortController.signal;

    if (this.pending.has(hashCodeValue)) {
      abortController.abort();
    } else {
      this.pending.set(hashCodeValue, config);
    }

    return config;
  }

  private getConfigHashCode(config: AxiosRequestConfig): string {
    return JSON.stringify(config);
  }
}

export const clientRequest = <T>(options: ClientRequestConfig): Promise<T> => {
  return ClientAxiosRequest.getInstance().getClient().request(options);
};
