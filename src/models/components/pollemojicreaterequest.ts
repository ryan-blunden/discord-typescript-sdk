/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PollEmojiCreateRequest = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  animated?: boolean | null | undefined;
};

/** @internal */
export const PollEmojiCreateRequest$inboundSchema: z.ZodType<
  PollEmojiCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  animated: z.nullable(z.boolean()).optional(),
});

/** @internal */
export type PollEmojiCreateRequest$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  animated?: boolean | null | undefined;
};

/** @internal */
export const PollEmojiCreateRequest$outboundSchema: z.ZodType<
  PollEmojiCreateRequest$Outbound,
  z.ZodTypeDef,
  PollEmojiCreateRequest
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  animated: z.nullable(z.boolean()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PollEmojiCreateRequest$ {
  /** @deprecated use `PollEmojiCreateRequest$inboundSchema` instead. */
  export const inboundSchema = PollEmojiCreateRequest$inboundSchema;
  /** @deprecated use `PollEmojiCreateRequest$outboundSchema` instead. */
  export const outboundSchema = PollEmojiCreateRequest$outboundSchema;
  /** @deprecated use `PollEmojiCreateRequest$Outbound` instead. */
  export type Outbound = PollEmojiCreateRequest$Outbound;
}

export function pollEmojiCreateRequestToJSON(
  pollEmojiCreateRequest: PollEmojiCreateRequest,
): string {
  return JSON.stringify(
    PollEmojiCreateRequest$outboundSchema.parse(pollEmojiCreateRequest),
  );
}

export function pollEmojiCreateRequestFromJSON(
  jsonString: string,
): SafeParseResult<PollEmojiCreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PollEmojiCreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PollEmojiCreateRequest' from JSON`,
  );
}
