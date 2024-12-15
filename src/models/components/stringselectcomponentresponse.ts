/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  StringSelectOptionResponse,
  StringSelectOptionResponse$inboundSchema,
  StringSelectOptionResponse$Outbound,
  StringSelectOptionResponse$outboundSchema,
} from "./stringselectoptionresponse.js";

export type StringSelectComponentResponse = {
  type?: 1 | undefined;
  id: number;
  customId: string;
  placeholder?: string | null | undefined;
  minValues?: number | null | undefined;
  maxValues?: number | null | undefined;
  disabled?: boolean | null | undefined;
  options: Array<StringSelectOptionResponse>;
};

/** @internal */
export const StringSelectComponentResponse$inboundSchema: z.ZodType<
  StringSelectComponentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(1).optional(),
  id: z.number().int(),
  custom_id: z.string(),
  placeholder: z.nullable(z.string()).optional(),
  min_values: z.nullable(z.number().int()).optional(),
  max_values: z.nullable(z.number().int()).optional(),
  disabled: z.nullable(z.boolean()).optional(),
  options: z.array(StringSelectOptionResponse$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "custom_id": "customId",
    "min_values": "minValues",
    "max_values": "maxValues",
  });
});

/** @internal */
export type StringSelectComponentResponse$Outbound = {
  type: 1;
  id: number;
  custom_id: string;
  placeholder?: string | null | undefined;
  min_values?: number | null | undefined;
  max_values?: number | null | undefined;
  disabled?: boolean | null | undefined;
  options: Array<StringSelectOptionResponse$Outbound>;
};

/** @internal */
export const StringSelectComponentResponse$outboundSchema: z.ZodType<
  StringSelectComponentResponse$Outbound,
  z.ZodTypeDef,
  StringSelectComponentResponse
> = z.object({
  type: z.literal(1).default(1 as const),
  id: z.number().int(),
  customId: z.string(),
  placeholder: z.nullable(z.string()).optional(),
  minValues: z.nullable(z.number().int()).optional(),
  maxValues: z.nullable(z.number().int()).optional(),
  disabled: z.nullable(z.boolean()).optional(),
  options: z.array(StringSelectOptionResponse$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    customId: "custom_id",
    minValues: "min_values",
    maxValues: "max_values",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StringSelectComponentResponse$ {
  /** @deprecated use `StringSelectComponentResponse$inboundSchema` instead. */
  export const inboundSchema = StringSelectComponentResponse$inboundSchema;
  /** @deprecated use `StringSelectComponentResponse$outboundSchema` instead. */
  export const outboundSchema = StringSelectComponentResponse$outboundSchema;
  /** @deprecated use `StringSelectComponentResponse$Outbound` instead. */
  export type Outbound = StringSelectComponentResponse$Outbound;
}

export function stringSelectComponentResponseToJSON(
  stringSelectComponentResponse: StringSelectComponentResponse,
): string {
  return JSON.stringify(
    StringSelectComponentResponse$outboundSchema.parse(
      stringSelectComponentResponse,
    ),
  );
}

export function stringSelectComponentResponseFromJSON(
  jsonString: string,
): SafeParseResult<StringSelectComponentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StringSelectComponentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StringSelectComponentResponse' from JSON`,
  );
}