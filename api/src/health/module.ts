import { Module } from "@nestjs/common";

import { HealthController } from "./controller";

@Module({
    controllers: [HealthController],
    providers: [],
})
export class HealthModule {}
