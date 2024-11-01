/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  PollResultsEntryResponse,
  PollResultsEntryResponse$inboundSchema,
  PollResultsEntryResponse$Outbound,
  PollResultsEntryResponse$outboundSchema,
} from "./pollresultsentryresponse.js";

export type PollResultsResponse = {
  answerCounts?: Array<PollResultsEntryResponse> | null | undefined;
  isFinalized: boolean;
};

/** @internal */
export const PollResultsResponse$inboundSchema: z.ZodType<
  PollResultsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  answer_counts: z.nullable(z.array(PollResultsEntryResponse$inboundSchema))
    .optional(),
  is_finalized: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "answer_counts": "answerCounts",
    "is_finalized": "isFinalized",
  });
});

/** @internal */
export type PollResultsResponse$Outbound = {
  answer_counts?: Array<PollResultsEntryResponse$Outbound> | null | undefined;
  is_finalized: boolean;
};

/** @internal */
export const PollResultsResponse$outboundSchema: z.ZodType<
  PollResultsResponse$Outbound,
  z.ZodTypeDef,
  PollResultsResponse
> = z.object({
  answerCounts: z.nullable(z.array(PollResultsEntryResponse$outboundSchema))
    .optional(),
  isFinalized: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    answerCounts: "answer_counts",
    isFinalized: "is_finalized",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PollResultsResponse$ {
  /** @deprecated use `PollResultsResponse$inboundSchema` instead. */
  export const inboundSchema = PollResultsResponse$inboundSchema;
  /** @deprecated use `PollResultsResponse$outboundSchema` instead. */
  export const outboundSchema = PollResultsResponse$outboundSchema;
  /** @deprecated use `PollResultsResponse$Outbound` instead. */
  export type Outbound = PollResultsResponse$Outbound;
}
