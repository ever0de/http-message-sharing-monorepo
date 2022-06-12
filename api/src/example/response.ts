import { Example } from "@ever0de/http-message/lib/routes/root";
import { ApiProperty } from "@nestjs/swagger";

export class ExampleResponse implements Example.Root.Response {
    @ApiProperty({
        description: "input name",
        example: "john",
    })
    name!: string;
}
