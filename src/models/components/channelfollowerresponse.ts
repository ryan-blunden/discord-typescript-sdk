/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ChannelFollowerResponse = {
  channelId: string;
  webhookId: string;
};

/** @internal */
export const ChannelFollowerResponse$inboundSchema: z.ZodType<
  ChannelFollowerResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  webhook_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "webhook_id": "webhookId",
  });
});

/** @internal */
export type ChannelFollowerResponse$Outbound = {
  channel_id: string;
  webhook_id: string;
};

/** @internal */
export const ChannelFollowerResponse$outboundSchema: z.ZodType<
  ChannelFollowerResponse$Outbound,
  z.ZodTypeDef,
  ChannelFollowerResponse
> = z.object({
  channelId: z.string(),
  webhookId: z.string(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    webhookId: "webhook_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChannelFollowerResponse$ {
  /** @deprecated use `ChannelFollowerResponse$inboundSchema` instead. */
  export const inboundSchema = ChannelFollowerResponse$inboundSchema;
  /** @deprecated use `ChannelFollowerResponse$outboundSchema` instead. */
  export const outboundSchema = ChannelFollowerResponse$outboundSchema;
  /** @deprecated use `ChannelFollowerResponse$Outbound` instead. */
  export type Outbound = ChannelFollowerResponse$Outbound;
}

export function channelFollowerResponseToJSON(
  channelFollowerResponse: ChannelFollowerResponse,
): string {
  return JSON.stringify(
    ChannelFollowerResponse$outboundSchema.parse(channelFollowerResponse),
  );
}

export function channelFollowerResponseFromJSON(
  jsonString: string,
): SafeParseResult<ChannelFollowerResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChannelFollowerResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChannelFollowerResponse' from JSON`,
  );
}
