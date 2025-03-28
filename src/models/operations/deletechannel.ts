/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteChannelRequest = {
  channelId: string;
};

/**
 * 200 response for delete_channel
 */
export type DeleteChannelResponseBody =
  | components.PrivateChannelResponse
  | components.PrivateGroupChannelResponse
  | components.ThreadResponse
  | components.GuildChannelResponse;

/** @internal */
export const DeleteChannelRequest$inboundSchema: z.ZodType<
  DeleteChannelRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
  });
});

/** @internal */
export type DeleteChannelRequest$Outbound = {
  channel_id: string;
};

/** @internal */
export const DeleteChannelRequest$outboundSchema: z.ZodType<
  DeleteChannelRequest$Outbound,
  z.ZodTypeDef,
  DeleteChannelRequest
> = z.object({
  channelId: z.string(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteChannelRequest$ {
  /** @deprecated use `DeleteChannelRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteChannelRequest$inboundSchema;
  /** @deprecated use `DeleteChannelRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteChannelRequest$outboundSchema;
  /** @deprecated use `DeleteChannelRequest$Outbound` instead. */
  export type Outbound = DeleteChannelRequest$Outbound;
}

export function deleteChannelRequestToJSON(
  deleteChannelRequest: DeleteChannelRequest,
): string {
  return JSON.stringify(
    DeleteChannelRequest$outboundSchema.parse(deleteChannelRequest),
  );
}

export function deleteChannelRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteChannelRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteChannelRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteChannelRequest' from JSON`,
  );
}

/** @internal */
export const DeleteChannelResponseBody$inboundSchema: z.ZodType<
  DeleteChannelResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.PrivateChannelResponse$inboundSchema,
  components.PrivateGroupChannelResponse$inboundSchema,
  components.ThreadResponse$inboundSchema,
  components.GuildChannelResponse$inboundSchema,
]);

/** @internal */
export type DeleteChannelResponseBody$Outbound =
  | components.PrivateChannelResponse$Outbound
  | components.PrivateGroupChannelResponse$Outbound
  | components.ThreadResponse$Outbound
  | components.GuildChannelResponse$Outbound;

/** @internal */
export const DeleteChannelResponseBody$outboundSchema: z.ZodType<
  DeleteChannelResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteChannelResponseBody
> = z.union([
  components.PrivateChannelResponse$outboundSchema,
  components.PrivateGroupChannelResponse$outboundSchema,
  components.ThreadResponse$outboundSchema,
  components.GuildChannelResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteChannelResponseBody$ {
  /** @deprecated use `DeleteChannelResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteChannelResponseBody$inboundSchema;
  /** @deprecated use `DeleteChannelResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteChannelResponseBody$outboundSchema;
  /** @deprecated use `DeleteChannelResponseBody$Outbound` instead. */
  export type Outbound = DeleteChannelResponseBody$Outbound;
}

export function deleteChannelResponseBodyToJSON(
  deleteChannelResponseBody: DeleteChannelResponseBody,
): string {
  return JSON.stringify(
    DeleteChannelResponseBody$outboundSchema.parse(deleteChannelResponseBody),
  );
}

export function deleteChannelResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteChannelResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteChannelResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteChannelResponseBody' from JSON`,
  );
}
