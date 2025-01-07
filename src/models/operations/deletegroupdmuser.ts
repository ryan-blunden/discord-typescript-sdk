/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteGroupDmUserRequest = {
  channelId: string;
  userId: string;
};

/** @internal */
export const DeleteGroupDmUserRequest$inboundSchema: z.ZodType<
  DeleteGroupDmUserRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  user_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "user_id": "userId",
  });
});

/** @internal */
export type DeleteGroupDmUserRequest$Outbound = {
  channel_id: string;
  user_id: string;
};

/** @internal */
export const DeleteGroupDmUserRequest$outboundSchema: z.ZodType<
  DeleteGroupDmUserRequest$Outbound,
  z.ZodTypeDef,
  DeleteGroupDmUserRequest
> = z.object({
  channelId: z.string(),
  userId: z.string(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteGroupDmUserRequest$ {
  /** @deprecated use `DeleteGroupDmUserRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteGroupDmUserRequest$inboundSchema;
  /** @deprecated use `DeleteGroupDmUserRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteGroupDmUserRequest$outboundSchema;
  /** @deprecated use `DeleteGroupDmUserRequest$Outbound` instead. */
  export type Outbound = DeleteGroupDmUserRequest$Outbound;
}

export function deleteGroupDmUserRequestToJSON(
  deleteGroupDmUserRequest: DeleteGroupDmUserRequest,
): string {
  return JSON.stringify(
    DeleteGroupDmUserRequest$outboundSchema.parse(deleteGroupDmUserRequest),
  );
}

export function deleteGroupDmUserRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteGroupDmUserRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteGroupDmUserRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteGroupDmUserRequest' from JSON`,
  );
}
