/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateChannelInviteRequestBody =
  | components.CreateGroupDMInviteRequest
  | components.CreateGuildInviteRequest;

export type CreateChannelInviteRequest = {
  channelId: string;
  requestBody:
    | components.CreateGroupDMInviteRequest
    | components.CreateGuildInviteRequest;
};

/**
 * 200 response for create_channel_invite
 */
export type CreateChannelInviteResponseBody =
  | components.GroupDMInviteResponse
  | components.FriendInviteResponse
  | components.GuildInviteResponse;

/** @internal */
export const CreateChannelInviteRequestBody$inboundSchema: z.ZodType<
  CreateChannelInviteRequestBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.CreateGroupDMInviteRequest$inboundSchema,
  components.CreateGuildInviteRequest$inboundSchema,
]);

/** @internal */
export type CreateChannelInviteRequestBody$Outbound =
  | components.CreateGroupDMInviteRequest$Outbound
  | components.CreateGuildInviteRequest$Outbound;

/** @internal */
export const CreateChannelInviteRequestBody$outboundSchema: z.ZodType<
  CreateChannelInviteRequestBody$Outbound,
  z.ZodTypeDef,
  CreateChannelInviteRequestBody
> = z.union([
  components.CreateGroupDMInviteRequest$outboundSchema,
  components.CreateGuildInviteRequest$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateChannelInviteRequestBody$ {
  /** @deprecated use `CreateChannelInviteRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateChannelInviteRequestBody$inboundSchema;
  /** @deprecated use `CreateChannelInviteRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateChannelInviteRequestBody$outboundSchema;
  /** @deprecated use `CreateChannelInviteRequestBody$Outbound` instead. */
  export type Outbound = CreateChannelInviteRequestBody$Outbound;
}

export function createChannelInviteRequestBodyToJSON(
  createChannelInviteRequestBody: CreateChannelInviteRequestBody,
): string {
  return JSON.stringify(
    CreateChannelInviteRequestBody$outboundSchema.parse(
      createChannelInviteRequestBody,
    ),
  );
}

export function createChannelInviteRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateChannelInviteRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateChannelInviteRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateChannelInviteRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateChannelInviteRequest$inboundSchema: z.ZodType<
  CreateChannelInviteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  RequestBody: z.union([
    components.CreateGroupDMInviteRequest$inboundSchema,
    components.CreateGuildInviteRequest$inboundSchema,
  ]),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateChannelInviteRequest$Outbound = {
  channel_id: string;
  RequestBody:
    | components.CreateGroupDMInviteRequest$Outbound
    | components.CreateGuildInviteRequest$Outbound;
};

/** @internal */
export const CreateChannelInviteRequest$outboundSchema: z.ZodType<
  CreateChannelInviteRequest$Outbound,
  z.ZodTypeDef,
  CreateChannelInviteRequest
> = z.object({
  channelId: z.string(),
  requestBody: z.union([
    components.CreateGroupDMInviteRequest$outboundSchema,
    components.CreateGuildInviteRequest$outboundSchema,
  ]),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateChannelInviteRequest$ {
  /** @deprecated use `CreateChannelInviteRequest$inboundSchema` instead. */
  export const inboundSchema = CreateChannelInviteRequest$inboundSchema;
  /** @deprecated use `CreateChannelInviteRequest$outboundSchema` instead. */
  export const outboundSchema = CreateChannelInviteRequest$outboundSchema;
  /** @deprecated use `CreateChannelInviteRequest$Outbound` instead. */
  export type Outbound = CreateChannelInviteRequest$Outbound;
}

export function createChannelInviteRequestToJSON(
  createChannelInviteRequest: CreateChannelInviteRequest,
): string {
  return JSON.stringify(
    CreateChannelInviteRequest$outboundSchema.parse(createChannelInviteRequest),
  );
}

export function createChannelInviteRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateChannelInviteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateChannelInviteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateChannelInviteRequest' from JSON`,
  );
}

/** @internal */
export const CreateChannelInviteResponseBody$inboundSchema: z.ZodType<
  CreateChannelInviteResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.GroupDMInviteResponse$inboundSchema,
  components.FriendInviteResponse$inboundSchema,
  components.GuildInviteResponse$inboundSchema,
]);

/** @internal */
export type CreateChannelInviteResponseBody$Outbound =
  | components.GroupDMInviteResponse$Outbound
  | components.FriendInviteResponse$Outbound
  | components.GuildInviteResponse$Outbound;

/** @internal */
export const CreateChannelInviteResponseBody$outboundSchema: z.ZodType<
  CreateChannelInviteResponseBody$Outbound,
  z.ZodTypeDef,
  CreateChannelInviteResponseBody
> = z.union([
  components.GroupDMInviteResponse$outboundSchema,
  components.FriendInviteResponse$outboundSchema,
  components.GuildInviteResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateChannelInviteResponseBody$ {
  /** @deprecated use `CreateChannelInviteResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateChannelInviteResponseBody$inboundSchema;
  /** @deprecated use `CreateChannelInviteResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateChannelInviteResponseBody$outboundSchema;
  /** @deprecated use `CreateChannelInviteResponseBody$Outbound` instead. */
  export type Outbound = CreateChannelInviteResponseBody$Outbound;
}

export function createChannelInviteResponseBodyToJSON(
  createChannelInviteResponseBody: CreateChannelInviteResponseBody,
): string {
  return JSON.stringify(
    CreateChannelInviteResponseBody$outboundSchema.parse(
      createChannelInviteResponseBody,
    ),
  );
}

export function createChannelInviteResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateChannelInviteResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateChannelInviteResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateChannelInviteResponseBody' from JSON`,
  );
}
