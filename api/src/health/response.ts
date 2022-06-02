import { Health } from "@http-message/routes/root";
import { ApiProperty } from "@nestjs/swagger";

export class HealthResponse implements Health.Root.Response {
    @ApiProperty({
        description: "Check server health",
        example: true,
    })
    success!: boolean;
}
