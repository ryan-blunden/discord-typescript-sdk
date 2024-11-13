/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ListGuildAuditLogEntriesRequest = {
  guildId: string;
  userId?: string | undefined;
  targetId?: string | undefined;
  actionType?: number | undefined;
  before?: string | undefined;
  after?: string | undefined;
  limit?: number | undefined;
};

/** @internal */
export const ListGuildAuditLogEntriesRequest$inboundSchema: z.ZodType<
  ListGuildAuditLogEntriesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  user_id: z.string().optional(),
  target_id: z.string().optional(),
  action_type: z.number().int().optional(),
  before: z.string().optional(),
  after: z.string().optional(),
  limit: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "user_id": "userId",
    "target_id": "targetId",
    "action_type": "actionType",
  });
});

/** @internal */
export type ListGuildAuditLogEntriesRequest$Outbound = {
  guild_id: string;
  user_id?: string | undefined;
  target_id?: string | undefined;
  action_type?: number | undefined;
  before?: string | undefined;
  after?: string | undefined;
  limit?: number | undefined;
};

/** @internal */
export const ListGuildAuditLogEntriesRequest$outboundSchema: z.ZodType<
  ListGuildAuditLogEntriesRequest$Outbound,
  z.ZodTypeDef,
  ListGuildAuditLogEntriesRequest
> = z.object({
  guildId: z.string(),
  userId: z.string().optional(),
  targetId: z.string().optional(),
  actionType: z.number().int().optional(),
  before: z.string().optional(),
  after: z.string().optional(),
  limit: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    userId: "user_id",
    targetId: "target_id",
    actionType: "action_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGuildAuditLogEntriesRequest$ {
  /** @deprecated use `ListGuildAuditLogEntriesRequest$inboundSchema` instead. */
  export const inboundSchema = ListGuildAuditLogEntriesRequest$inboundSchema;
  /** @deprecated use `ListGuildAuditLogEntriesRequest$outboundSchema` instead. */
  export const outboundSchema = ListGuildAuditLogEntriesRequest$outboundSchema;
  /** @deprecated use `ListGuildAuditLogEntriesRequest$Outbound` instead. */
  export type Outbound = ListGuildAuditLogEntriesRequest$Outbound;
}