import * as HttpMessage from "@ever0de/http-message";
import { ApiProperty } from "@nestjs/swagger";

export class HealthResponse implements HttpMessage.Root.Health.Response {
    @ApiProperty({
        description: "Check server health",
        example: true,
    })
    success!: boolean;
}
