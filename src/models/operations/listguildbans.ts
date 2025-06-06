/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListGuildBansRequest = {
  guildId: string;
  limit?: number | undefined;
  before?: string | undefined;
  after?: string | undefined;
};

/** @internal */
export const ListGuildBansRequest$inboundSchema: z.ZodType<
  ListGuildBansRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  limit: z.number().int().optional(),
  before: z.string().optional(),
  after: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
  });
});

/** @internal */
export type ListGuildBansRequest$Outbound = {
  guild_id: string;
  limit?: number | undefined;
  before?: string | undefined;
  after?: string | undefined;
};

/** @internal */
export const ListGuildBansRequest$outboundSchema: z.ZodType<
  ListGuildBansRequest$Outbound,
  z.ZodTypeDef,
  ListGuildBansRequest
> = z.object({
  guildId: z.string(),
  limit: z.number().int().optional(),
  before: z.string().optional(),
  after: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGuildBansRequest$ {
  /** @deprecated use `ListGuildBansRequest$inboundSchema` instead. */
  export const inboundSchema = ListGuildBansRequest$inboundSchema;
  /** @deprecated use `ListGuildBansRequest$outboundSchema` instead. */
  export const outboundSchema = ListGuildBansRequest$outboundSchema;
  /** @deprecated use `ListGuildBansRequest$Outbound` instead. */
  export type Outbound = ListGuildBansRequest$Outbound;
}

export function listGuildBansRequestToJSON(
  listGuildBansRequest: ListGuildBansRequest,
): string {
  return JSON.stringify(
    ListGuildBansRequest$outboundSchema.parse(listGuildBansRequest),
  );
}

export function listGuildBansRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListGuildBansRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListGuildBansRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListGuildBansRequest' from JSON`,
  );
}
