/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  PollMediaResponse,
  PollMediaResponse$inboundSchema,
  PollMediaResponse$Outbound,
  PollMediaResponse$outboundSchema,
} from "./pollmediaresponse.js";

export type PollAnswerResponse = {
  answerId: number;
  pollMedia: PollMediaResponse;
};

/** @internal */
export const PollAnswerResponse$inboundSchema: z.ZodType<
  PollAnswerResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  answer_id: z.number().int(),
  poll_media: PollMediaResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "answer_id": "answerId",
    "poll_media": "pollMedia",
  });
});

/** @internal */
export type PollAnswerResponse$Outbound = {
  answer_id: number;
  poll_media: PollMediaResponse$Outbound;
};

/** @internal */
export const PollAnswerResponse$outboundSchema: z.ZodType<
  PollAnswerResponse$Outbound,
  z.ZodTypeDef,
  PollAnswerResponse
> = z.object({
  answerId: z.number().int(),
  pollMedia: PollMediaResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    answerId: "answer_id",
    pollMedia: "poll_media",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PollAnswerResponse$ {
  /** @deprecated use `PollAnswerResponse$inboundSchema` instead. */
  export const inboundSchema = PollAnswerResponse$inboundSchema;
  /** @deprecated use `PollAnswerResponse$outboundSchema` instead. */
  export const outboundSchema = PollAnswerResponse$outboundSchema;
  /** @deprecated use `PollAnswerResponse$Outbound` instead. */
  export type Outbound = PollAnswerResponse$Outbound;
}