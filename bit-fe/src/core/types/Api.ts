import { AxiosError, AxiosResponse } from "axios";

export interface ApiResponse extends AxiosResponse {}
export interface ApiError extends AxiosError {}
