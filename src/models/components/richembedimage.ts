/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type RichEmbedImage = {
  url?: string | null | undefined;
  width?: number | null | undefined;
  height?: number | null | undefined;
  placeholder?: string | null | undefined;
  placeholderVersion?: number | null | undefined;
  isAnimated?: boolean | null | undefined;
};

/** @internal */
export const RichEmbedImage$inboundSchema: z.ZodType<
  RichEmbedImage,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.nullable(z.string()).optional(),
  width: z.nullable(z.number().int()).optional(),
  height: z.nullable(z.number().int()).optional(),
  placeholder: z.nullable(z.string()).optional(),
  placeholder_version: z.nullable(z.number().int()).optional(),
  is_animated: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "placeholder_version": "placeholderVersion",
    "is_animated": "isAnimated",
  });
});

/** @internal */
export type RichEmbedImage$Outbound = {
  url?: string | null | undefined;
  width?: number | null | undefined;
  height?: number | null | undefined;
  placeholder?: string | null | undefined;
  placeholder_version?: number | null | undefined;
  is_animated?: boolean | null | undefined;
};

/** @internal */
export const RichEmbedImage$outboundSchema: z.ZodType<
  RichEmbedImage$Outbound,
  z.ZodTypeDef,
  RichEmbedImage
> = z.object({
  url: z.nullable(z.string()).optional(),
  width: z.nullable(z.number().int()).optional(),
  height: z.nullable(z.number().int()).optional(),
  placeholder: z.nullable(z.string()).optional(),
  placeholderVersion: z.nullable(z.number().int()).optional(),
  isAnimated: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    placeholderVersion: "placeholder_version",
    isAnimated: "is_animated",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RichEmbedImage$ {
  /** @deprecated use `RichEmbedImage$inboundSchema` instead. */
  export const inboundSchema = RichEmbedImage$inboundSchema;
  /** @deprecated use `RichEmbedImage$outboundSchema` instead. */
  export const outboundSchema = RichEmbedImage$outboundSchema;
  /** @deprecated use `RichEmbedImage$Outbound` instead. */
  export type Outbound = RichEmbedImage$Outbound;
}