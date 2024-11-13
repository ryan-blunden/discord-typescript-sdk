/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  WebhookSlackEmbedField,
  WebhookSlackEmbedField$inboundSchema,
  WebhookSlackEmbedField$Outbound,
  WebhookSlackEmbedField$outboundSchema,
} from "./webhookslackembedfield.js";

export type WebhookSlackEmbed = {
  title?: string | null | undefined;
  titleLink?: string | null | undefined;
  text?: string | null | undefined;
  color?: string | null | undefined;
  ts?: number | null | undefined;
  pretext?: string | null | undefined;
  footer?: string | null | undefined;
  footerIcon?: string | null | undefined;
  authorName?: string | null | undefined;
  authorLink?: string | null | undefined;
  authorIcon?: string | null | undefined;
  imageUrl?: string | null | undefined;
  thumbUrl?: string | null | undefined;
  fields?: Array<WebhookSlackEmbedField> | null | undefined;
};

/** @internal */
export const WebhookSlackEmbed$inboundSchema: z.ZodType<
  WebhookSlackEmbed,
  z.ZodTypeDef,
  unknown
> = z.object({
  title: z.nullable(z.string()).optional(),
  title_link: z.nullable(z.string()).optional(),
  text: z.nullable(z.string()).optional(),
  color: z.nullable(z.string()).optional(),
  ts: z.nullable(z.number().int()).optional(),
  pretext: z.nullable(z.string()).optional(),
  footer: z.nullable(z.string()).optional(),
  footer_icon: z.nullable(z.string()).optional(),
  author_name: z.nullable(z.string()).optional(),
  author_link: z.nullable(z.string()).optional(),
  author_icon: z.nullable(z.string()).optional(),
  image_url: z.nullable(z.string()).optional(),
  thumb_url: z.nullable(z.string()).optional(),
  fields: z.nullable(z.array(WebhookSlackEmbedField$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "title_link": "titleLink",
    "footer_icon": "footerIcon",
    "author_name": "authorName",
    "author_link": "authorLink",
    "author_icon": "authorIcon",
    "image_url": "imageUrl",
    "thumb_url": "thumbUrl",
  });
});

/** @internal */
export type WebhookSlackEmbed$Outbound = {
  title?: string | null | undefined;
  title_link?: string | null | undefined;
  text?: string | null | undefined;
  color?: string | null | undefined;
  ts?: number | null | undefined;
  pretext?: string | null | undefined;
  footer?: string | null | undefined;
  footer_icon?: string | null | undefined;
  author_name?: string | null | undefined;
  author_link?: string | null | undefined;
  author_icon?: string | null | undefined;
  image_url?: string | null | undefined;
  thumb_url?: string | null | undefined;
  fields?: Array<WebhookSlackEmbedField$Outbound> | null | undefined;
};

/** @internal */
export const WebhookSlackEmbed$outboundSchema: z.ZodType<
  WebhookSlackEmbed$Outbound,
  z.ZodTypeDef,
  WebhookSlackEmbed
> = z.object({
  title: z.nullable(z.string()).optional(),
  titleLink: z.nullable(z.string()).optional(),
  text: z.nullable(z.string()).optional(),
  color: z.nullable(z.string()).optional(),
  ts: z.nullable(z.number().int()).optional(),
  pretext: z.nullable(z.string()).optional(),
  footer: z.nullable(z.string()).optional(),
  footerIcon: z.nullable(z.string()).optional(),
  authorName: z.nullable(z.string()).optional(),
  authorLink: z.nullable(z.string()).optional(),
  authorIcon: z.nullable(z.string()).optional(),
  imageUrl: z.nullable(z.string()).optional(),
  thumbUrl: z.nullable(z.string()).optional(),
  fields: z.nullable(z.array(WebhookSlackEmbedField$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    titleLink: "title_link",
    footerIcon: "footer_icon",
    authorName: "author_name",
    authorLink: "author_link",
    authorIcon: "author_icon",
    imageUrl: "image_url",
    thumbUrl: "thumb_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookSlackEmbed$ {
  /** @deprecated use `WebhookSlackEmbed$inboundSchema` instead. */
  export const inboundSchema = WebhookSlackEmbed$inboundSchema;
  /** @deprecated use `WebhookSlackEmbed$outboundSchema` instead. */
  export const outboundSchema = WebhookSlackEmbed$outboundSchema;
  /** @deprecated use `WebhookSlackEmbed$Outbound` instead. */
  export type Outbound = WebhookSlackEmbed$Outbound;
}