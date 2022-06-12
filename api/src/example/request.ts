import { Example } from "@ever0de/http-message/lib/routes/root";
import { ApiProperty } from "@nestjs/swagger";

export class ExampleQueryString implements Example.Root.Request.QueryString {
    @ApiProperty({
        example: "john",
    })
    name!: string;
}
