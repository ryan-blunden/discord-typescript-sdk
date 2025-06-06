/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeprecatedCreatePinRequest = {
  channelId: string;
  messageId: string;
};

/** @internal */
export const DeprecatedCreatePinRequest$inboundSchema: z.ZodType<
  DeprecatedCreatePinRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  message_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "message_id": "messageId",
  });
});

/** @internal */
export type DeprecatedCreatePinRequest$Outbound = {
  channel_id: string;
  message_id: string;
};

/** @internal */
export const DeprecatedCreatePinRequest$outboundSchema: z.ZodType<
  DeprecatedCreatePinRequest$Outbound,
  z.ZodTypeDef,
  DeprecatedCreatePinRequest
> = z.object({
  channelId: z.string(),
  messageId: z.string(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    messageId: "message_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeprecatedCreatePinRequest$ {
  /** @deprecated use `DeprecatedCreatePinRequest$inboundSchema` instead. */
  export const inboundSchema = DeprecatedCreatePinRequest$inboundSchema;
  /** @deprecated use `DeprecatedCreatePinRequest$outboundSchema` instead. */
  export const outboundSchema = DeprecatedCreatePinRequest$outboundSchema;
  /** @deprecated use `DeprecatedCreatePinRequest$Outbound` instead. */
  export type Outbound = DeprecatedCreatePinRequest$Outbound;
}

export function deprecatedCreatePinRequestToJSON(
  deprecatedCreatePinRequest: DeprecatedCreatePinRequest,
): string {
  return JSON.stringify(
    DeprecatedCreatePinRequest$outboundSchema.parse(deprecatedCreatePinRequest),
  );
}

export function deprecatedCreatePinRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeprecatedCreatePinRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeprecatedCreatePinRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeprecatedCreatePinRequest' from JSON`,
  );
}
