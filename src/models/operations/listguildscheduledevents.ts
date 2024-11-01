/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListGuildScheduledEventsRequest = {
  guildId: string;
  withUserCount?: boolean | undefined;
};

export type ListGuildScheduledEventsResponseBody =
  | components.ExternalScheduledEventResponse
  | components.StageScheduledEventResponse
  | components.VoiceScheduledEventResponse;

/** @internal */
export const ListGuildScheduledEventsRequest$inboundSchema: z.ZodType<
  ListGuildScheduledEventsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  with_user_count: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "with_user_count": "withUserCount",
  });
});

/** @internal */
export type ListGuildScheduledEventsRequest$Outbound = {
  guild_id: string;
  with_user_count?: boolean | undefined;
};

/** @internal */
export const ListGuildScheduledEventsRequest$outboundSchema: z.ZodType<
  ListGuildScheduledEventsRequest$Outbound,
  z.ZodTypeDef,
  ListGuildScheduledEventsRequest
> = z.object({
  guildId: z.string(),
  withUserCount: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    withUserCount: "with_user_count",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGuildScheduledEventsRequest$ {
  /** @deprecated use `ListGuildScheduledEventsRequest$inboundSchema` instead. */
  export const inboundSchema = ListGuildScheduledEventsRequest$inboundSchema;
  /** @deprecated use `ListGuildScheduledEventsRequest$outboundSchema` instead. */
  export const outboundSchema = ListGuildScheduledEventsRequest$outboundSchema;
  /** @deprecated use `ListGuildScheduledEventsRequest$Outbound` instead. */
  export type Outbound = ListGuildScheduledEventsRequest$Outbound;
}

/** @internal */
export const ListGuildScheduledEventsResponseBody$inboundSchema: z.ZodType<
  ListGuildScheduledEventsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.ExternalScheduledEventResponse$inboundSchema,
  components.StageScheduledEventResponse$inboundSchema,
  components.VoiceScheduledEventResponse$inboundSchema,
]);

/** @internal */
export type ListGuildScheduledEventsResponseBody$Outbound =
  | components.ExternalScheduledEventResponse$Outbound
  | components.StageScheduledEventResponse$Outbound
  | components.VoiceScheduledEventResponse$Outbound;

/** @internal */
export const ListGuildScheduledEventsResponseBody$outboundSchema: z.ZodType<
  ListGuildScheduledEventsResponseBody$Outbound,
  z.ZodTypeDef,
  ListGuildScheduledEventsResponseBody
> = z.union([
  components.ExternalScheduledEventResponse$outboundSchema,
  components.StageScheduledEventResponse$outboundSchema,
  components.VoiceScheduledEventResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGuildScheduledEventsResponseBody$ {
  /** @deprecated use `ListGuildScheduledEventsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ListGuildScheduledEventsResponseBody$inboundSchema;
  /** @deprecated use `ListGuildScheduledEventsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListGuildScheduledEventsResponseBody$outboundSchema;
  /** @deprecated use `ListGuildScheduledEventsResponseBody$Outbound` instead. */
  export type Outbound = ListGuildScheduledEventsResponseBody$Outbound;
}
