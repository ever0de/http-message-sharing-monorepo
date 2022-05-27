import { GenerateMethod } from "@decorater/method";
import * as HttpMessage from "@ever0de/http-message";
import { Controller } from "@nestjs/common";

@Controller(HttpMessage.Root.Health.PATH)
export class HealthController {
    @GenerateMethod(HttpMessage.Root.Example.METHOD)
    health(): HttpMessage.Root.Health.Response {
        return { success: true };
    }
}
