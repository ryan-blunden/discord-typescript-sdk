/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type WebhookSourceChannelResponse = {
  id: string;
  name: string;
};

/** @internal */
export const WebhookSourceChannelResponse$inboundSchema: z.ZodType<
  WebhookSourceChannelResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
});

/** @internal */
export type WebhookSourceChannelResponse$Outbound = {
  id: string;
  name: string;
};

/** @internal */
export const WebhookSourceChannelResponse$outboundSchema: z.ZodType<
  WebhookSourceChannelResponse$Outbound,
  z.ZodTypeDef,
  WebhookSourceChannelResponse
> = z.object({
  id: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookSourceChannelResponse$ {
  /** @deprecated use `WebhookSourceChannelResponse$inboundSchema` instead. */
  export const inboundSchema = WebhookSourceChannelResponse$inboundSchema;
  /** @deprecated use `WebhookSourceChannelResponse$outboundSchema` instead. */
  export const outboundSchema = WebhookSourceChannelResponse$outboundSchema;
  /** @deprecated use `WebhookSourceChannelResponse$Outbound` instead. */
  export type Outbound = WebhookSourceChannelResponse$Outbound;
}
