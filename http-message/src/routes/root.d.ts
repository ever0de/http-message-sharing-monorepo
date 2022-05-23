import { Method } from "../method";
export declare namespace Health {
    const METHOD: Method;
    const PATH: string;
    interface Request {
    }
    interface Response {
        success: boolean;
    }
}
export declare namespace Example {
    const METHOD: Method;
    const PATH: string;
    interface Request {
        querystring: {
            name: string;
        };
    }
    interface Response {
        name: string;
    }
}
