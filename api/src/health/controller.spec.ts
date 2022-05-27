import { Test, TestingModule } from "@nestjs/testing";

import { HealthController } from "./controller";

describe("HealthController", () => {
    let controller: HealthController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [HealthController],
            providers: [],
        }).compile();

        controller = module.get<HealthController>(HealthController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });

    it("health", async () => {
        expect(controller.health().success).toBe(true);
    });
});
