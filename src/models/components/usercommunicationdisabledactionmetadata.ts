/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UserCommunicationDisabledActionMetadata = {
  durationSeconds?: number | null | undefined;
};

/** @internal */
export const UserCommunicationDisabledActionMetadata$inboundSchema: z.ZodType<
  UserCommunicationDisabledActionMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  duration_seconds: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "duration_seconds": "durationSeconds",
  });
});

/** @internal */
export type UserCommunicationDisabledActionMetadata$Outbound = {
  duration_seconds?: number | null | undefined;
};

/** @internal */
export const UserCommunicationDisabledActionMetadata$outboundSchema: z.ZodType<
  UserCommunicationDisabledActionMetadata$Outbound,
  z.ZodTypeDef,
  UserCommunicationDisabledActionMetadata
> = z.object({
  durationSeconds: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    durationSeconds: "duration_seconds",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserCommunicationDisabledActionMetadata$ {
  /** @deprecated use `UserCommunicationDisabledActionMetadata$inboundSchema` instead. */
  export const inboundSchema =
    UserCommunicationDisabledActionMetadata$inboundSchema;
  /** @deprecated use `UserCommunicationDisabledActionMetadata$outboundSchema` instead. */
  export const outboundSchema =
    UserCommunicationDisabledActionMetadata$outboundSchema;
  /** @deprecated use `UserCommunicationDisabledActionMetadata$Outbound` instead. */
  export type Outbound = UserCommunicationDisabledActionMetadata$Outbound;
}

export function userCommunicationDisabledActionMetadataToJSON(
  userCommunicationDisabledActionMetadata:
    UserCommunicationDisabledActionMetadata,
): string {
  return JSON.stringify(
    UserCommunicationDisabledActionMetadata$outboundSchema.parse(
      userCommunicationDisabledActionMetadata,
    ),
  );
}

export function userCommunicationDisabledActionMetadataFromJSON(
  jsonString: string,
): SafeParseResult<
  UserCommunicationDisabledActionMetadata,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UserCommunicationDisabledActionMetadata$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UserCommunicationDisabledActionMetadata' from JSON`,
  );
}
