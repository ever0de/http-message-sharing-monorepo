import { INestApplication } from "@nestjs/common";
import {
    FastifyAdapter,
    NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { Test } from "@nestjs/testing";
import request from "supertest";

import { AppModule } from "../src/app.module";

describe("AppController (e2e)", () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication<NestFastifyApplication>(
            new FastifyAdapter(),
        );
        await app.init();
        await app.getHttpAdapter().getInstance().ready();
    });

    it("[GET] /", () => {
        return request(app.getHttpServer())
            .get("/")
            .expect(200)
            .expect("Hello World!");
    });

    it("[GET] /health", () => {
        return request(app.getHttpServer())
            .get("/health")
            .expect(200)
            .expect(JSON.stringify({ success: true }));
    });
});
