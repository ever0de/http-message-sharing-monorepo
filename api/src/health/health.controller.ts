import * as HttpMessage from "@ever0de/http-message";
import { Controller, Get } from "@nestjs/common";

@Controller("health")
export class HealthController {
    @Get()
    health(): HttpMessage.Root.Health.Response {
        return { success: true };
    }
}
