import { ApiProperty } from "@nestjs/swagger";

import { Health } from "@ever0de/http-message/lib/routes/root";

export class HealthResponse implements Health.Root.Response {
    @ApiProperty({
        description: "Check server health",
        example: true,
    })
    success!: boolean;
}
