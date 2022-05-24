import { Test } from "@nestjs/testing";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
    let controller: AppController;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
        }).compile();

        controller = module.get<AppController>(AppController);
    });

    describe("getHello", () => {
        it('should return "Hello World!"', () => {
            expect(controller.getHello()).toBe("Hello World!");
        });
    });
});
