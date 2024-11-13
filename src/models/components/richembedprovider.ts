/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type RichEmbedProvider = {
  name?: string | null | undefined;
  url?: string | null | undefined;
};

/** @internal */
export const RichEmbedProvider$inboundSchema: z.ZodType<
  RichEmbedProvider,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
});

/** @internal */
export type RichEmbedProvider$Outbound = {
  name?: string | null | undefined;
  url?: string | null | undefined;
};

/** @internal */
export const RichEmbedProvider$outboundSchema: z.ZodType<
  RichEmbedProvider$Outbound,
  z.ZodTypeDef,
  RichEmbedProvider
> = z.object({
  name: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RichEmbedProvider$ {
  /** @deprecated use `RichEmbedProvider$inboundSchema` instead. */
  export const inboundSchema = RichEmbedProvider$inboundSchema;
  /** @deprecated use `RichEmbedProvider$outboundSchema` instead. */
  export const outboundSchema = RichEmbedProvider$outboundSchema;
  /** @deprecated use `RichEmbedProvider$Outbound` instead. */
  export type Outbound = RichEmbedProvider$Outbound;
}