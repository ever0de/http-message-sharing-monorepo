import { Range } from "./utils";

/**
 * range: 1000 ~ 9999
 *
 * 3xxx: 3rd party library | SAAS error
 * 4xxx: invalid params
 * 5xxx: data error (human error) | not exists row in database
 * 9xxx: admin error
 */
export const enum APIErrorCode {
    Twilio = 3001,

    // 4xxxx
    InvalidUsername = 4001,
    InvalidPhoneNumber = 4002,

    AlreadyExistsUsername = 4200,
    AlreadyExistsPhoneNumber = 4201,
}

/**
 * API private Error type
 */
export interface APIError<
    Code extends APIErrorCode,
    StatusCode extends Range<400, 600>,
    Data extends Record<string, unknown> | undefined = undefined,
> extends Error {
    /**
     * error code used by API service
     */
    code: Code;
    /**
     * error message
     */
    message: keyof typeof APIErrorCode;
    /**
     * 4xx: Errors that can be handled separately by the client
     * 5xx: check backend engineer
     */
    statusCode: StatusCode;
    /**
     * It is a value to know from which value the failure occurred
     */
    data?: Data;
}
