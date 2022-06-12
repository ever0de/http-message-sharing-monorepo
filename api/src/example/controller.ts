import { GenerateMethod } from "@decorater/method";
import { Controller, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

import { Example } from "@ever0de/http-message/lib/routes/root";

import { ExampleQueryString } from "./request";
import { ExampleResponse } from "./response";

import { ExampleService } from "./service";

@ApiTags(Example.PREFIX)
@Controller(Example.PREFIX)
export class ExampleController {
    constructor(private readonly exampleService: ExampleService) {}

    @GenerateMethod(Example.Root.METHOD)
    @ApiResponse({
        type: ExampleResponse,
    })
    example(@Query() queryString: ExampleQueryString): ExampleResponse {
        return this.exampleService.example(queryString);
    }
}
