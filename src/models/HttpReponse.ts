export type ServerResponse<T = any> = {
  data: T;
  error: any;
  message: string;
  status: number;
};

export const mapToServerResponse = async <T = any>(response: Response) => {
  const data = (await response.json()) as ServerResponse<T>;
  return data;
};
