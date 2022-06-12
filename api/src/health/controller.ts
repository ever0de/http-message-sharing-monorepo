import { GenerateMethod } from "@decorater/method";
import { Health } from "@ever0de/http-message/lib/routes/root";
import { Controller } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

import { HealthResponse } from "./response";

@ApiTags(Health.PREFIX)
@Controller(Health.PREFIX)
export class HealthController {
    @GenerateMethod(Health.Root.METHOD)
    @ApiResponse({ status: 200, type: HealthResponse })
    health(): HealthResponse {
        return { success: true };
    }
}
