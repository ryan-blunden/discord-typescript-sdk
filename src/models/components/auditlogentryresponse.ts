/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  AuditLogObjectChangeResponse,
  AuditLogObjectChangeResponse$inboundSchema,
  AuditLogObjectChangeResponse$Outbound,
  AuditLogObjectChangeResponse$outboundSchema,
} from "./auditlogobjectchangeresponse.js";

export type AuditLogEntryResponse = {
  id: string;
  actionType?: 1 | undefined;
  userId?: string | null | undefined;
  targetId?: string | null | undefined;
  changes?: Array<AuditLogObjectChangeResponse> | null | undefined;
  options?: { [k: string]: string } | null | undefined;
  reason?: string | null | undefined;
};

/** @internal */
export const AuditLogEntryResponse$inboundSchema: z.ZodType<
  AuditLogEntryResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  action_type: z.literal(1).optional(),
  user_id: z.nullable(z.string()).optional(),
  target_id: z.nullable(z.string()).optional(),
  changes: z.nullable(z.array(AuditLogObjectChangeResponse$inboundSchema))
    .optional(),
  options: z.nullable(z.record(z.string())).optional(),
  reason: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "action_type": "actionType",
    "user_id": "userId",
    "target_id": "targetId",
  });
});

/** @internal */
export type AuditLogEntryResponse$Outbound = {
  id: string;
  action_type: 1;
  user_id?: string | null | undefined;
  target_id?: string | null | undefined;
  changes?: Array<AuditLogObjectChangeResponse$Outbound> | null | undefined;
  options?: { [k: string]: string } | null | undefined;
  reason?: string | null | undefined;
};

/** @internal */
export const AuditLogEntryResponse$outboundSchema: z.ZodType<
  AuditLogEntryResponse$Outbound,
  z.ZodTypeDef,
  AuditLogEntryResponse
> = z.object({
  id: z.string(),
  actionType: z.literal(1).default(1 as const),
  userId: z.nullable(z.string()).optional(),
  targetId: z.nullable(z.string()).optional(),
  changes: z.nullable(z.array(AuditLogObjectChangeResponse$outboundSchema))
    .optional(),
  options: z.nullable(z.record(z.string())).optional(),
  reason: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    actionType: "action_type",
    userId: "user_id",
    targetId: "target_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuditLogEntryResponse$ {
  /** @deprecated use `AuditLogEntryResponse$inboundSchema` instead. */
  export const inboundSchema = AuditLogEntryResponse$inboundSchema;
  /** @deprecated use `AuditLogEntryResponse$outboundSchema` instead. */
  export const outboundSchema = AuditLogEntryResponse$outboundSchema;
  /** @deprecated use `AuditLogEntryResponse$Outbound` instead. */
  export type Outbound = AuditLogEntryResponse$Outbound;
}