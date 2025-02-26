/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EntitlementResponse = {
  id: string;
  skuId: string;
  applicationId: string;
  userId: string;
  guildId?: string | null | undefined;
  deleted: boolean;
  startsAt?: Date | null | undefined;
  endsAt?: Date | null | undefined;
  type?: 8 | undefined;
  fulfilledAt?: Date | null | undefined;
  fulfillmentStatus?: 0 | null | undefined;
  consumed?: boolean | null | undefined;
};

/** @internal */
export const EntitlementResponse$inboundSchema: z.ZodType<
  EntitlementResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  sku_id: z.string(),
  application_id: z.string(),
  user_id: z.string(),
  guild_id: z.nullable(z.string()).optional(),
  deleted: z.boolean(),
  starts_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  ends_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  type: z.literal(8).optional(),
  fulfilled_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  fulfillment_status: z.nullable(z.literal(0)).optional(),
  consumed: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "sku_id": "skuId",
    "application_id": "applicationId",
    "user_id": "userId",
    "guild_id": "guildId",
    "starts_at": "startsAt",
    "ends_at": "endsAt",
    "fulfilled_at": "fulfilledAt",
    "fulfillment_status": "fulfillmentStatus",
  });
});

/** @internal */
export type EntitlementResponse$Outbound = {
  id: string;
  sku_id: string;
  application_id: string;
  user_id: string;
  guild_id?: string | null | undefined;
  deleted: boolean;
  starts_at?: string | null | undefined;
  ends_at?: string | null | undefined;
  type: 8;
  fulfilled_at?: string | null | undefined;
  fulfillment_status: 0 | null;
  consumed?: boolean | null | undefined;
};

/** @internal */
export const EntitlementResponse$outboundSchema: z.ZodType<
  EntitlementResponse$Outbound,
  z.ZodTypeDef,
  EntitlementResponse
> = z.object({
  id: z.string(),
  skuId: z.string(),
  applicationId: z.string(),
  userId: z.string(),
  guildId: z.nullable(z.string()).optional(),
  deleted: z.boolean(),
  startsAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  endsAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  type: z.literal(8).default(8 as const),
  fulfilledAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  fulfillmentStatus: z.nullable(z.literal(0).default(0 as const)),
  consumed: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    skuId: "sku_id",
    applicationId: "application_id",
    userId: "user_id",
    guildId: "guild_id",
    startsAt: "starts_at",
    endsAt: "ends_at",
    fulfilledAt: "fulfilled_at",
    fulfillmentStatus: "fulfillment_status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntitlementResponse$ {
  /** @deprecated use `EntitlementResponse$inboundSchema` instead. */
  export const inboundSchema = EntitlementResponse$inboundSchema;
  /** @deprecated use `EntitlementResponse$outboundSchema` instead. */
  export const outboundSchema = EntitlementResponse$outboundSchema;
  /** @deprecated use `EntitlementResponse$Outbound` instead. */
  export type Outbound = EntitlementResponse$Outbound;
}

export function entitlementResponseToJSON(
  entitlementResponse: EntitlementResponse,
): string {
  return JSON.stringify(
    EntitlementResponse$outboundSchema.parse(entitlementResponse),
  );
}

export function entitlementResponseFromJSON(
  jsonString: string,
): SafeParseResult<EntitlementResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EntitlementResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EntitlementResponse' from JSON`,
  );
}
