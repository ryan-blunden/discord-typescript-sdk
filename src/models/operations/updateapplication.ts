/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type UpdateApplicationRequest = {
  applicationId: string;
  applicationFormPartial: components.ApplicationFormPartial;
};

/** @internal */
export const UpdateApplicationRequest$inboundSchema: z.ZodType<
  UpdateApplicationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.string(),
  ApplicationFormPartial: components.ApplicationFormPartial$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "ApplicationFormPartial": "applicationFormPartial",
  });
});

/** @internal */
export type UpdateApplicationRequest$Outbound = {
  application_id: string;
  ApplicationFormPartial: components.ApplicationFormPartial$Outbound;
};

/** @internal */
export const UpdateApplicationRequest$outboundSchema: z.ZodType<
  UpdateApplicationRequest$Outbound,
  z.ZodTypeDef,
  UpdateApplicationRequest
> = z.object({
  applicationId: z.string(),
  applicationFormPartial: components.ApplicationFormPartial$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    applicationFormPartial: "ApplicationFormPartial",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateApplicationRequest$ {
  /** @deprecated use `UpdateApplicationRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateApplicationRequest$inboundSchema;
  /** @deprecated use `UpdateApplicationRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateApplicationRequest$outboundSchema;
  /** @deprecated use `UpdateApplicationRequest$Outbound` instead. */
  export type Outbound = UpdateApplicationRequest$Outbound;
}