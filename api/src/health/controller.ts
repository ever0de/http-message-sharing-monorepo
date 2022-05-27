import { GenerateMethod } from "@decorater/method";
import * as HttpMessage from "@ever0de/http-message";
import { Controller } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

import { HealthResponse } from "./response";

@ApiTags("health")
@Controller(HttpMessage.Root.Health.PATH)
export class HealthController {
    @GenerateMethod(HttpMessage.Root.Example.METHOD)
    @ApiResponse({ status: 200, type: HealthResponse })
    health(): HealthResponse {
        return { success: true };
    }
}
