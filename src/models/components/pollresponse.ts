/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PollAnswerResponse,
  PollAnswerResponse$inboundSchema,
  PollAnswerResponse$Outbound,
  PollAnswerResponse$outboundSchema,
} from "./pollanswerresponse.js";
import {
  PollMediaResponse,
  PollMediaResponse$inboundSchema,
  PollMediaResponse$Outbound,
  PollMediaResponse$outboundSchema,
} from "./pollmediaresponse.js";
import {
  PollResultsResponse,
  PollResultsResponse$inboundSchema,
  PollResultsResponse$Outbound,
  PollResultsResponse$outboundSchema,
} from "./pollresultsresponse.js";

export type PollResponse = {
  question: PollMediaResponse;
  answers: Array<PollAnswerResponse>;
  expiry: Date;
  allowMultiselect: boolean;
  layoutType: number;
  results: PollResultsResponse;
};

/** @internal */
export const PollResponse$inboundSchema: z.ZodType<
  PollResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  question: PollMediaResponse$inboundSchema,
  answers: z.array(PollAnswerResponse$inboundSchema),
  expiry: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  allow_multiselect: z.boolean(),
  layout_type: z.number().int(),
  results: PollResultsResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "allow_multiselect": "allowMultiselect",
    "layout_type": "layoutType",
  });
});

/** @internal */
export type PollResponse$Outbound = {
  question: PollMediaResponse$Outbound;
  answers: Array<PollAnswerResponse$Outbound>;
  expiry: string;
  allow_multiselect: boolean;
  layout_type: number;
  results: PollResultsResponse$Outbound;
};

/** @internal */
export const PollResponse$outboundSchema: z.ZodType<
  PollResponse$Outbound,
  z.ZodTypeDef,
  PollResponse
> = z.object({
  question: PollMediaResponse$outboundSchema,
  answers: z.array(PollAnswerResponse$outboundSchema),
  expiry: z.date().transform(v => v.toISOString()),
  allowMultiselect: z.boolean(),
  layoutType: z.number().int(),
  results: PollResultsResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    allowMultiselect: "allow_multiselect",
    layoutType: "layout_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PollResponse$ {
  /** @deprecated use `PollResponse$inboundSchema` instead. */
  export const inboundSchema = PollResponse$inboundSchema;
  /** @deprecated use `PollResponse$outboundSchema` instead. */
  export const outboundSchema = PollResponse$outboundSchema;
  /** @deprecated use `PollResponse$Outbound` instead. */
  export type Outbound = PollResponse$Outbound;
}

export function pollResponseToJSON(pollResponse: PollResponse): string {
  return JSON.stringify(PollResponse$outboundSchema.parse(pollResponse));
}

export function pollResponseFromJSON(
  jsonString: string,
): SafeParseResult<PollResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PollResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PollResponse' from JSON`,
  );
}
