/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComponentEmojiResponse = {
  id?: string | null | undefined;
  name: string;
  animated?: boolean | null | undefined;
};

/** @internal */
export const ComponentEmojiResponse$inboundSchema: z.ZodType<
  ComponentEmojiResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.string(),
  animated: z.nullable(z.boolean()).optional(),
});

/** @internal */
export type ComponentEmojiResponse$Outbound = {
  id?: string | null | undefined;
  name: string;
  animated?: boolean | null | undefined;
};

/** @internal */
export const ComponentEmojiResponse$outboundSchema: z.ZodType<
  ComponentEmojiResponse$Outbound,
  z.ZodTypeDef,
  ComponentEmojiResponse
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.string(),
  animated: z.nullable(z.boolean()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComponentEmojiResponse$ {
  /** @deprecated use `ComponentEmojiResponse$inboundSchema` instead. */
  export const inboundSchema = ComponentEmojiResponse$inboundSchema;
  /** @deprecated use `ComponentEmojiResponse$outboundSchema` instead. */
  export const outboundSchema = ComponentEmojiResponse$outboundSchema;
  /** @deprecated use `ComponentEmojiResponse$Outbound` instead. */
  export type Outbound = ComponentEmojiResponse$Outbound;
}

export function componentEmojiResponseToJSON(
  componentEmojiResponse: ComponentEmojiResponse,
): string {
  return JSON.stringify(
    ComponentEmojiResponse$outboundSchema.parse(componentEmojiResponse),
  );
}

export function componentEmojiResponseFromJSON(
  jsonString: string,
): SafeParseResult<ComponentEmojiResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ComponentEmojiResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComponentEmojiResponse' from JSON`,
  );
}
