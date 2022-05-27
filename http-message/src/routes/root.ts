import { Method } from "../method";

export namespace Health {
    export const METHOD: Method = "GET";
    export const PATH = "/health";

    // export interface Request {}

    export interface Response {
        success: boolean;
    }
}

export namespace Example {
    export const METHOD: Method = "GET";
    export const PATH = "/example";

    export interface Request {
        querystring: {
            name: string;
        };
    }

    export interface Response {
        name: string;
    }
}
