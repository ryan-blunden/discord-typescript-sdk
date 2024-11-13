/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetApplicationRequest = {
  applicationId: string;
};

/** @internal */
export const GetApplicationRequest$inboundSchema: z.ZodType<
  GetApplicationRequest,
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
export type GetApplicationRequest$Outbound = {
  application_id: string;
};

/** @internal */
export const GetApplicationRequest$outboundSchema: z.ZodType<
  GetApplicationRequest$Outbound,
  z.ZodTypeDef,
  GetApplicationRequest
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
export namespace GetApplicationRequest$ {
  /** @deprecated use `GetApplicationRequest$inboundSchema` instead. */
  export const inboundSchema = GetApplicationRequest$inboundSchema;
  /** @deprecated use `GetApplicationRequest$outboundSchema` instead. */
  export const outboundSchema = GetApplicationRequest$outboundSchema;
  /** @deprecated use `GetApplicationRequest$Outbound` instead. */
  export type Outbound = GetApplicationRequest$Outbound;
}