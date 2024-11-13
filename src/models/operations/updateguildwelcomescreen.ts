/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type UpdateGuildWelcomeScreenRequest = {
  guildId: string;
  welcomeScreenPatchRequestPartial: components.WelcomeScreenPatchRequestPartial;
};

/** @internal */
export const UpdateGuildWelcomeScreenRequest$inboundSchema: z.ZodType<
  UpdateGuildWelcomeScreenRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  WelcomeScreenPatchRequestPartial:
    components.WelcomeScreenPatchRequestPartial$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "WelcomeScreenPatchRequestPartial": "welcomeScreenPatchRequestPartial",
  });
});

/** @internal */
export type UpdateGuildWelcomeScreenRequest$Outbound = {
  guild_id: string;
  WelcomeScreenPatchRequestPartial:
    components.WelcomeScreenPatchRequestPartial$Outbound;
};

/** @internal */
export const UpdateGuildWelcomeScreenRequest$outboundSchema: z.ZodType<
  UpdateGuildWelcomeScreenRequest$Outbound,
  z.ZodTypeDef,
  UpdateGuildWelcomeScreenRequest
> = z.object({
  guildId: z.string(),
  welcomeScreenPatchRequestPartial:
    components.WelcomeScreenPatchRequestPartial$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    welcomeScreenPatchRequestPartial: "WelcomeScreenPatchRequestPartial",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateGuildWelcomeScreenRequest$ {
  /** @deprecated use `UpdateGuildWelcomeScreenRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateGuildWelcomeScreenRequest$inboundSchema;
  /** @deprecated use `UpdateGuildWelcomeScreenRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateGuildWelcomeScreenRequest$outboundSchema;
  /** @deprecated use `UpdateGuildWelcomeScreenRequest$Outbound` instead. */
  export type Outbound = UpdateGuildWelcomeScreenRequest$Outbound;
}