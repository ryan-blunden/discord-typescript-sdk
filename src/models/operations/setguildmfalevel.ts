/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type SetGuildMfaLevelRequestBody = {
  level?: 0 | undefined;
};

export type SetGuildMfaLevelRequest = {
  guildId: string;
  requestBody: SetGuildMfaLevelRequestBody;
};

/** @internal */
export const SetGuildMfaLevelRequestBody$inboundSchema: z.ZodType<
  SetGuildMfaLevelRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  level: z.literal(0).optional(),
});

/** @internal */
export type SetGuildMfaLevelRequestBody$Outbound = {
  level: 0;
};

/** @internal */
export const SetGuildMfaLevelRequestBody$outboundSchema: z.ZodType<
  SetGuildMfaLevelRequestBody$Outbound,
  z.ZodTypeDef,
  SetGuildMfaLevelRequestBody
> = z.object({
  level: z.literal(0).default(0 as const),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SetGuildMfaLevelRequestBody$ {
  /** @deprecated use `SetGuildMfaLevelRequestBody$inboundSchema` instead. */
  export const inboundSchema = SetGuildMfaLevelRequestBody$inboundSchema;
  /** @deprecated use `SetGuildMfaLevelRequestBody$outboundSchema` instead. */
  export const outboundSchema = SetGuildMfaLevelRequestBody$outboundSchema;
  /** @deprecated use `SetGuildMfaLevelRequestBody$Outbound` instead. */
  export type Outbound = SetGuildMfaLevelRequestBody$Outbound;
}

/** @internal */
export const SetGuildMfaLevelRequest$inboundSchema: z.ZodType<
  SetGuildMfaLevelRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  RequestBody: z.lazy(() => SetGuildMfaLevelRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type SetGuildMfaLevelRequest$Outbound = {
  guild_id: string;
  RequestBody: SetGuildMfaLevelRequestBody$Outbound;
};

/** @internal */
export const SetGuildMfaLevelRequest$outboundSchema: z.ZodType<
  SetGuildMfaLevelRequest$Outbound,
  z.ZodTypeDef,
  SetGuildMfaLevelRequest
> = z.object({
  guildId: z.string(),
  requestBody: z.lazy(() => SetGuildMfaLevelRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SetGuildMfaLevelRequest$ {
  /** @deprecated use `SetGuildMfaLevelRequest$inboundSchema` instead. */
  export const inboundSchema = SetGuildMfaLevelRequest$inboundSchema;
  /** @deprecated use `SetGuildMfaLevelRequest$outboundSchema` instead. */
  export const outboundSchema = SetGuildMfaLevelRequest$outboundSchema;
  /** @deprecated use `SetGuildMfaLevelRequest$Outbound` instead. */
  export type Outbound = SetGuildMfaLevelRequest$Outbound;
}