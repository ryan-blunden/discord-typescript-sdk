/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SearchGuildMembersRequest = {
  guildId: string;
  limit: number;
  query: string;
};

/** @internal */
export const SearchGuildMembersRequest$inboundSchema: z.ZodType<
  SearchGuildMembersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  limit: z.number().int(),
  query: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
  });
});

/** @internal */
export type SearchGuildMembersRequest$Outbound = {
  guild_id: string;
  limit: number;
  query: string;
};

/** @internal */
export const SearchGuildMembersRequest$outboundSchema: z.ZodType<
  SearchGuildMembersRequest$Outbound,
  z.ZodTypeDef,
  SearchGuildMembersRequest
> = z.object({
  guildId: z.string(),
  limit: z.number().int(),
  query: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchGuildMembersRequest$ {
  /** @deprecated use `SearchGuildMembersRequest$inboundSchema` instead. */
  export const inboundSchema = SearchGuildMembersRequest$inboundSchema;
  /** @deprecated use `SearchGuildMembersRequest$outboundSchema` instead. */
  export const outboundSchema = SearchGuildMembersRequest$outboundSchema;
  /** @deprecated use `SearchGuildMembersRequest$Outbound` instead. */
  export type Outbound = SearchGuildMembersRequest$Outbound;
}

export function searchGuildMembersRequestToJSON(
  searchGuildMembersRequest: SearchGuildMembersRequest,
): string {
  return JSON.stringify(
    SearchGuildMembersRequest$outboundSchema.parse(searchGuildMembersRequest),
  );
}

export function searchGuildMembersRequestFromJSON(
  jsonString: string,
): SafeParseResult<SearchGuildMembersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SearchGuildMembersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchGuildMembersRequest' from JSON`,
  );
}
