/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type MessageMentionChannelResponse = {
  id: string;
  name: string;
  type?: 1 | undefined;
  guildId: string;
};

/** @internal */
export const MessageMentionChannelResponse$inboundSchema: z.ZodType<
  MessageMentionChannelResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  type: z.literal(1).optional(),
  guild_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
  });
});

/** @internal */
export type MessageMentionChannelResponse$Outbound = {
  id: string;
  name: string;
  type: 1;
  guild_id: string;
};

/** @internal */
export const MessageMentionChannelResponse$outboundSchema: z.ZodType<
  MessageMentionChannelResponse$Outbound,
  z.ZodTypeDef,
  MessageMentionChannelResponse
> = z.object({
  id: z.string(),
  name: z.string(),
  type: z.literal(1).default(1 as const),
  guildId: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageMentionChannelResponse$ {
  /** @deprecated use `MessageMentionChannelResponse$inboundSchema` instead. */
  export const inboundSchema = MessageMentionChannelResponse$inboundSchema;
  /** @deprecated use `MessageMentionChannelResponse$outboundSchema` instead. */
  export const outboundSchema = MessageMentionChannelResponse$outboundSchema;
  /** @deprecated use `MessageMentionChannelResponse$Outbound` instead. */
  export type Outbound = MessageMentionChannelResponse$Outbound;
}