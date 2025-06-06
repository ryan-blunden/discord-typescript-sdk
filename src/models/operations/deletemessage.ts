/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteMessageRequest = {
  channelId: string;
  messageId: string;
};

/** @internal */
export const DeleteMessageRequest$inboundSchema: z.ZodType<
  DeleteMessageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  message_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "message_id": "messageId",
  });
});

/** @internal */
export type DeleteMessageRequest$Outbound = {
  channel_id: string;
  message_id: string;
};

/** @internal */
export const DeleteMessageRequest$outboundSchema: z.ZodType<
  DeleteMessageRequest$Outbound,
  z.ZodTypeDef,
  DeleteMessageRequest
> = z.object({
  channelId: z.string(),
  messageId: z.string(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    messageId: "message_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteMessageRequest$ {
  /** @deprecated use `DeleteMessageRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteMessageRequest$inboundSchema;
  /** @deprecated use `DeleteMessageRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteMessageRequest$outboundSchema;
  /** @deprecated use `DeleteMessageRequest$Outbound` instead. */
  export type Outbound = DeleteMessageRequest$Outbound;
}

export function deleteMessageRequestToJSON(
  deleteMessageRequest: DeleteMessageRequest,
): string {
  return JSON.stringify(
    DeleteMessageRequest$outboundSchema.parse(deleteMessageRequest),
  );
}

export function deleteMessageRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteMessageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteMessageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteMessageRequest' from JSON`,
  );
}
