/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type FollowChannelRequestBody = {
  webhookChannelId: string;
};

export type FollowChannelRequest = {
  channelId: string;
  requestBody: FollowChannelRequestBody;
};

/** @internal */
export const FollowChannelRequestBody$inboundSchema: z.ZodType<
  FollowChannelRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  webhook_channel_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "webhook_channel_id": "webhookChannelId",
  });
});

/** @internal */
export type FollowChannelRequestBody$Outbound = {
  webhook_channel_id: string;
};

/** @internal */
export const FollowChannelRequestBody$outboundSchema: z.ZodType<
  FollowChannelRequestBody$Outbound,
  z.ZodTypeDef,
  FollowChannelRequestBody
> = z.object({
  webhookChannelId: z.string(),
}).transform((v) => {
  return remap$(v, {
    webhookChannelId: "webhook_channel_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FollowChannelRequestBody$ {
  /** @deprecated use `FollowChannelRequestBody$inboundSchema` instead. */
  export const inboundSchema = FollowChannelRequestBody$inboundSchema;
  /** @deprecated use `FollowChannelRequestBody$outboundSchema` instead. */
  export const outboundSchema = FollowChannelRequestBody$outboundSchema;
  /** @deprecated use `FollowChannelRequestBody$Outbound` instead. */
  export type Outbound = FollowChannelRequestBody$Outbound;
}

/** @internal */
export const FollowChannelRequest$inboundSchema: z.ZodType<
  FollowChannelRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  RequestBody: z.lazy(() => FollowChannelRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type FollowChannelRequest$Outbound = {
  channel_id: string;
  RequestBody: FollowChannelRequestBody$Outbound;
};

/** @internal */
export const FollowChannelRequest$outboundSchema: z.ZodType<
  FollowChannelRequest$Outbound,
  z.ZodTypeDef,
  FollowChannelRequest
> = z.object({
  channelId: z.string(),
  requestBody: z.lazy(() => FollowChannelRequestBody$outboundSchema),
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
export namespace FollowChannelRequest$ {
  /** @deprecated use `FollowChannelRequest$inboundSchema` instead. */
  export const inboundSchema = FollowChannelRequest$inboundSchema;
  /** @deprecated use `FollowChannelRequest$outboundSchema` instead. */
  export const outboundSchema = FollowChannelRequest$outboundSchema;
  /** @deprecated use `FollowChannelRequest$Outbound` instead. */
  export type Outbound = FollowChannelRequest$Outbound;
}