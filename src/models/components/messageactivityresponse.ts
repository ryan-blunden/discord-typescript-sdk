/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type MessageActivityResponse = {};

/** @internal */
export const MessageActivityResponse$inboundSchema: z.ZodType<
  MessageActivityResponse,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type MessageActivityResponse$Outbound = {};

/** @internal */
export const MessageActivityResponse$outboundSchema: z.ZodType<
  MessageActivityResponse$Outbound,
  z.ZodTypeDef,
  MessageActivityResponse
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageActivityResponse$ {
  /** @deprecated use `MessageActivityResponse$inboundSchema` instead. */
  export const inboundSchema = MessageActivityResponse$inboundSchema;
  /** @deprecated use `MessageActivityResponse$outboundSchema` instead. */
  export const outboundSchema = MessageActivityResponse$outboundSchema;
  /** @deprecated use `MessageActivityResponse$Outbound` instead. */
  export type Outbound = MessageActivityResponse$Outbound;
}