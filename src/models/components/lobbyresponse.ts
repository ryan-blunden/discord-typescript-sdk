/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  GuildChannelResponse,
  GuildChannelResponse$inboundSchema,
  GuildChannelResponse$Outbound,
  GuildChannelResponse$outboundSchema,
} from "./guildchannelresponse.js";
import {
  LobbyMemberResponse,
  LobbyMemberResponse$inboundSchema,
  LobbyMemberResponse$Outbound,
  LobbyMemberResponse$outboundSchema,
} from "./lobbymemberresponse.js";

export type LobbyResponse = {
  id: string;
  applicationId: string;
  metadata?: { [k: string]: string } | null | undefined;
  members?: Array<LobbyMemberResponse> | null | undefined;
  linkedChannel?: GuildChannelResponse | null | undefined;
};

/** @internal */
export const LobbyResponse$inboundSchema: z.ZodType<
  LobbyResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  application_id: z.string(),
  metadata: z.nullable(z.record(z.string())).optional(),
  members: z.nullable(z.array(LobbyMemberResponse$inboundSchema)).optional(),
  linked_channel: z.nullable(GuildChannelResponse$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "linked_channel": "linkedChannel",
  });
});

/** @internal */
export type LobbyResponse$Outbound = {
  id: string;
  application_id: string;
  metadata?: { [k: string]: string } | null | undefined;
  members?: Array<LobbyMemberResponse$Outbound> | null | undefined;
  linked_channel?: GuildChannelResponse$Outbound | null | undefined;
};

/** @internal */
export const LobbyResponse$outboundSchema: z.ZodType<
  LobbyResponse$Outbound,
  z.ZodTypeDef,
  LobbyResponse
> = z.object({
  id: z.string(),
  applicationId: z.string(),
  metadata: z.nullable(z.record(z.string())).optional(),
  members: z.nullable(z.array(LobbyMemberResponse$outboundSchema)).optional(),
  linkedChannel: z.nullable(GuildChannelResponse$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    linkedChannel: "linked_channel",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LobbyResponse$ {
  /** @deprecated use `LobbyResponse$inboundSchema` instead. */
  export const inboundSchema = LobbyResponse$inboundSchema;
  /** @deprecated use `LobbyResponse$outboundSchema` instead. */
  export const outboundSchema = LobbyResponse$outboundSchema;
  /** @deprecated use `LobbyResponse$Outbound` instead. */
  export type Outbound = LobbyResponse$Outbound;
}

export function lobbyResponseToJSON(lobbyResponse: LobbyResponse): string {
  return JSON.stringify(LobbyResponse$outboundSchema.parse(lobbyResponse));
}

export function lobbyResponseFromJSON(
  jsonString: string,
): SafeParseResult<LobbyResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LobbyResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LobbyResponse' from JSON`,
  );
}
