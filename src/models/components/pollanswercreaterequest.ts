/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PollMediaCreateRequest,
  PollMediaCreateRequest$inboundSchema,
  PollMediaCreateRequest$Outbound,
  PollMediaCreateRequest$outboundSchema,
} from "./pollmediacreaterequest.js";

export type PollAnswerCreateRequest = {
  pollMedia: PollMediaCreateRequest;
};

/** @internal */
export const PollAnswerCreateRequest$inboundSchema: z.ZodType<
  PollAnswerCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  poll_media: PollMediaCreateRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "poll_media": "pollMedia",
  });
});

/** @internal */
export type PollAnswerCreateRequest$Outbound = {
  poll_media: PollMediaCreateRequest$Outbound;
};

/** @internal */
export const PollAnswerCreateRequest$outboundSchema: z.ZodType<
  PollAnswerCreateRequest$Outbound,
  z.ZodTypeDef,
  PollAnswerCreateRequest
> = z.object({
  pollMedia: PollMediaCreateRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    pollMedia: "poll_media",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PollAnswerCreateRequest$ {
  /** @deprecated use `PollAnswerCreateRequest$inboundSchema` instead. */
  export const inboundSchema = PollAnswerCreateRequest$inboundSchema;
  /** @deprecated use `PollAnswerCreateRequest$outboundSchema` instead. */
  export const outboundSchema = PollAnswerCreateRequest$outboundSchema;
  /** @deprecated use `PollAnswerCreateRequest$Outbound` instead. */
  export type Outbound = PollAnswerCreateRequest$Outbound;
}

export function pollAnswerCreateRequestToJSON(
  pollAnswerCreateRequest: PollAnswerCreateRequest,
): string {
  return JSON.stringify(
    PollAnswerCreateRequest$outboundSchema.parse(pollAnswerCreateRequest),
  );
}

export function pollAnswerCreateRequestFromJSON(
  jsonString: string,
): SafeParseResult<PollAnswerCreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PollAnswerCreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PollAnswerCreateRequest' from JSON`,
  );
}
