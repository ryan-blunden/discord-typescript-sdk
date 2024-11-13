/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type DeleteGuildTemplateRequest = {
  guildId: string;
  code: string;
};

/** @internal */
export const DeleteGuildTemplateRequest$inboundSchema: z.ZodType<
  DeleteGuildTemplateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  code: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
  });
});

/** @internal */
export type DeleteGuildTemplateRequest$Outbound = {
  guild_id: string;
  code: string;
};

/** @internal */
export const DeleteGuildTemplateRequest$outboundSchema: z.ZodType<
  DeleteGuildTemplateRequest$Outbound,
  z.ZodTypeDef,
  DeleteGuildTemplateRequest
> = z.object({
  guildId: z.string(),
  code: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteGuildTemplateRequest$ {
  /** @deprecated use `DeleteGuildTemplateRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteGuildTemplateRequest$inboundSchema;
  /** @deprecated use `DeleteGuildTemplateRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteGuildTemplateRequest$outboundSchema;
  /** @deprecated use `DeleteGuildTemplateRequest$Outbound` instead. */
  export type Outbound = DeleteGuildTemplateRequest$Outbound;
}