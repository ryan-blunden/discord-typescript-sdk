/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteOriginalWebhookMessageSecurity = {
  botToken?: string | undefined;
};

export type DeleteOriginalWebhookMessageRequest = {
  webhookId: string;
  webhookToken: string;
  threadId?: string | undefined;
};

/** @internal */
export const DeleteOriginalWebhookMessageSecurity$inboundSchema: z.ZodType<
  DeleteOriginalWebhookMessageSecurity,
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
export type DeleteOriginalWebhookMessageSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const DeleteOriginalWebhookMessageSecurity$outboundSchema: z.ZodType<
  DeleteOriginalWebhookMessageSecurity$Outbound,
  z.ZodTypeDef,
  DeleteOriginalWebhookMessageSecurity
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
export namespace DeleteOriginalWebhookMessageSecurity$ {
  /** @deprecated use `DeleteOriginalWebhookMessageSecurity$inboundSchema` instead. */
  export const inboundSchema =
    DeleteOriginalWebhookMessageSecurity$inboundSchema;
  /** @deprecated use `DeleteOriginalWebhookMessageSecurity$outboundSchema` instead. */
  export const outboundSchema =
    DeleteOriginalWebhookMessageSecurity$outboundSchema;
  /** @deprecated use `DeleteOriginalWebhookMessageSecurity$Outbound` instead. */
  export type Outbound = DeleteOriginalWebhookMessageSecurity$Outbound;
}

export function deleteOriginalWebhookMessageSecurityToJSON(
  deleteOriginalWebhookMessageSecurity: DeleteOriginalWebhookMessageSecurity,
): string {
  return JSON.stringify(
    DeleteOriginalWebhookMessageSecurity$outboundSchema.parse(
      deleteOriginalWebhookMessageSecurity,
    ),
  );
}

export function deleteOriginalWebhookMessageSecurityFromJSON(
  jsonString: string,
): SafeParseResult<DeleteOriginalWebhookMessageSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteOriginalWebhookMessageSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteOriginalWebhookMessageSecurity' from JSON`,
  );
}

/** @internal */
export const DeleteOriginalWebhookMessageRequest$inboundSchema: z.ZodType<
  DeleteOriginalWebhookMessageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  webhook_id: z.string(),
  webhook_token: z.string(),
  thread_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "webhook_id": "webhookId",
    "webhook_token": "webhookToken",
    "thread_id": "threadId",
  });
});

/** @internal */
export type DeleteOriginalWebhookMessageRequest$Outbound = {
  webhook_id: string;
  webhook_token: string;
  thread_id?: string | undefined;
};

/** @internal */
export const DeleteOriginalWebhookMessageRequest$outboundSchema: z.ZodType<
  DeleteOriginalWebhookMessageRequest$Outbound,
  z.ZodTypeDef,
  DeleteOriginalWebhookMessageRequest
> = z.object({
  webhookId: z.string(),
  webhookToken: z.string(),
  threadId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    webhookId: "webhook_id",
    webhookToken: "webhook_token",
    threadId: "thread_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteOriginalWebhookMessageRequest$ {
  /** @deprecated use `DeleteOriginalWebhookMessageRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteOriginalWebhookMessageRequest$inboundSchema;
  /** @deprecated use `DeleteOriginalWebhookMessageRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteOriginalWebhookMessageRequest$outboundSchema;
  /** @deprecated use `DeleteOriginalWebhookMessageRequest$Outbound` instead. */
  export type Outbound = DeleteOriginalWebhookMessageRequest$Outbound;
}

export function deleteOriginalWebhookMessageRequestToJSON(
  deleteOriginalWebhookMessageRequest: DeleteOriginalWebhookMessageRequest,
): string {
  return JSON.stringify(
    DeleteOriginalWebhookMessageRequest$outboundSchema.parse(
      deleteOriginalWebhookMessageRequest,
    ),
  );
}

export function deleteOriginalWebhookMessageRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteOriginalWebhookMessageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteOriginalWebhookMessageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteOriginalWebhookMessageRequest' from JSON`,
  );
}
