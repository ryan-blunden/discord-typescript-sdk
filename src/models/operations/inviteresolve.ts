/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type InviteResolveSecurity = {
  botToken?: string | undefined;
};

export type InviteResolveRequest = {
  code: string;
  withCounts?: boolean | undefined;
  guildScheduledEventId?: string | undefined;
};

/**
 * 200 response for invite_resolve
 */
export type InviteResolveResponseBody =
  | components.GroupDMInviteResponse
  | components.FriendInviteResponse
  | components.GuildInviteResponse;

/** @internal */
export const InviteResolveSecurity$inboundSchema: z.ZodType<
  InviteResolveSecurity,
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
export type InviteResolveSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const InviteResolveSecurity$outboundSchema: z.ZodType<
  InviteResolveSecurity$Outbound,
  z.ZodTypeDef,
  InviteResolveSecurity
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
export namespace InviteResolveSecurity$ {
  /** @deprecated use `InviteResolveSecurity$inboundSchema` instead. */
  export const inboundSchema = InviteResolveSecurity$inboundSchema;
  /** @deprecated use `InviteResolveSecurity$outboundSchema` instead. */
  export const outboundSchema = InviteResolveSecurity$outboundSchema;
  /** @deprecated use `InviteResolveSecurity$Outbound` instead. */
  export type Outbound = InviteResolveSecurity$Outbound;
}

export function inviteResolveSecurityToJSON(
  inviteResolveSecurity: InviteResolveSecurity,
): string {
  return JSON.stringify(
    InviteResolveSecurity$outboundSchema.parse(inviteResolveSecurity),
  );
}

export function inviteResolveSecurityFromJSON(
  jsonString: string,
): SafeParseResult<InviteResolveSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InviteResolveSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InviteResolveSecurity' from JSON`,
  );
}

/** @internal */
export const InviteResolveRequest$inboundSchema: z.ZodType<
  InviteResolveRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string(),
  with_counts: z.boolean().optional(),
  guild_scheduled_event_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "with_counts": "withCounts",
    "guild_scheduled_event_id": "guildScheduledEventId",
  });
});

/** @internal */
export type InviteResolveRequest$Outbound = {
  code: string;
  with_counts?: boolean | undefined;
  guild_scheduled_event_id?: string | undefined;
};

/** @internal */
export const InviteResolveRequest$outboundSchema: z.ZodType<
  InviteResolveRequest$Outbound,
  z.ZodTypeDef,
  InviteResolveRequest
> = z.object({
  code: z.string(),
  withCounts: z.boolean().optional(),
  guildScheduledEventId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    withCounts: "with_counts",
    guildScheduledEventId: "guild_scheduled_event_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteResolveRequest$ {
  /** @deprecated use `InviteResolveRequest$inboundSchema` instead. */
  export const inboundSchema = InviteResolveRequest$inboundSchema;
  /** @deprecated use `InviteResolveRequest$outboundSchema` instead. */
  export const outboundSchema = InviteResolveRequest$outboundSchema;
  /** @deprecated use `InviteResolveRequest$Outbound` instead. */
  export type Outbound = InviteResolveRequest$Outbound;
}

export function inviteResolveRequestToJSON(
  inviteResolveRequest: InviteResolveRequest,
): string {
  return JSON.stringify(
    InviteResolveRequest$outboundSchema.parse(inviteResolveRequest),
  );
}

export function inviteResolveRequestFromJSON(
  jsonString: string,
): SafeParseResult<InviteResolveRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InviteResolveRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InviteResolveRequest' from JSON`,
  );
}

/** @internal */
export const InviteResolveResponseBody$inboundSchema: z.ZodType<
  InviteResolveResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.GroupDMInviteResponse$inboundSchema,
  components.FriendInviteResponse$inboundSchema,
  components.GuildInviteResponse$inboundSchema,
]);

/** @internal */
export type InviteResolveResponseBody$Outbound =
  | components.GroupDMInviteResponse$Outbound
  | components.FriendInviteResponse$Outbound
  | components.GuildInviteResponse$Outbound;

/** @internal */
export const InviteResolveResponseBody$outboundSchema: z.ZodType<
  InviteResolveResponseBody$Outbound,
  z.ZodTypeDef,
  InviteResolveResponseBody
> = z.union([
  components.GroupDMInviteResponse$outboundSchema,
  components.FriendInviteResponse$outboundSchema,
  components.GuildInviteResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteResolveResponseBody$ {
  /** @deprecated use `InviteResolveResponseBody$inboundSchema` instead. */
  export const inboundSchema = InviteResolveResponseBody$inboundSchema;
  /** @deprecated use `InviteResolveResponseBody$outboundSchema` instead. */
  export const outboundSchema = InviteResolveResponseBody$outboundSchema;
  /** @deprecated use `InviteResolveResponseBody$Outbound` instead. */
  export type Outbound = InviteResolveResponseBody$Outbound;
}

export function inviteResolveResponseBodyToJSON(
  inviteResolveResponseBody: InviteResolveResponseBody,
): string {
  return JSON.stringify(
    InviteResolveResponseBody$outboundSchema.parse(inviteResolveResponseBody),
  );
}

export function inviteResolveResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<InviteResolveResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InviteResolveResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InviteResolveResponseBody' from JSON`,
  );
}
