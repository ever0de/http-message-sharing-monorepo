import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { ExampleModule } from "./example/module";
import { HealthModule } from "./health/module";

@Module({
    imports: [HealthModule, ExampleModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
