import { Test, TestingModule } from "@nestjs/testing";

import { ExampleController } from "./controller";
import { ExampleService } from "./service";

describe("ExampleController", () => {
    let controller: ExampleController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ExampleController],
            providers: [ExampleService],
        }).compile();

        controller = module.get<ExampleController>(ExampleController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });

    it("example", () => {
        const name = "john";
        expect(controller.example({ name }).name).toBe(name);
    });
});
