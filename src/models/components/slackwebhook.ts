/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  WebhookSlackEmbed,
  WebhookSlackEmbed$inboundSchema,
  WebhookSlackEmbed$Outbound,
  WebhookSlackEmbed$outboundSchema,
} from "./webhookslackembed.js";

export type SlackWebhook = {
  text?: string | null | undefined;
  username?: string | null | undefined;
  iconUrl?: string | null | undefined;
  attachments?: Array<WebhookSlackEmbed> | null | undefined;
};

/** @internal */
export const SlackWebhook$inboundSchema: z.ZodType<
  SlackWebhook,
  z.ZodTypeDef,
  unknown
> = z.object({
  text: z.nullable(z.string()).optional(),
  username: z.nullable(z.string()).optional(),
  icon_url: z.nullable(z.string()).optional(),
  attachments: z.nullable(z.array(WebhookSlackEmbed$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "icon_url": "iconUrl",
  });
});

/** @internal */
export type SlackWebhook$Outbound = {
  text?: string | null | undefined;
  username?: string | null | undefined;
  icon_url?: string | null | undefined;
  attachments?: Array<WebhookSlackEmbed$Outbound> | null | undefined;
};

/** @internal */
export const SlackWebhook$outboundSchema: z.ZodType<
  SlackWebhook$Outbound,
  z.ZodTypeDef,
  SlackWebhook
> = z.object({
  text: z.nullable(z.string()).optional(),
  username: z.nullable(z.string()).optional(),
  iconUrl: z.nullable(z.string()).optional(),
  attachments: z.nullable(z.array(WebhookSlackEmbed$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    iconUrl: "icon_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SlackWebhook$ {
  /** @deprecated use `SlackWebhook$inboundSchema` instead. */
  export const inboundSchema = SlackWebhook$inboundSchema;
  /** @deprecated use `SlackWebhook$outboundSchema` instead. */
  export const outboundSchema = SlackWebhook$outboundSchema;
  /** @deprecated use `SlackWebhook$Outbound` instead. */
  export type Outbound = SlackWebhook$Outbound;
}