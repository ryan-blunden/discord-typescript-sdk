/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RichEmbedField = {
  name: string;
  value: string;
  inline?: boolean | null | undefined;
};

/** @internal */
export const RichEmbedField$inboundSchema: z.ZodType<
  RichEmbedField,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  value: z.string(),
  inline: z.nullable(z.boolean()).optional(),
});

/** @internal */
export type RichEmbedField$Outbound = {
  name: string;
  value: string;
  inline?: boolean | null | undefined;
};

/** @internal */
export const RichEmbedField$outboundSchema: z.ZodType<
  RichEmbedField$Outbound,
  z.ZodTypeDef,
  RichEmbedField
> = z.object({
  name: z.string(),
  value: z.string(),
  inline: z.nullable(z.boolean()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RichEmbedField$ {
  /** @deprecated use `RichEmbedField$inboundSchema` instead. */
  export const inboundSchema = RichEmbedField$inboundSchema;
  /** @deprecated use `RichEmbedField$outboundSchema` instead. */
  export const outboundSchema = RichEmbedField$outboundSchema;
  /** @deprecated use `RichEmbedField$Outbound` instead. */
  export type Outbound = RichEmbedField$Outbound;
}

export function richEmbedFieldToJSON(richEmbedField: RichEmbedField): string {
  return JSON.stringify(RichEmbedField$outboundSchema.parse(richEmbedField));
}

export function richEmbedFieldFromJSON(
  jsonString: string,
): SafeParseResult<RichEmbedField, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RichEmbedField$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RichEmbedField' from JSON`,
  );
}
