/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GetGuildWebhooksRequest = {
  guildId: string;
};

export type GetGuildWebhooksResponseBody =
  | components.ApplicationIncomingWebhookResponse
  | components.ChannelFollowerWebhookResponse
  | components.GuildIncomingWebhookResponse;

/** @internal */
export const GetGuildWebhooksRequest$inboundSchema: z.ZodType<
  GetGuildWebhooksRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
  });
});

/** @internal */
export type GetGuildWebhooksRequest$Outbound = {
  guild_id: string;
};

/** @internal */
export const GetGuildWebhooksRequest$outboundSchema: z.ZodType<
  GetGuildWebhooksRequest$Outbound,
  z.ZodTypeDef,
  GetGuildWebhooksRequest
> = z.object({
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
export namespace GetGuildWebhooksRequest$ {
  /** @deprecated use `GetGuildWebhooksRequest$inboundSchema` instead. */
  export const inboundSchema = GetGuildWebhooksRequest$inboundSchema;
  /** @deprecated use `GetGuildWebhooksRequest$outboundSchema` instead. */
  export const outboundSchema = GetGuildWebhooksRequest$outboundSchema;
  /** @deprecated use `GetGuildWebhooksRequest$Outbound` instead. */
  export type Outbound = GetGuildWebhooksRequest$Outbound;
}

/** @internal */
export const GetGuildWebhooksResponseBody$inboundSchema: z.ZodType<
  GetGuildWebhooksResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.ApplicationIncomingWebhookResponse$inboundSchema,
  components.ChannelFollowerWebhookResponse$inboundSchema,
  components.GuildIncomingWebhookResponse$inboundSchema,
]);

/** @internal */
export type GetGuildWebhooksResponseBody$Outbound =
  | components.ApplicationIncomingWebhookResponse$Outbound
  | components.ChannelFollowerWebhookResponse$Outbound
  | components.GuildIncomingWebhookResponse$Outbound;

/** @internal */
export const GetGuildWebhooksResponseBody$outboundSchema: z.ZodType<
  GetGuildWebhooksResponseBody$Outbound,
  z.ZodTypeDef,
  GetGuildWebhooksResponseBody
> = z.union([
  components.ApplicationIncomingWebhookResponse$outboundSchema,
  components.ChannelFollowerWebhookResponse$outboundSchema,
  components.GuildIncomingWebhookResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGuildWebhooksResponseBody$ {
  /** @deprecated use `GetGuildWebhooksResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetGuildWebhooksResponseBody$inboundSchema;
  /** @deprecated use `GetGuildWebhooksResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetGuildWebhooksResponseBody$outboundSchema;
  /** @deprecated use `GetGuildWebhooksResponseBody$Outbound` instead. */
  export type Outbound = GetGuildWebhooksResponseBody$Outbound;
}
