/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type UpdateStageInstanceRequestBody = {
  topic?: string | undefined;
  privacyLevel?: 1 | undefined;
};

export type UpdateStageInstanceRequest = {
  channelId: string;
  requestBody: UpdateStageInstanceRequestBody;
};

/** @internal */
export const UpdateStageInstanceRequestBody$inboundSchema: z.ZodType<
  UpdateStageInstanceRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  topic: z.string().optional(),
  privacy_level: z.literal(1).optional(),
}).transform((v) => {
  return remap$(v, {
    "privacy_level": "privacyLevel",
  });
});

/** @internal */
export type UpdateStageInstanceRequestBody$Outbound = {
  topic?: string | undefined;
  privacy_level: 1;
};

/** @internal */
export const UpdateStageInstanceRequestBody$outboundSchema: z.ZodType<
  UpdateStageInstanceRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateStageInstanceRequestBody
> = z.object({
  topic: z.string().optional(),
  privacyLevel: z.literal(1).default(1 as const),
}).transform((v) => {
  return remap$(v, {
    privacyLevel: "privacy_level",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateStageInstanceRequestBody$ {
  /** @deprecated use `UpdateStageInstanceRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateStageInstanceRequestBody$inboundSchema;
  /** @deprecated use `UpdateStageInstanceRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateStageInstanceRequestBody$outboundSchema;
  /** @deprecated use `UpdateStageInstanceRequestBody$Outbound` instead. */
  export type Outbound = UpdateStageInstanceRequestBody$Outbound;
}

/** @internal */
export const UpdateStageInstanceRequest$inboundSchema: z.ZodType<
  UpdateStageInstanceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  RequestBody: z.lazy(() => UpdateStageInstanceRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateStageInstanceRequest$Outbound = {
  channel_id: string;
  RequestBody: UpdateStageInstanceRequestBody$Outbound;
};

/** @internal */
export const UpdateStageInstanceRequest$outboundSchema: z.ZodType<
  UpdateStageInstanceRequest$Outbound,
  z.ZodTypeDef,
  UpdateStageInstanceRequest
> = z.object({
  channelId: z.string(),
  requestBody: z.lazy(() => UpdateStageInstanceRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateStageInstanceRequest$ {
  /** @deprecated use `UpdateStageInstanceRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateStageInstanceRequest$inboundSchema;
  /** @deprecated use `UpdateStageInstanceRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateStageInstanceRequest$outboundSchema;
  /** @deprecated use `UpdateStageInstanceRequest$Outbound` instead. */
  export type Outbound = UpdateStageInstanceRequest$Outbound;
}