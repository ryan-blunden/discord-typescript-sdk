/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateWebhookByTokenSecurity = {
  botToken?: string | undefined;
};

export type UpdateWebhookByTokenRequestBody = {
  name?: string | undefined;
  avatar?: string | null | undefined;
};

export type UpdateWebhookByTokenRequest = {
  webhookId: string;
  webhookToken: string;
  requestBody: UpdateWebhookByTokenRequestBody;
};

/**
 * 200 response for update_webhook_by_token
 */
export type UpdateWebhookByTokenResponseBody =
  | components.ApplicationIncomingWebhookResponse
  | components.ChannelFollowerWebhookResponse
  | components.GuildIncomingWebhookResponse;

/** @internal */
export const UpdateWebhookByTokenSecurity$inboundSchema: z.ZodType<
  UpdateWebhookByTokenSecurity,
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
export type UpdateWebhookByTokenSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const UpdateWebhookByTokenSecurity$outboundSchema: z.ZodType<
  UpdateWebhookByTokenSecurity$Outbound,
  z.ZodTypeDef,
  UpdateWebhookByTokenSecurity
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
export namespace UpdateWebhookByTokenSecurity$ {
  /** @deprecated use `UpdateWebhookByTokenSecurity$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookByTokenSecurity$inboundSchema;
  /** @deprecated use `UpdateWebhookByTokenSecurity$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookByTokenSecurity$outboundSchema;
  /** @deprecated use `UpdateWebhookByTokenSecurity$Outbound` instead. */
  export type Outbound = UpdateWebhookByTokenSecurity$Outbound;
}

export function updateWebhookByTokenSecurityToJSON(
  updateWebhookByTokenSecurity: UpdateWebhookByTokenSecurity,
): string {
  return JSON.stringify(
    UpdateWebhookByTokenSecurity$outboundSchema.parse(
      updateWebhookByTokenSecurity,
    ),
  );
}

export function updateWebhookByTokenSecurityFromJSON(
  jsonString: string,
): SafeParseResult<UpdateWebhookByTokenSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateWebhookByTokenSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateWebhookByTokenSecurity' from JSON`,
  );
}

/** @internal */
export const UpdateWebhookByTokenRequestBody$inboundSchema: z.ZodType<
  UpdateWebhookByTokenRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  avatar: z.nullable(z.string()).optional(),
});

/** @internal */
export type UpdateWebhookByTokenRequestBody$Outbound = {
  name?: string | undefined;
  avatar?: string | null | undefined;
};

/** @internal */
export const UpdateWebhookByTokenRequestBody$outboundSchema: z.ZodType<
  UpdateWebhookByTokenRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateWebhookByTokenRequestBody
> = z.object({
  name: z.string().optional(),
  avatar: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookByTokenRequestBody$ {
  /** @deprecated use `UpdateWebhookByTokenRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookByTokenRequestBody$inboundSchema;
  /** @deprecated use `UpdateWebhookByTokenRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookByTokenRequestBody$outboundSchema;
  /** @deprecated use `UpdateWebhookByTokenRequestBody$Outbound` instead. */
  export type Outbound = UpdateWebhookByTokenRequestBody$Outbound;
}

export function updateWebhookByTokenRequestBodyToJSON(
  updateWebhookByTokenRequestBody: UpdateWebhookByTokenRequestBody,
): string {
  return JSON.stringify(
    UpdateWebhookByTokenRequestBody$outboundSchema.parse(
      updateWebhookByTokenRequestBody,
    ),
  );
}

export function updateWebhookByTokenRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateWebhookByTokenRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateWebhookByTokenRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateWebhookByTokenRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateWebhookByTokenRequest$inboundSchema: z.ZodType<
  UpdateWebhookByTokenRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  webhook_id: z.string(),
  webhook_token: z.string(),
  RequestBody: z.lazy(() => UpdateWebhookByTokenRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "webhook_id": "webhookId",
    "webhook_token": "webhookToken",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateWebhookByTokenRequest$Outbound = {
  webhook_id: string;
  webhook_token: string;
  RequestBody: UpdateWebhookByTokenRequestBody$Outbound;
};

/** @internal */
export const UpdateWebhookByTokenRequest$outboundSchema: z.ZodType<
  UpdateWebhookByTokenRequest$Outbound,
  z.ZodTypeDef,
  UpdateWebhookByTokenRequest
> = z.object({
  webhookId: z.string(),
  webhookToken: z.string(),
  requestBody: z.lazy(() => UpdateWebhookByTokenRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    webhookId: "webhook_id",
    webhookToken: "webhook_token",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookByTokenRequest$ {
  /** @deprecated use `UpdateWebhookByTokenRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookByTokenRequest$inboundSchema;
  /** @deprecated use `UpdateWebhookByTokenRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookByTokenRequest$outboundSchema;
  /** @deprecated use `UpdateWebhookByTokenRequest$Outbound` instead. */
  export type Outbound = UpdateWebhookByTokenRequest$Outbound;
}

export function updateWebhookByTokenRequestToJSON(
  updateWebhookByTokenRequest: UpdateWebhookByTokenRequest,
): string {
  return JSON.stringify(
    UpdateWebhookByTokenRequest$outboundSchema.parse(
      updateWebhookByTokenRequest,
    ),
  );
}

export function updateWebhookByTokenRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateWebhookByTokenRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateWebhookByTokenRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateWebhookByTokenRequest' from JSON`,
  );
}

/** @internal */
export const UpdateWebhookByTokenResponseBody$inboundSchema: z.ZodType<
  UpdateWebhookByTokenResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.ApplicationIncomingWebhookResponse$inboundSchema,
  components.ChannelFollowerWebhookResponse$inboundSchema,
  components.GuildIncomingWebhookResponse$inboundSchema,
]);

/** @internal */
export type UpdateWebhookByTokenResponseBody$Outbound =
  | components.ApplicationIncomingWebhookResponse$Outbound
  | components.ChannelFollowerWebhookResponse$Outbound
  | components.GuildIncomingWebhookResponse$Outbound;

/** @internal */
export const UpdateWebhookByTokenResponseBody$outboundSchema: z.ZodType<
  UpdateWebhookByTokenResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateWebhookByTokenResponseBody
> = z.union([
  components.ApplicationIncomingWebhookResponse$outboundSchema,
  components.ChannelFollowerWebhookResponse$outboundSchema,
  components.GuildIncomingWebhookResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookByTokenResponseBody$ {
  /** @deprecated use `UpdateWebhookByTokenResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookByTokenResponseBody$inboundSchema;
  /** @deprecated use `UpdateWebhookByTokenResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookByTokenResponseBody$outboundSchema;
  /** @deprecated use `UpdateWebhookByTokenResponseBody$Outbound` instead. */
  export type Outbound = UpdateWebhookByTokenResponseBody$Outbound;
}

export function updateWebhookByTokenResponseBodyToJSON(
  updateWebhookByTokenResponseBody: UpdateWebhookByTokenResponseBody,
): string {
  return JSON.stringify(
    UpdateWebhookByTokenResponseBody$outboundSchema.parse(
      updateWebhookByTokenResponseBody,
    ),
  );
}

export function updateWebhookByTokenResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateWebhookByTokenResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateWebhookByTokenResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateWebhookByTokenResponseBody' from JSON`,
  );
}
