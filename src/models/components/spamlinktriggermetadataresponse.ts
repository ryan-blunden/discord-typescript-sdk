/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type SpamLinkTriggerMetadataResponse = {};

/** @internal */
export const SpamLinkTriggerMetadataResponse$inboundSchema: z.ZodType<
  SpamLinkTriggerMetadataResponse,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SpamLinkTriggerMetadataResponse$Outbound = {};

/** @internal */
export const SpamLinkTriggerMetadataResponse$outboundSchema: z.ZodType<
  SpamLinkTriggerMetadataResponse$Outbound,
  z.ZodTypeDef,
  SpamLinkTriggerMetadataResponse
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SpamLinkTriggerMetadataResponse$ {
  /** @deprecated use `SpamLinkTriggerMetadataResponse$inboundSchema` instead. */
  export const inboundSchema = SpamLinkTriggerMetadataResponse$inboundSchema;
  /** @deprecated use `SpamLinkTriggerMetadataResponse$outboundSchema` instead. */
  export const outboundSchema = SpamLinkTriggerMetadataResponse$outboundSchema;
  /** @deprecated use `SpamLinkTriggerMetadataResponse$Outbound` instead. */
  export type Outbound = SpamLinkTriggerMetadataResponse$Outbound;
}
