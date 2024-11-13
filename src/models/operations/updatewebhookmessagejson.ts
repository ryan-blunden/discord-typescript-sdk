/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type UpdateWebhookMessageJsonSecurity = {
  botToken?: string | undefined;
};

export type UpdateWebhookMessageJsonRequest = {
  webhookId: string;
  webhookToken: string;
  messageId: string;
  threadId?: string | undefined;
  incomingWebhookUpdateRequestPartial:
    components.IncomingWebhookUpdateRequestPartial;
};

/** @internal */
export const UpdateWebhookMessageJsonSecurity$inboundSchema: z.ZodType<
  UpdateWebhookMessageJsonSecurity,
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
export type UpdateWebhookMessageJsonSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const UpdateWebhookMessageJsonSecurity$outboundSchema: z.ZodType<
  UpdateWebhookMessageJsonSecurity$Outbound,
  z.ZodTypeDef,
  UpdateWebhookMessageJsonSecurity
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
export namespace UpdateWebhookMessageJsonSecurity$ {
  /** @deprecated use `UpdateWebhookMessageJsonSecurity$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookMessageJsonSecurity$inboundSchema;
  /** @deprecated use `UpdateWebhookMessageJsonSecurity$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookMessageJsonSecurity$outboundSchema;
  /** @deprecated use `UpdateWebhookMessageJsonSecurity$Outbound` instead. */
  export type Outbound = UpdateWebhookMessageJsonSecurity$Outbound;
}

/** @internal */
export const UpdateWebhookMessageJsonRequest$inboundSchema: z.ZodType<
  UpdateWebhookMessageJsonRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  webhook_id: z.string(),
  webhook_token: z.string(),
  message_id: z.string(),
  thread_id: z.string().optional(),
  IncomingWebhookUpdateRequestPartial:
    components.IncomingWebhookUpdateRequestPartial$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "webhook_id": "webhookId",
    "webhook_token": "webhookToken",
    "message_id": "messageId",
    "thread_id": "threadId",
    "IncomingWebhookUpdateRequestPartial":
      "incomingWebhookUpdateRequestPartial",
  });
});

/** @internal */
export type UpdateWebhookMessageJsonRequest$Outbound = {
  webhook_id: string;
  webhook_token: string;
  message_id: string;
  thread_id?: string | undefined;
  IncomingWebhookUpdateRequestPartial:
    components.IncomingWebhookUpdateRequestPartial$Outbound;
};

/** @internal */
export const UpdateWebhookMessageJsonRequest$outboundSchema: z.ZodType<
  UpdateWebhookMessageJsonRequest$Outbound,
  z.ZodTypeDef,
  UpdateWebhookMessageJsonRequest
> = z.object({
  webhookId: z.string(),
  webhookToken: z.string(),
  messageId: z.string(),
  threadId: z.string().optional(),
  incomingWebhookUpdateRequestPartial:
    components.IncomingWebhookUpdateRequestPartial$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    webhookId: "webhook_id",
    webhookToken: "webhook_token",
    messageId: "message_id",
    threadId: "thread_id",
    incomingWebhookUpdateRequestPartial: "IncomingWebhookUpdateRequestPartial",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookMessageJsonRequest$ {
  /** @deprecated use `UpdateWebhookMessageJsonRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookMessageJsonRequest$inboundSchema;
  /** @deprecated use `UpdateWebhookMessageJsonRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookMessageJsonRequest$outboundSchema;
  /** @deprecated use `UpdateWebhookMessageJsonRequest$Outbound` instead. */
  export type Outbound = UpdateWebhookMessageJsonRequest$Outbound;
}