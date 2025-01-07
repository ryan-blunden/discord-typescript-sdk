/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RichEmbedAuthor = {
  name?: string | null | undefined;
  url?: string | null | undefined;
  iconUrl?: string | null | undefined;
};

/** @internal */
export const RichEmbedAuthor$inboundSchema: z.ZodType<
  RichEmbedAuthor,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
  icon_url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "icon_url": "iconUrl",
  });
});

/** @internal */
export type RichEmbedAuthor$Outbound = {
  name?: string | null | undefined;
  url?: string | null | undefined;
  icon_url?: string | null | undefined;
};

/** @internal */
export const RichEmbedAuthor$outboundSchema: z.ZodType<
  RichEmbedAuthor$Outbound,
  z.ZodTypeDef,
  RichEmbedAuthor
> = z.object({
  name: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
  iconUrl: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    iconUrl: "icon_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RichEmbedAuthor$ {
  /** @deprecated use `RichEmbedAuthor$inboundSchema` instead. */
  export const inboundSchema = RichEmbedAuthor$inboundSchema;
  /** @deprecated use `RichEmbedAuthor$outboundSchema` instead. */
  export const outboundSchema = RichEmbedAuthor$outboundSchema;
  /** @deprecated use `RichEmbedAuthor$Outbound` instead. */
  export type Outbound = RichEmbedAuthor$Outbound;
}

export function richEmbedAuthorToJSON(
  richEmbedAuthor: RichEmbedAuthor,
): string {
  return JSON.stringify(RichEmbedAuthor$outboundSchema.parse(richEmbedAuthor));
}

export function richEmbedAuthorFromJSON(
  jsonString: string,
): SafeParseResult<RichEmbedAuthor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RichEmbedAuthor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RichEmbedAuthor' from JSON`,
  );
}
