/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type QuarantineUserActionMetadata = {};

/** @internal */
export const QuarantineUserActionMetadata$inboundSchema: z.ZodType<
  QuarantineUserActionMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type QuarantineUserActionMetadata$Outbound = {};

/** @internal */
export const QuarantineUserActionMetadata$outboundSchema: z.ZodType<
  QuarantineUserActionMetadata$Outbound,
  z.ZodTypeDef,
  QuarantineUserActionMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QuarantineUserActionMetadata$ {
  /** @deprecated use `QuarantineUserActionMetadata$inboundSchema` instead. */
  export const inboundSchema = QuarantineUserActionMetadata$inboundSchema;
  /** @deprecated use `QuarantineUserActionMetadata$outboundSchema` instead. */
  export const outboundSchema = QuarantineUserActionMetadata$outboundSchema;
  /** @deprecated use `QuarantineUserActionMetadata$Outbound` instead. */
  export type Outbound = QuarantineUserActionMetadata$Outbound;
}