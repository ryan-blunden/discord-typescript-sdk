/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RichEmbedThumbnail = {
  url?: string | null | undefined;
  width?: number | null | undefined;
  height?: number | null | undefined;
  placeholder?: string | null | undefined;
  placeholderVersion?: number | null | undefined;
  isAnimated?: boolean | null | undefined;
  description?: string | null | undefined;
};

/** @internal */
export const RichEmbedThumbnail$inboundSchema: z.ZodType<
  RichEmbedThumbnail,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.nullable(z.string()).optional(),
  width: z.nullable(z.number().int()).optional(),
  height: z.nullable(z.number().int()).optional(),
  placeholder: z.nullable(z.string()).optional(),
  placeholder_version: z.nullable(z.number().int()).optional(),
  is_animated: z.nullable(z.boolean()).optional(),
  description: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "placeholder_version": "placeholderVersion",
    "is_animated": "isAnimated",
  });
});

/** @internal */
export type RichEmbedThumbnail$Outbound = {
  url?: string | null | undefined;
  width?: number | null | undefined;
  height?: number | null | undefined;
  placeholder?: string | null | undefined;
  placeholder_version?: number | null | undefined;
  is_animated?: boolean | null | undefined;
  description?: string | null | undefined;
};

/** @internal */
export const RichEmbedThumbnail$outboundSchema: z.ZodType<
  RichEmbedThumbnail$Outbound,
  z.ZodTypeDef,
  RichEmbedThumbnail
> = z.object({
  url: z.nullable(z.string()).optional(),
  width: z.nullable(z.number().int()).optional(),
  height: z.nullable(z.number().int()).optional(),
  placeholder: z.nullable(z.string()).optional(),
  placeholderVersion: z.nullable(z.number().int()).optional(),
  isAnimated: z.nullable(z.boolean()).optional(),
  description: z.nullable(z.string()).optional(),
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
export namespace RichEmbedThumbnail$ {
  /** @deprecated use `RichEmbedThumbnail$inboundSchema` instead. */
  export const inboundSchema = RichEmbedThumbnail$inboundSchema;
  /** @deprecated use `RichEmbedThumbnail$outboundSchema` instead. */
  export const outboundSchema = RichEmbedThumbnail$outboundSchema;
  /** @deprecated use `RichEmbedThumbnail$Outbound` instead. */
  export type Outbound = RichEmbedThumbnail$Outbound;
}

export function richEmbedThumbnailToJSON(
  richEmbedThumbnail: RichEmbedThumbnail,
): string {
  return JSON.stringify(
    RichEmbedThumbnail$outboundSchema.parse(richEmbedThumbnail),
  );
}

export function richEmbedThumbnailFromJSON(
  jsonString: string,
): SafeParseResult<RichEmbedThumbnail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RichEmbedThumbnail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RichEmbedThumbnail' from JSON`,
  );
}
