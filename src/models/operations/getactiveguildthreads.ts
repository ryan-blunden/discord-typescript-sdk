/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetActiveGuildThreadsRequest = {
  guildId: string;
};

/** @internal */
export const GetActiveGuildThreadsRequest$inboundSchema: z.ZodType<
  GetActiveGuildThreadsRequest,
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
export type GetActiveGuildThreadsRequest$Outbound = {
  guild_id: string;
};

/** @internal */
export const GetActiveGuildThreadsRequest$outboundSchema: z.ZodType<
  GetActiveGuildThreadsRequest$Outbound,
  z.ZodTypeDef,
  GetActiveGuildThreadsRequest
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
export namespace GetActiveGuildThreadsRequest$ {
  /** @deprecated use `GetActiveGuildThreadsRequest$inboundSchema` instead. */
  export const inboundSchema = GetActiveGuildThreadsRequest$inboundSchema;
  /** @deprecated use `GetActiveGuildThreadsRequest$outboundSchema` instead. */
  export const outboundSchema = GetActiveGuildThreadsRequest$outboundSchema;
  /** @deprecated use `GetActiveGuildThreadsRequest$Outbound` instead. */
  export type Outbound = GetActiveGuildThreadsRequest$Outbound;
}