import { Method } from "@http-message/method";
import { Delete, Get, Options, Patch, Post, Put } from "@nestjs/common";

export function GenerateMethod(
    method: Method,
    path?: string | string[],
): MethodDecorator {
    switch (method) {
        case "GET":
            return Get(path);
        case "POST":
            return Post(path);
        case "PATCH":
            return Patch(path);
        case "DELETE":
            return Delete(path);
        case "PUT":
            return Put(path);
        case "OPTIONS":
            return Options(path);
    }
}
