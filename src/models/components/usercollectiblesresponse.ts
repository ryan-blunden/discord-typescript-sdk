/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UserNameplateResponse,
  UserNameplateResponse$inboundSchema,
  UserNameplateResponse$Outbound,
  UserNameplateResponse$outboundSchema,
} from "./usernameplateresponse.js";

export type UserCollectiblesResponse = {
  nameplate?: UserNameplateResponse | null | undefined;
};

/** @internal */
export const UserCollectiblesResponse$inboundSchema: z.ZodType<
  UserCollectiblesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nameplate: z.nullable(UserNameplateResponse$inboundSchema).optional(),
});

/** @internal */
export type UserCollectiblesResponse$Outbound = {
  nameplate?: UserNameplateResponse$Outbound | null | undefined;
};

/** @internal */
export const UserCollectiblesResponse$outboundSchema: z.ZodType<
  UserCollectiblesResponse$Outbound,
  z.ZodTypeDef,
  UserCollectiblesResponse
> = z.object({
  nameplate: z.nullable(UserNameplateResponse$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserCollectiblesResponse$ {
  /** @deprecated use `UserCollectiblesResponse$inboundSchema` instead. */
  export const inboundSchema = UserCollectiblesResponse$inboundSchema;
  /** @deprecated use `UserCollectiblesResponse$outboundSchema` instead. */
  export const outboundSchema = UserCollectiblesResponse$outboundSchema;
  /** @deprecated use `UserCollectiblesResponse$Outbound` instead. */
  export type Outbound = UserCollectiblesResponse$Outbound;
}

export function userCollectiblesResponseToJSON(
  userCollectiblesResponse: UserCollectiblesResponse,
): string {
  return JSON.stringify(
    UserCollectiblesResponse$outboundSchema.parse(userCollectiblesResponse),
  );
}

export function userCollectiblesResponseFromJSON(
  jsonString: string,
): SafeParseResult<UserCollectiblesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UserCollectiblesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UserCollectiblesResponse' from JSON`,
  );
}
