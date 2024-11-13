/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetWebhookMessageSecurity = {
  botToken?: string | undefined;
};

export type GetWebhookMessageRequest = {
  webhookId: string;
  webhookToken: string;
  messageId: string;
  threadId?: string | undefined;
};

/** @internal */
export const GetWebhookMessageSecurity$inboundSchema: z.ZodType<
  GetWebhookMessageSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  BotToken: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "BotToken": "botToken",
  });
});

/** @internal */
export type GetWebhookMessageSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const GetWebhookMessageSecurity$outboundSchema: z.ZodType<
  GetWebhookMessageSecurity$Outbound,
  z.ZodTypeDef,
  GetWebhookMessageSecurity
> = z.object({
  botToken: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    botToken: "BotToken",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWebhookMessageSecurity$ {
  /** @deprecated use `GetWebhookMessageSecurity$inboundSchema` instead. */
  export const inboundSchema = GetWebhookMessageSecurity$inboundSchema;
  /** @deprecated use `GetWebhookMessageSecurity$outboundSchema` instead. */
  export const outboundSchema = GetWebhookMessageSecurity$outboundSchema;
  /** @deprecated use `GetWebhookMessageSecurity$Outbound` instead. */
  export type Outbound = GetWebhookMessageSecurity$Outbound;
}

/** @internal */
export const GetWebhookMessageRequest$inboundSchema: z.ZodType<
  GetWebhookMessageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  webhook_id: z.string(),
  webhook_token: z.string(),
  message_id: z.string(),
  thread_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "webhook_id": "webhookId",
    "webhook_token": "webhookToken",
    "message_id": "messageId",
    "thread_id": "threadId",
  });
});

/** @internal */
export type GetWebhookMessageRequest$Outbound = {
  webhook_id: string;
  webhook_token: string;
  message_id: string;
  thread_id?: string | undefined;
};

/** @internal */
export const GetWebhookMessageRequest$outboundSchema: z.ZodType<
  GetWebhookMessageRequest$Outbound,
  z.ZodTypeDef,
  GetWebhookMessageRequest
> = z.object({
  webhookId: z.string(),
  webhookToken: z.string(),
  messageId: z.string(),
  threadId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    webhookId: "webhook_id",
    webhookToken: "webhook_token",
    messageId: "message_id",
    threadId: "thread_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWebhookMessageRequest$ {
  /** @deprecated use `GetWebhookMessageRequest$inboundSchema` instead. */
  export const inboundSchema = GetWebhookMessageRequest$inboundSchema;
  /** @deprecated use `GetWebhookMessageRequest$outboundSchema` instead. */
  export const outboundSchema = GetWebhookMessageRequest$outboundSchema;
  /** @deprecated use `GetWebhookMessageRequest$Outbound` instead. */
  export type Outbound = GetWebhookMessageRequest$Outbound;
}