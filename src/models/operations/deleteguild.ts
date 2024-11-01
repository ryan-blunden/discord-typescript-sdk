/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type DeleteGuildRequest = {
  guildId: string;
};

/** @internal */
export const DeleteGuildRequest$inboundSchema: z.ZodType<
  DeleteGuildRequest,
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
export type DeleteGuildRequest$Outbound = {
  guild_id: string;
};

/** @internal */
export const DeleteGuildRequest$outboundSchema: z.ZodType<
  DeleteGuildRequest$Outbound,
  z.ZodTypeDef,
  DeleteGuildRequest
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
export namespace DeleteGuildRequest$ {
  /** @deprecated use `DeleteGuildRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteGuildRequest$inboundSchema;
  /** @deprecated use `DeleteGuildRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteGuildRequest$outboundSchema;
  /** @deprecated use `DeleteGuildRequest$Outbound` instead. */
  export type Outbound = DeleteGuildRequest$Outbound;
}
