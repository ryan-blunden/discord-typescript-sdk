/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListThreadMembersRequest = {
  channelId: string;
  withMember?: boolean | undefined;
  limit?: number | undefined;
  after?: string | undefined;
};

/** @internal */
export const ListThreadMembersRequest$inboundSchema: z.ZodType<
  ListThreadMembersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  with_member: z.boolean().optional(),
  limit: z.number().int().optional(),
  after: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "with_member": "withMember",
  });
});

/** @internal */
export type ListThreadMembersRequest$Outbound = {
  channel_id: string;
  with_member?: boolean | undefined;
  limit?: number | undefined;
  after?: string | undefined;
};

/** @internal */
export const ListThreadMembersRequest$outboundSchema: z.ZodType<
  ListThreadMembersRequest$Outbound,
  z.ZodTypeDef,
  ListThreadMembersRequest
> = z.object({
  channelId: z.string(),
  withMember: z.boolean().optional(),
  limit: z.number().int().optional(),
  after: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    withMember: "with_member",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListThreadMembersRequest$ {
  /** @deprecated use `ListThreadMembersRequest$inboundSchema` instead. */
  export const inboundSchema = ListThreadMembersRequest$inboundSchema;
  /** @deprecated use `ListThreadMembersRequest$outboundSchema` instead. */
  export const outboundSchema = ListThreadMembersRequest$outboundSchema;
  /** @deprecated use `ListThreadMembersRequest$Outbound` instead. */
  export type Outbound = ListThreadMembersRequest$Outbound;
}

export function listThreadMembersRequestToJSON(
  listThreadMembersRequest: ListThreadMembersRequest,
): string {
  return JSON.stringify(
    ListThreadMembersRequest$outboundSchema.parse(listThreadMembersRequest),
  );
}

export function listThreadMembersRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListThreadMembersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListThreadMembersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListThreadMembersRequest' from JSON`,
  );
}
