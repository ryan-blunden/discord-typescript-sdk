/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EditLobbyChannelLinkSecurity = {
  botToken?: string | undefined;
};

export type EditLobbyChannelLinkRequestBody = {
  channelId?: string | null | undefined;
};

export type EditLobbyChannelLinkRequest = {
  lobbyId: string;
  requestBody: EditLobbyChannelLinkRequestBody;
};

/** @internal */
export const EditLobbyChannelLinkSecurity$inboundSchema: z.ZodType<
  EditLobbyChannelLinkSecurity,
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
export type EditLobbyChannelLinkSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const EditLobbyChannelLinkSecurity$outboundSchema: z.ZodType<
  EditLobbyChannelLinkSecurity$Outbound,
  z.ZodTypeDef,
  EditLobbyChannelLinkSecurity
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
export namespace EditLobbyChannelLinkSecurity$ {
  /** @deprecated use `EditLobbyChannelLinkSecurity$inboundSchema` instead. */
  export const inboundSchema = EditLobbyChannelLinkSecurity$inboundSchema;
  /** @deprecated use `EditLobbyChannelLinkSecurity$outboundSchema` instead. */
  export const outboundSchema = EditLobbyChannelLinkSecurity$outboundSchema;
  /** @deprecated use `EditLobbyChannelLinkSecurity$Outbound` instead. */
  export type Outbound = EditLobbyChannelLinkSecurity$Outbound;
}

export function editLobbyChannelLinkSecurityToJSON(
  editLobbyChannelLinkSecurity: EditLobbyChannelLinkSecurity,
): string {
  return JSON.stringify(
    EditLobbyChannelLinkSecurity$outboundSchema.parse(
      editLobbyChannelLinkSecurity,
    ),
  );
}

export function editLobbyChannelLinkSecurityFromJSON(
  jsonString: string,
): SafeParseResult<EditLobbyChannelLinkSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EditLobbyChannelLinkSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EditLobbyChannelLinkSecurity' from JSON`,
  );
}

/** @internal */
export const EditLobbyChannelLinkRequestBody$inboundSchema: z.ZodType<
  EditLobbyChannelLinkRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
  });
});

/** @internal */
export type EditLobbyChannelLinkRequestBody$Outbound = {
  channel_id?: string | null | undefined;
};

/** @internal */
export const EditLobbyChannelLinkRequestBody$outboundSchema: z.ZodType<
  EditLobbyChannelLinkRequestBody$Outbound,
  z.ZodTypeDef,
  EditLobbyChannelLinkRequestBody
> = z.object({
  channelId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EditLobbyChannelLinkRequestBody$ {
  /** @deprecated use `EditLobbyChannelLinkRequestBody$inboundSchema` instead. */
  export const inboundSchema = EditLobbyChannelLinkRequestBody$inboundSchema;
  /** @deprecated use `EditLobbyChannelLinkRequestBody$outboundSchema` instead. */
  export const outboundSchema = EditLobbyChannelLinkRequestBody$outboundSchema;
  /** @deprecated use `EditLobbyChannelLinkRequestBody$Outbound` instead. */
  export type Outbound = EditLobbyChannelLinkRequestBody$Outbound;
}

export function editLobbyChannelLinkRequestBodyToJSON(
  editLobbyChannelLinkRequestBody: EditLobbyChannelLinkRequestBody,
): string {
  return JSON.stringify(
    EditLobbyChannelLinkRequestBody$outboundSchema.parse(
      editLobbyChannelLinkRequestBody,
    ),
  );
}

export function editLobbyChannelLinkRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<EditLobbyChannelLinkRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EditLobbyChannelLinkRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EditLobbyChannelLinkRequestBody' from JSON`,
  );
}

/** @internal */
export const EditLobbyChannelLinkRequest$inboundSchema: z.ZodType<
  EditLobbyChannelLinkRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  lobby_id: z.string(),
  RequestBody: z.lazy(() => EditLobbyChannelLinkRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "lobby_id": "lobbyId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type EditLobbyChannelLinkRequest$Outbound = {
  lobby_id: string;
  RequestBody: EditLobbyChannelLinkRequestBody$Outbound;
};

/** @internal */
export const EditLobbyChannelLinkRequest$outboundSchema: z.ZodType<
  EditLobbyChannelLinkRequest$Outbound,
  z.ZodTypeDef,
  EditLobbyChannelLinkRequest
> = z.object({
  lobbyId: z.string(),
  requestBody: z.lazy(() => EditLobbyChannelLinkRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    lobbyId: "lobby_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EditLobbyChannelLinkRequest$ {
  /** @deprecated use `EditLobbyChannelLinkRequest$inboundSchema` instead. */
  export const inboundSchema = EditLobbyChannelLinkRequest$inboundSchema;
  /** @deprecated use `EditLobbyChannelLinkRequest$outboundSchema` instead. */
  export const outboundSchema = EditLobbyChannelLinkRequest$outboundSchema;
  /** @deprecated use `EditLobbyChannelLinkRequest$Outbound` instead. */
  export type Outbound = EditLobbyChannelLinkRequest$Outbound;
}

export function editLobbyChannelLinkRequestToJSON(
  editLobbyChannelLinkRequest: EditLobbyChannelLinkRequest,
): string {
  return JSON.stringify(
    EditLobbyChannelLinkRequest$outboundSchema.parse(
      editLobbyChannelLinkRequest,
    ),
  );
}

export function editLobbyChannelLinkRequestFromJSON(
  jsonString: string,
): SafeParseResult<EditLobbyChannelLinkRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EditLobbyChannelLinkRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EditLobbyChannelLinkRequest' from JSON`,
  );
}
