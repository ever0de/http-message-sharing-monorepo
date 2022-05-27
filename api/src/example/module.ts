import { Module } from "@nestjs/common";

import { ExampleController } from "./controller";
import { ExampleService } from "./service";

@Module({
    controllers: [ExampleController],
    providers: [ExampleService],
})
export class ExampleModule {}
