/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UserSelectDefaultValueResponse = {
  type?: "user" | undefined;
  id: string;
};

/** @internal */
export const UserSelectDefaultValueResponse$inboundSchema: z.ZodType<
  UserSelectDefaultValueResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("user").optional(),
  id: z.string(),
});

/** @internal */
export type UserSelectDefaultValueResponse$Outbound = {
  type: "user";
  id: string;
};

/** @internal */
export const UserSelectDefaultValueResponse$outboundSchema: z.ZodType<
  UserSelectDefaultValueResponse$Outbound,
  z.ZodTypeDef,
  UserSelectDefaultValueResponse
> = z.object({
  type: z.literal("user").default("user" as const),
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserSelectDefaultValueResponse$ {
  /** @deprecated use `UserSelectDefaultValueResponse$inboundSchema` instead. */
  export const inboundSchema = UserSelectDefaultValueResponse$inboundSchema;
  /** @deprecated use `UserSelectDefaultValueResponse$outboundSchema` instead. */
  export const outboundSchema = UserSelectDefaultValueResponse$outboundSchema;
  /** @deprecated use `UserSelectDefaultValueResponse$Outbound` instead. */
  export type Outbound = UserSelectDefaultValueResponse$Outbound;
}

export function userSelectDefaultValueResponseToJSON(
  userSelectDefaultValueResponse: UserSelectDefaultValueResponse,
): string {
  return JSON.stringify(
    UserSelectDefaultValueResponse$outboundSchema.parse(
      userSelectDefaultValueResponse,
    ),
  );
}

export function userSelectDefaultValueResponseFromJSON(
  jsonString: string,
): SafeParseResult<UserSelectDefaultValueResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UserSelectDefaultValueResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UserSelectDefaultValueResponse' from JSON`,
  );
}
