export type Method = "GET" | "POST" | "DELETE" | "PATCH" | "PUT" | "OPTIONS";

export namespace Example {
  export const METHOD: Method = "GET";

  export interface Request {
    querystring: {
      name: string;
    };
  }

  export interface Response {
    name: string;
  }
}
