/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetEntitlementsSecurity = {
  botToken?: string | undefined;
};

export type SkuIds = string | Array<string | null>;

export type GetEntitlementsRequest = {
  applicationId: string;
  userId?: string | undefined;
  skuIds: string | Array<string | null>;
  guildId?: string | undefined;
  before?: string | undefined;
  after?: string | undefined;
  limit?: number | undefined;
  excludeEnded?: boolean | undefined;
  excludeDeleted?: boolean | undefined;
  onlyActive?: boolean | undefined;
};

/** @internal */
export const GetEntitlementsSecurity$inboundSchema: z.ZodType<
  GetEntitlementsSecurity,
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
export type GetEntitlementsSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const GetEntitlementsSecurity$outboundSchema: z.ZodType<
  GetEntitlementsSecurity$Outbound,
  z.ZodTypeDef,
  GetEntitlementsSecurity
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
export namespace GetEntitlementsSecurity$ {
  /** @deprecated use `GetEntitlementsSecurity$inboundSchema` instead. */
  export const inboundSchema = GetEntitlementsSecurity$inboundSchema;
  /** @deprecated use `GetEntitlementsSecurity$outboundSchema` instead. */
  export const outboundSchema = GetEntitlementsSecurity$outboundSchema;
  /** @deprecated use `GetEntitlementsSecurity$Outbound` instead. */
  export type Outbound = GetEntitlementsSecurity$Outbound;
}

export function getEntitlementsSecurityToJSON(
  getEntitlementsSecurity: GetEntitlementsSecurity,
): string {
  return JSON.stringify(
    GetEntitlementsSecurity$outboundSchema.parse(getEntitlementsSecurity),
  );
}

export function getEntitlementsSecurityFromJSON(
  jsonString: string,
): SafeParseResult<GetEntitlementsSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEntitlementsSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEntitlementsSecurity' from JSON`,
  );
}

/** @internal */
export const SkuIds$inboundSchema: z.ZodType<SkuIds, z.ZodTypeDef, unknown> = z
  .union([z.string(), z.array(z.nullable(z.string()))]);

/** @internal */
export type SkuIds$Outbound = string | Array<string | null>;

/** @internal */
export const SkuIds$outboundSchema: z.ZodType<
  SkuIds$Outbound,
  z.ZodTypeDef,
  SkuIds
> = z.union([z.string(), z.array(z.nullable(z.string()))]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SkuIds$ {
  /** @deprecated use `SkuIds$inboundSchema` instead. */
  export const inboundSchema = SkuIds$inboundSchema;
  /** @deprecated use `SkuIds$outboundSchema` instead. */
  export const outboundSchema = SkuIds$outboundSchema;
  /** @deprecated use `SkuIds$Outbound` instead. */
  export type Outbound = SkuIds$Outbound;
}

export function skuIdsToJSON(skuIds: SkuIds): string {
  return JSON.stringify(SkuIds$outboundSchema.parse(skuIds));
}

export function skuIdsFromJSON(
  jsonString: string,
): SafeParseResult<SkuIds, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SkuIds$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SkuIds' from JSON`,
  );
}

/** @internal */
export const GetEntitlementsRequest$inboundSchema: z.ZodType<
  GetEntitlementsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.string(),
  user_id: z.string().optional(),
  sku_ids: z.union([z.string(), z.array(z.nullable(z.string()))]),
  guild_id: z.string().optional(),
  before: z.string().optional(),
  after: z.string().optional(),
  limit: z.number().int().optional(),
  exclude_ended: z.boolean().optional(),
  exclude_deleted: z.boolean().optional(),
  only_active: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "user_id": "userId",
    "sku_ids": "skuIds",
    "guild_id": "guildId",
    "exclude_ended": "excludeEnded",
    "exclude_deleted": "excludeDeleted",
    "only_active": "onlyActive",
  });
});

/** @internal */
export type GetEntitlementsRequest$Outbound = {
  application_id: string;
  user_id?: string | undefined;
  sku_ids: string | Array<string | null>;
  guild_id?: string | undefined;
  before?: string | undefined;
  after?: string | undefined;
  limit?: number | undefined;
  exclude_ended?: boolean | undefined;
  exclude_deleted?: boolean | undefined;
  only_active?: boolean | undefined;
};

/** @internal */
export const GetEntitlementsRequest$outboundSchema: z.ZodType<
  GetEntitlementsRequest$Outbound,
  z.ZodTypeDef,
  GetEntitlementsRequest
> = z.object({
  applicationId: z.string(),
  userId: z.string().optional(),
  skuIds: z.union([z.string(), z.array(z.nullable(z.string()))]),
  guildId: z.string().optional(),
  before: z.string().optional(),
  after: z.string().optional(),
  limit: z.number().int().optional(),
  excludeEnded: z.boolean().optional(),
  excludeDeleted: z.boolean().optional(),
  onlyActive: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    userId: "user_id",
    skuIds: "sku_ids",
    guildId: "guild_id",
    excludeEnded: "exclude_ended",
    excludeDeleted: "exclude_deleted",
    onlyActive: "only_active",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEntitlementsRequest$ {
  /** @deprecated use `GetEntitlementsRequest$inboundSchema` instead. */
  export const inboundSchema = GetEntitlementsRequest$inboundSchema;
  /** @deprecated use `GetEntitlementsRequest$outboundSchema` instead. */
  export const outboundSchema = GetEntitlementsRequest$outboundSchema;
  /** @deprecated use `GetEntitlementsRequest$Outbound` instead. */
  export type Outbound = GetEntitlementsRequest$Outbound;
}

export function getEntitlementsRequestToJSON(
  getEntitlementsRequest: GetEntitlementsRequest,
): string {
  return JSON.stringify(
    GetEntitlementsRequest$outboundSchema.parse(getEntitlementsRequest),
  );
}

export function getEntitlementsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetEntitlementsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEntitlementsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEntitlementsRequest' from JSON`,
  );
}
