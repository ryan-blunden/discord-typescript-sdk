/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  InviteChannelResponse,
  InviteChannelResponse$inboundSchema,
  InviteChannelResponse$Outbound,
  InviteChannelResponse$outboundSchema,
} from "./invitechannelresponse.js";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";

export type FriendInviteResponse = {
  type?: 0 | undefined;
  code: string;
  inviter?: UserResponse | null | undefined;
  maxAge?: number | null | undefined;
  createdAt?: Date | null | undefined;
  expiresAt?: Date | null | undefined;
  friendsCount?: number | null | undefined;
  channel?: InviteChannelResponse | null | undefined;
  isContact?: boolean | null | undefined;
  uses?: number | null | undefined;
  maxUses?: number | null | undefined;
  flags?: number | null | undefined;
};

/** @internal */
export const FriendInviteResponse$inboundSchema: z.ZodType<
  FriendInviteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(0).optional(),
  code: z.string(),
  inviter: z.nullable(UserResponse$inboundSchema).optional(),
  max_age: z.nullable(z.number().int()).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  expires_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  friends_count: z.nullable(z.number().int()).optional(),
  channel: z.nullable(InviteChannelResponse$inboundSchema).optional(),
  is_contact: z.nullable(z.boolean()).optional(),
  uses: z.nullable(z.number().int()).optional(),
  max_uses: z.nullable(z.number().int()).optional(),
  flags: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "max_age": "maxAge",
    "created_at": "createdAt",
    "expires_at": "expiresAt",
    "friends_count": "friendsCount",
    "is_contact": "isContact",
    "max_uses": "maxUses",
  });
});

/** @internal */
export type FriendInviteResponse$Outbound = {
  type: 0;
  code: string;
  inviter?: UserResponse$Outbound | null | undefined;
  max_age?: number | null | undefined;
  created_at?: string | null | undefined;
  expires_at?: string | null | undefined;
  friends_count?: number | null | undefined;
  channel?: InviteChannelResponse$Outbound | null | undefined;
  is_contact?: boolean | null | undefined;
  uses?: number | null | undefined;
  max_uses?: number | null | undefined;
  flags?: number | null | undefined;
};

/** @internal */
export const FriendInviteResponse$outboundSchema: z.ZodType<
  FriendInviteResponse$Outbound,
  z.ZodTypeDef,
  FriendInviteResponse
> = z.object({
  type: z.literal(0).default(0 as const),
  code: z.string(),
  inviter: z.nullable(UserResponse$outboundSchema).optional(),
  maxAge: z.nullable(z.number().int()).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  expiresAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  friendsCount: z.nullable(z.number().int()).optional(),
  channel: z.nullable(InviteChannelResponse$outboundSchema).optional(),
  isContact: z.nullable(z.boolean()).optional(),
  uses: z.nullable(z.number().int()).optional(),
  maxUses: z.nullable(z.number().int()).optional(),
  flags: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    maxAge: "max_age",
    createdAt: "created_at",
    expiresAt: "expires_at",
    friendsCount: "friends_count",
    isContact: "is_contact",
    maxUses: "max_uses",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FriendInviteResponse$ {
  /** @deprecated use `FriendInviteResponse$inboundSchema` instead. */
  export const inboundSchema = FriendInviteResponse$inboundSchema;
  /** @deprecated use `FriendInviteResponse$outboundSchema` instead. */
  export const outboundSchema = FriendInviteResponse$outboundSchema;
  /** @deprecated use `FriendInviteResponse$Outbound` instead. */
  export type Outbound = FriendInviteResponse$Outbound;
}

export function friendInviteResponseToJSON(
  friendInviteResponse: FriendInviteResponse,
): string {
  return JSON.stringify(
    FriendInviteResponse$outboundSchema.parse(friendInviteResponse),
  );
}

export function friendInviteResponseFromJSON(
  jsonString: string,
): SafeParseResult<FriendInviteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FriendInviteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FriendInviteResponse' from JSON`,
  );
}
