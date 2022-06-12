import { Health } from "@ever0de/http-message/lib/routes/root";
import { ApiProperty } from "@nestjs/swagger";

export class HealthResponse implements Health.Root.Response {
    @ApiProperty({
        description: "Check server health",
        example: true,
    })
    success!: boolean;
}
