// import HttpMessage from "@ever0de/http-message";
import { Controller, Get } from "@nestjs/common";

@Controller("health")
export class HealthController {
    @Get()
    health(): { success: boolean } {
        return { success: true };
    }
}
