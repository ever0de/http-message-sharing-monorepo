import { NestFactory } from "@nestjs/core";
import {
    FastifyAdapter,
    NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { Example, Health } from "@ever0de/http-message/lib/routes/root";

import { AppModule } from "./app.module";

const PORT = process.env.PORT || "3000";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
    );

    const config = new DocumentBuilder()
        .setTitle("HTTP message sharing example")
        .setVersion("0.0.0")
        .addTag(Example.PREFIX)
        .addTag(Health.PREFIX)
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("docs", app, document);

    await app.listen(PORT);
}
bootstrap();
