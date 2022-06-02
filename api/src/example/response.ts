import { Example } from "@http-message/routes/root";
import { ApiProperty } from "@nestjs/swagger";

export class ExampleResponse implements Example.Root.Response {
    @ApiProperty({
        description: "input name",
        example: "john",
    })
    name!: string;
}
