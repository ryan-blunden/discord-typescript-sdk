/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type UpdateApplicationUserRoleConnectionRequestBody = {
  platformName?: string | null | undefined;
  platformUsername?: string | null | undefined;
  metadata?: { [k: string]: string } | null | undefined;
};

export type UpdateApplicationUserRoleConnectionRequest = {
  applicationId: string;
  requestBody: UpdateApplicationUserRoleConnectionRequestBody;
};

/** @internal */
export const UpdateApplicationUserRoleConnectionRequestBody$inboundSchema:
  z.ZodType<
    UpdateApplicationUserRoleConnectionRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    platform_name: z.nullable(z.string()).optional(),
    platform_username: z.nullable(z.string()).optional(),
    metadata: z.nullable(z.record(z.string())).optional(),
  }).transform((v) => {
    return remap$(v, {
      "platform_name": "platformName",
      "platform_username": "platformUsername",
    });
  });

/** @internal */
export type UpdateApplicationUserRoleConnectionRequestBody$Outbound = {
  platform_name?: string | null | undefined;
  platform_username?: string | null | undefined;
  metadata?: { [k: string]: string } | null | undefined;
};

/** @internal */
export const UpdateApplicationUserRoleConnectionRequestBody$outboundSchema:
  z.ZodType<
    UpdateApplicationUserRoleConnectionRequestBody$Outbound,
    z.ZodTypeDef,
    UpdateApplicationUserRoleConnectionRequestBody
  > = z.object({
    platformName: z.nullable(z.string()).optional(),
    platformUsername: z.nullable(z.string()).optional(),
    metadata: z.nullable(z.record(z.string())).optional(),
  }).transform((v) => {
    return remap$(v, {
      platformName: "platform_name",
      platformUsername: "platform_username",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateApplicationUserRoleConnectionRequestBody$ {
  /** @deprecated use `UpdateApplicationUserRoleConnectionRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    UpdateApplicationUserRoleConnectionRequestBody$inboundSchema;
  /** @deprecated use `UpdateApplicationUserRoleConnectionRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    UpdateApplicationUserRoleConnectionRequestBody$outboundSchema;
  /** @deprecated use `UpdateApplicationUserRoleConnectionRequestBody$Outbound` instead. */
  export type Outbound =
    UpdateApplicationUserRoleConnectionRequestBody$Outbound;
}

/** @internal */
export const UpdateApplicationUserRoleConnectionRequest$inboundSchema:
  z.ZodType<UpdateApplicationUserRoleConnectionRequest, z.ZodTypeDef, unknown> =
    z.object({
      application_id: z.string(),
      RequestBody: z.lazy(() =>
        UpdateApplicationUserRoleConnectionRequestBody$inboundSchema
      ),
    }).transform((v) => {
      return remap$(v, {
        "application_id": "applicationId",
        "RequestBody": "requestBody",
      });
    });

/** @internal */
export type UpdateApplicationUserRoleConnectionRequest$Outbound = {
  application_id: string;
  RequestBody: UpdateApplicationUserRoleConnectionRequestBody$Outbound;
};

/** @internal */
export const UpdateApplicationUserRoleConnectionRequest$outboundSchema:
  z.ZodType<
    UpdateApplicationUserRoleConnectionRequest$Outbound,
    z.ZodTypeDef,
    UpdateApplicationUserRoleConnectionRequest
  > = z.object({
    applicationId: z.string(),
    requestBody: z.lazy(() =>
      UpdateApplicationUserRoleConnectionRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      applicationId: "application_id",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateApplicationUserRoleConnectionRequest$ {
  /** @deprecated use `UpdateApplicationUserRoleConnectionRequest$inboundSchema` instead. */
  export const inboundSchema =
    UpdateApplicationUserRoleConnectionRequest$inboundSchema;
  /** @deprecated use `UpdateApplicationUserRoleConnectionRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateApplicationUserRoleConnectionRequest$outboundSchema;
  /** @deprecated use `UpdateApplicationUserRoleConnectionRequest$Outbound` instead. */
  export type Outbound = UpdateApplicationUserRoleConnectionRequest$Outbound;
}