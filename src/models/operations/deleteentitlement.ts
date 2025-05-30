/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteEntitlementSecurity = {
  botToken?: string | undefined;
};

export type DeleteEntitlementRequest = {
  applicationId: string;
  entitlementId: string;
};

/** @internal */
export const DeleteEntitlementSecurity$inboundSchema: z.ZodType<
  DeleteEntitlementSecurity,
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
export type DeleteEntitlementSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const DeleteEntitlementSecurity$outboundSchema: z.ZodType<
  DeleteEntitlementSecurity$Outbound,
  z.ZodTypeDef,
  DeleteEntitlementSecurity
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
export namespace DeleteEntitlementSecurity$ {
  /** @deprecated use `DeleteEntitlementSecurity$inboundSchema` instead. */
  export const inboundSchema = DeleteEntitlementSecurity$inboundSchema;
  /** @deprecated use `DeleteEntitlementSecurity$outboundSchema` instead. */
  export const outboundSchema = DeleteEntitlementSecurity$outboundSchema;
  /** @deprecated use `DeleteEntitlementSecurity$Outbound` instead. */
  export type Outbound = DeleteEntitlementSecurity$Outbound;
}

export function deleteEntitlementSecurityToJSON(
  deleteEntitlementSecurity: DeleteEntitlementSecurity,
): string {
  return JSON.stringify(
    DeleteEntitlementSecurity$outboundSchema.parse(deleteEntitlementSecurity),
  );
}

export function deleteEntitlementSecurityFromJSON(
  jsonString: string,
): SafeParseResult<DeleteEntitlementSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteEntitlementSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteEntitlementSecurity' from JSON`,
  );
}

/** @internal */
export const DeleteEntitlementRequest$inboundSchema: z.ZodType<
  DeleteEntitlementRequest,
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
export type DeleteEntitlementRequest$Outbound = {
  application_id: string;
  entitlement_id: string;
};

/** @internal */
export const DeleteEntitlementRequest$outboundSchema: z.ZodType<
  DeleteEntitlementRequest$Outbound,
  z.ZodTypeDef,
  DeleteEntitlementRequest
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
export namespace DeleteEntitlementRequest$ {
  /** @deprecated use `DeleteEntitlementRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteEntitlementRequest$inboundSchema;
  /** @deprecated use `DeleteEntitlementRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteEntitlementRequest$outboundSchema;
  /** @deprecated use `DeleteEntitlementRequest$Outbound` instead. */
  export type Outbound = DeleteEntitlementRequest$Outbound;
}

export function deleteEntitlementRequestToJSON(
  deleteEntitlementRequest: DeleteEntitlementRequest,
): string {
  return JSON.stringify(
    DeleteEntitlementRequest$outboundSchema.parse(deleteEntitlementRequest),
  );
}

export function deleteEntitlementRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteEntitlementRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteEntitlementRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteEntitlementRequest' from JSON`,
  );
}
