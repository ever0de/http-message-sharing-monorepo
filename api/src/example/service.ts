import { Injectable } from "@nestjs/common";

import { ExampleQueryString } from "./request";
import { ExampleResponse } from "./response";

@Injectable()
export class ExampleService {
    example(queryString: ExampleQueryString): ExampleResponse {
        return {
            name: queryString.name,
        };
    }
}
