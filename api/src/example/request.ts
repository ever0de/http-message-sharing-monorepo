import { ApiProperty } from "@nestjs/swagger";

import { Example } from "@ever0de/http-message/lib/routes/root";

export class ExampleQueryString implements Example.Root.Request.QueryString {
    @ApiProperty({
        example: "john",
    })
    name!: string;
}
