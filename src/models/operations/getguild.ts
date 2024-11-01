/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetGuildRequest = {
  guildId: string;
  withCounts?: boolean | undefined;
};

/** @internal */
export const GetGuildRequest$inboundSchema: z.ZodType<
  GetGuildRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  with_counts: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "with_counts": "withCounts",
  });
});

/** @internal */
export type GetGuildRequest$Outbound = {
  guild_id: string;
  with_counts?: boolean | undefined;
};

/** @internal */
export const GetGuildRequest$outboundSchema: z.ZodType<
  GetGuildRequest$Outbound,
  z.ZodTypeDef,
  GetGuildRequest
> = z.object({
  guildId: z.string(),
  withCounts: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    withCounts: "with_counts",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGuildRequest$ {
  /** @deprecated use `GetGuildRequest$inboundSchema` instead. */
  export const inboundSchema = GetGuildRequest$inboundSchema;
  /** @deprecated use `GetGuildRequest$outboundSchema` instead. */
  export const outboundSchema = GetGuildRequest$outboundSchema;
  /** @deprecated use `GetGuildRequest$Outbound` instead. */
  export type Outbound = GetGuildRequest$Outbound;
}
