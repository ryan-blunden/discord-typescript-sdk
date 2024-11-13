/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetEntitlementSecurity = {
  botToken?: string | undefined;
};

export type GetEntitlementRequest = {
  applicationId: string;
  entitlementId: string;
};

/** @internal */
export const GetEntitlementSecurity$inboundSchema: z.ZodType<
  GetEntitlementSecurity,
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
export type GetEntitlementSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const GetEntitlementSecurity$outboundSchema: z.ZodType<
  GetEntitlementSecurity$Outbound,
  z.ZodTypeDef,
  GetEntitlementSecurity
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
export namespace GetEntitlementSecurity$ {
  /** @deprecated use `GetEntitlementSecurity$inboundSchema` instead. */
  export const inboundSchema = GetEntitlementSecurity$inboundSchema;
  /** @deprecated use `GetEntitlementSecurity$outboundSchema` instead. */
  export const outboundSchema = GetEntitlementSecurity$outboundSchema;
  /** @deprecated use `GetEntitlementSecurity$Outbound` instead. */
  export type Outbound = GetEntitlementSecurity$Outbound;
}

/** @internal */
export const GetEntitlementRequest$inboundSchema: z.ZodType<
  GetEntitlementRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.string(),
  entitlement_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "entitlement_id": "entitlementId",
  });
});

/** @internal */
export type GetEntitlementRequest$Outbound = {
  application_id: string;
  entitlement_id: string;
};

/** @internal */
export const GetEntitlementRequest$outboundSchema: z.ZodType<
  GetEntitlementRequest$Outbound,
  z.ZodTypeDef,
  GetEntitlementRequest
> = z.object({
  applicationId: z.string(),
  entitlementId: z.string(),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    entitlementId: "entitlement_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEntitlementRequest$ {
  /** @deprecated use `GetEntitlementRequest$inboundSchema` instead. */
  export const inboundSchema = GetEntitlementRequest$inboundSchema;
  /** @deprecated use `GetEntitlementRequest$outboundSchema` instead. */
  export const outboundSchema = GetEntitlementRequest$outboundSchema;
  /** @deprecated use `GetEntitlementRequest$Outbound` instead. */
  export type Outbound = GetEntitlementRequest$Outbound;
}