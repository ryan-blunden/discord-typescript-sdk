/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type WebhookSlackEmbedField = {
  name?: string | null | undefined;
  value?: string | null | undefined;
  inline?: boolean | null | undefined;
};

/** @internal */
export const WebhookSlackEmbedField$inboundSchema: z.ZodType<
  WebhookSlackEmbedField,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  value: z.nullable(z.string()).optional(),
  inline: z.nullable(z.boolean()).optional(),
});

/** @internal */
export type WebhookSlackEmbedField$Outbound = {
  name?: string | null | undefined;
  value?: string | null | undefined;
  inline?: boolean | null | undefined;
};

/** @internal */
export const WebhookSlackEmbedField$outboundSchema: z.ZodType<
  WebhookSlackEmbedField$Outbound,
  z.ZodTypeDef,
  WebhookSlackEmbedField
> = z.object({
  name: z.nullable(z.string()).optional(),
  value: z.nullable(z.string()).optional(),
  inline: z.nullable(z.boolean()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookSlackEmbedField$ {
  /** @deprecated use `WebhookSlackEmbedField$inboundSchema` instead. */
  export const inboundSchema = WebhookSlackEmbedField$inboundSchema;
  /** @deprecated use `WebhookSlackEmbedField$outboundSchema` instead. */
  export const outboundSchema = WebhookSlackEmbedField$outboundSchema;
  /** @deprecated use `WebhookSlackEmbedField$Outbound` instead. */
  export type Outbound = WebhookSlackEmbedField$Outbound;
}