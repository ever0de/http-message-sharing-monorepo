import { Method } from "../method";

export namespace Health {
    export const PREFIX = "/health";

    export namespace Root {
        export const METHOD: Method = "GET";
        export const PATH = "";

        // export interface Request {}

        export interface Response {
            success: boolean;
        }
    }
}

export namespace Example {
    export const PREFIX = "/example";

    export namespace Root {
        export const METHOD: Method = "GET";
        export const PATH = "";

        export namespace Request {
            export interface QueryString {
                name: string;
            }
        }

        export interface Response {
            name: string;
        }
    }
}
