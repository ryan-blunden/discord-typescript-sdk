/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BotAccountPatchRequest = {
  username: string;
  avatar?: string | null | undefined;
  banner?: string | null | undefined;
};

/** @internal */
export const BotAccountPatchRequest$inboundSchema: z.ZodType<
  BotAccountPatchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  username: z.string(),
  avatar: z.nullable(z.string()).optional(),
  banner: z.nullable(z.string()).optional(),
});

/** @internal */
export type BotAccountPatchRequest$Outbound = {
  username: string;
  avatar?: string | null | undefined;
  banner?: string | null | undefined;
};

/** @internal */
export const BotAccountPatchRequest$outboundSchema: z.ZodType<
  BotAccountPatchRequest$Outbound,
  z.ZodTypeDef,
  BotAccountPatchRequest
> = z.object({
  username: z.string(),
  avatar: z.nullable(z.string()).optional(),
  banner: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BotAccountPatchRequest$ {
  /** @deprecated use `BotAccountPatchRequest$inboundSchema` instead. */
  export const inboundSchema = BotAccountPatchRequest$inboundSchema;
  /** @deprecated use `BotAccountPatchRequest$outboundSchema` instead. */
  export const outboundSchema = BotAccountPatchRequest$outboundSchema;
  /** @deprecated use `BotAccountPatchRequest$Outbound` instead. */
  export type Outbound = BotAccountPatchRequest$Outbound;
}
