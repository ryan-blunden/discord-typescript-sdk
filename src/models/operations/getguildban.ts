/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetGuildBanRequest = {
  guildId: string;
  userId: string;
};

/** @internal */
export const GetGuildBanRequest$inboundSchema: z.ZodType<
  GetGuildBanRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  user_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "user_id": "userId",
  });
});

/** @internal */
export type GetGuildBanRequest$Outbound = {
  guild_id: string;
  user_id: string;
};

/** @internal */
export const GetGuildBanRequest$outboundSchema: z.ZodType<
  GetGuildBanRequest$Outbound,
  z.ZodTypeDef,
  GetGuildBanRequest
> = z.object({
  guildId: z.string(),
  userId: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGuildBanRequest$ {
  /** @deprecated use `GetGuildBanRequest$inboundSchema` instead. */
  export const inboundSchema = GetGuildBanRequest$inboundSchema;
  /** @deprecated use `GetGuildBanRequest$outboundSchema` instead. */
  export const outboundSchema = GetGuildBanRequest$outboundSchema;
  /** @deprecated use `GetGuildBanRequest$Outbound` instead. */
  export type Outbound = GetGuildBanRequest$Outbound;
}