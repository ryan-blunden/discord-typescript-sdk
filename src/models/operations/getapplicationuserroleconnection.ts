/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetApplicationUserRoleConnectionRequest = {
  applicationId: string;
};

/** @internal */
export const GetApplicationUserRoleConnectionRequest$inboundSchema: z.ZodType<
  GetApplicationUserRoleConnectionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
  });
});

/** @internal */
export type GetApplicationUserRoleConnectionRequest$Outbound = {
  application_id: string;
};

/** @internal */
export const GetApplicationUserRoleConnectionRequest$outboundSchema: z.ZodType<
  GetApplicationUserRoleConnectionRequest$Outbound,
  z.ZodTypeDef,
  GetApplicationUserRoleConnectionRequest
> = z.object({
  applicationId: z.string(),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApplicationUserRoleConnectionRequest$ {
  /** @deprecated use `GetApplicationUserRoleConnectionRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetApplicationUserRoleConnectionRequest$inboundSchema;
  /** @deprecated use `GetApplicationUserRoleConnectionRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetApplicationUserRoleConnectionRequest$outboundSchema;
  /** @deprecated use `GetApplicationUserRoleConnectionRequest$Outbound` instead. */
  export type Outbound = GetApplicationUserRoleConnectionRequest$Outbound;
}