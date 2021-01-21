import { ApiResponse, ApiError } from "../../../core/types/Api";

export function handleResponse(response: ApiResponse) {
  if (response.data) {
    return response.data;
  }
  return response;
}

export function handleError(error: ApiError) {
  console.error(error);
  return error;
}
