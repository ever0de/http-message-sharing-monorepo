import { Example } from "@http-message/routes/root";
import { ApiProperty } from "@nestjs/swagger";

export class ExampleQueryString implements Example.Root.Request.QueryString {
    @ApiProperty({
        example: "john",
    })
    name!: string;
}
