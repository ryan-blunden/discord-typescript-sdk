/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type MessageEmbedVideoResponse = {
  url?: string | null | undefined;
  proxyUrl?: string | null | undefined;
  width?: number | null | undefined;
  height?: number | null | undefined;
  placeholder?: string | null | undefined;
  placeholderVersion?: number | null | undefined;
  flags?: number | null | undefined;
};

/** @internal */
export const MessageEmbedVideoResponse$inboundSchema: z.ZodType<
  MessageEmbedVideoResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.nullable(z.string()).optional(),
  proxy_url: z.nullable(z.string()).optional(),
  width: z.nullable(z.number().int()).optional(),
  height: z.nullable(z.number().int()).optional(),
  placeholder: z.nullable(z.string()).optional(),
  placeholder_version: z.nullable(z.number().int()).optional(),
  flags: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "proxy_url": "proxyUrl",
    "placeholder_version": "placeholderVersion",
  });
});

/** @internal */
export type MessageEmbedVideoResponse$Outbound = {
  url?: string | null | undefined;
  proxy_url?: string | null | undefined;
  width?: number | null | undefined;
  height?: number | null | undefined;
  placeholder?: string | null | undefined;
  placeholder_version?: number | null | undefined;
  flags?: number | null | undefined;
};

/** @internal */
export const MessageEmbedVideoResponse$outboundSchema: z.ZodType<
  MessageEmbedVideoResponse$Outbound,
  z.ZodTypeDef,
  MessageEmbedVideoResponse
> = z.object({
  url: z.nullable(z.string()).optional(),
  proxyUrl: z.nullable(z.string()).optional(),
  width: z.nullable(z.number().int()).optional(),
  height: z.nullable(z.number().int()).optional(),
  placeholder: z.nullable(z.string()).optional(),
  placeholderVersion: z.nullable(z.number().int()).optional(),
  flags: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    proxyUrl: "proxy_url",
    placeholderVersion: "placeholder_version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageEmbedVideoResponse$ {
  /** @deprecated use `MessageEmbedVideoResponse$inboundSchema` instead. */
  export const inboundSchema = MessageEmbedVideoResponse$inboundSchema;
  /** @deprecated use `MessageEmbedVideoResponse$outboundSchema` instead. */
  export const outboundSchema = MessageEmbedVideoResponse$outboundSchema;
  /** @deprecated use `MessageEmbedVideoResponse$Outbound` instead. */
  export type Outbound = MessageEmbedVideoResponse$Outbound;
}