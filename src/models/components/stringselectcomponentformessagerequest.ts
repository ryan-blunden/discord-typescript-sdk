/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  StringSelectOptionForMessageRequest,
  StringSelectOptionForMessageRequest$inboundSchema,
  StringSelectOptionForMessageRequest$Outbound,
  StringSelectOptionForMessageRequest$outboundSchema,
} from "./stringselectoptionformessagerequest.js";

export type StringSelectComponentForMessageRequest = {
  type?: 1 | undefined;
  customId: string;
  placeholder?: string | null | undefined;
  minValues?: number | null | undefined;
  maxValues?: number | null | undefined;
  disabled?: boolean | null | undefined;
  options: Array<StringSelectOptionForMessageRequest>;
};

/** @internal */
export const StringSelectComponentForMessageRequest$inboundSchema: z.ZodType<
  StringSelectComponentForMessageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(1).optional(),
  custom_id: z.string(),
  placeholder: z.nullable(z.string()).optional(),
  min_values: z.nullable(z.number().int()).optional(),
  max_values: z.nullable(z.number().int()).optional(),
  disabled: z.nullable(z.boolean()).optional(),
  options: z.array(StringSelectOptionForMessageRequest$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "custom_id": "customId",
    "min_values": "minValues",
    "max_values": "maxValues",
  });
});

/** @internal */
export type StringSelectComponentForMessageRequest$Outbound = {
  type: 1;
  custom_id: string;
  placeholder?: string | null | undefined;
  min_values?: number | null | undefined;
  max_values?: number | null | undefined;
  disabled?: boolean | null | undefined;
  options: Array<StringSelectOptionForMessageRequest$Outbound>;
};

/** @internal */
export const StringSelectComponentForMessageRequest$outboundSchema: z.ZodType<
  StringSelectComponentForMessageRequest$Outbound,
  z.ZodTypeDef,
  StringSelectComponentForMessageRequest
> = z.object({
  type: z.literal(1).default(1 as const),
  customId: z.string(),
  placeholder: z.nullable(z.string()).optional(),
  minValues: z.nullable(z.number().int()).optional(),
  maxValues: z.nullable(z.number().int()).optional(),
  disabled: z.nullable(z.boolean()).optional(),
  options: z.array(StringSelectOptionForMessageRequest$outboundSchema),
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
export namespace StringSelectComponentForMessageRequest$ {
  /** @deprecated use `StringSelectComponentForMessageRequest$inboundSchema` instead. */
  export const inboundSchema =
    StringSelectComponentForMessageRequest$inboundSchema;
  /** @deprecated use `StringSelectComponentForMessageRequest$outboundSchema` instead. */
  export const outboundSchema =
    StringSelectComponentForMessageRequest$outboundSchema;
  /** @deprecated use `StringSelectComponentForMessageRequest$Outbound` instead. */
  export type Outbound = StringSelectComponentForMessageRequest$Outbound;
}

export function stringSelectComponentForMessageRequestToJSON(
  stringSelectComponentForMessageRequest:
    StringSelectComponentForMessageRequest,
): string {
  return JSON.stringify(
    StringSelectComponentForMessageRequest$outboundSchema.parse(
      stringSelectComponentForMessageRequest,
    ),
  );
}

export function stringSelectComponentForMessageRequestFromJSON(
  jsonString: string,
): SafeParseResult<StringSelectComponentForMessageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      StringSelectComponentForMessageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StringSelectComponentForMessageRequest' from JSON`,
  );
}
