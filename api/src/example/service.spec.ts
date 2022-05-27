import { Test, TestingModule } from "@nestjs/testing";

import { ExampleService } from "./service";

describe("ExampleService", () => {
    let service: ExampleService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ExampleService],
        }).compile();

        service = module.get<ExampleService>(ExampleService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    it("exampel", () => {
        const name = "john";
        expect(service.example({ name }).name).toBe(name);
    });
});
