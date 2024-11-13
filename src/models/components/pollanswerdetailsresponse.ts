/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";

export type PollAnswerDetailsResponse = {
  users?: Array<UserResponse> | null | undefined;
};

/** @internal */
export const PollAnswerDetailsResponse$inboundSchema: z.ZodType<
  PollAnswerDetailsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  users: z.nullable(z.array(UserResponse$inboundSchema)).optional(),
});

/** @internal */
export type PollAnswerDetailsResponse$Outbound = {
  users?: Array<UserResponse$Outbound> | null | undefined;
};

/** @internal */
export const PollAnswerDetailsResponse$outboundSchema: z.ZodType<
  PollAnswerDetailsResponse$Outbound,
  z.ZodTypeDef,
  PollAnswerDetailsResponse
> = z.object({
  users: z.nullable(z.array(UserResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PollAnswerDetailsResponse$ {
  /** @deprecated use `PollAnswerDetailsResponse$inboundSchema` instead. */
  export const inboundSchema = PollAnswerDetailsResponse$inboundSchema;
  /** @deprecated use `PollAnswerDetailsResponse$outboundSchema` instead. */
  export const outboundSchema = PollAnswerDetailsResponse$outboundSchema;
  /** @deprecated use `PollAnswerDetailsResponse$Outbound` instead. */
  export type Outbound = PollAnswerDetailsResponse$Outbound;
}