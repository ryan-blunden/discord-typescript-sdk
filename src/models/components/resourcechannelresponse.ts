/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SettingsEmojiResponse,
  SettingsEmojiResponse$inboundSchema,
  SettingsEmojiResponse$Outbound,
  SettingsEmojiResponse$outboundSchema,
} from "./settingsemojiresponse.js";

export type ResourceChannelResponse = {
  channelId: string;
  title: string;
  emoji?: SettingsEmojiResponse | null | undefined;
  icon?: string | null | undefined;
  description: string;
};

/** @internal */
export const ResourceChannelResponse$inboundSchema: z.ZodType<
  ResourceChannelResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  title: z.string(),
  emoji: z.nullable(SettingsEmojiResponse$inboundSchema).optional(),
  icon: z.nullable(z.string()).optional(),
  description: z.string(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
  });
});

/** @internal */
export type ResourceChannelResponse$Outbound = {
  channel_id: string;
  title: string;
  emoji?: SettingsEmojiResponse$Outbound | null | undefined;
  icon?: string | null | undefined;
  description: string;
};

/** @internal */
export const ResourceChannelResponse$outboundSchema: z.ZodType<
  ResourceChannelResponse$Outbound,
  z.ZodTypeDef,
  ResourceChannelResponse
> = z.object({
  channelId: z.string(),
  title: z.string(),
  emoji: z.nullable(SettingsEmojiResponse$outboundSchema).optional(),
  icon: z.nullable(z.string()).optional(),
  description: z.string(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResourceChannelResponse$ {
  /** @deprecated use `ResourceChannelResponse$inboundSchema` instead. */
  export const inboundSchema = ResourceChannelResponse$inboundSchema;
  /** @deprecated use `ResourceChannelResponse$outboundSchema` instead. */
  export const outboundSchema = ResourceChannelResponse$outboundSchema;
  /** @deprecated use `ResourceChannelResponse$Outbound` instead. */
  export type Outbound = ResourceChannelResponse$Outbound;
}

export function resourceChannelResponseToJSON(
  resourceChannelResponse: ResourceChannelResponse,
): string {
  return JSON.stringify(
    ResourceChannelResponse$outboundSchema.parse(resourceChannelResponse),
  );
}

export function resourceChannelResponseFromJSON(
  jsonString: string,
): SafeParseResult<ResourceChannelResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ResourceChannelResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ResourceChannelResponse' from JSON`,
  );
}
