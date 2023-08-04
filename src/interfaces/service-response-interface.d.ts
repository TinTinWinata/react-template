export type IBackendResponse<T> = {
  data: T | null;
  success: boolean;
  message: string;
};
