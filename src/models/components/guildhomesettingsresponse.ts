/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  NewMemberActionResponse,
  NewMemberActionResponse$inboundSchema,
  NewMemberActionResponse$Outbound,
  NewMemberActionResponse$outboundSchema,
} from "./newmemberactionresponse.js";
import {
  ResourceChannelResponse,
  ResourceChannelResponse$inboundSchema,
  ResourceChannelResponse$Outbound,
  ResourceChannelResponse$outboundSchema,
} from "./resourcechannelresponse.js";
import {
  WelcomeMessageResponse,
  WelcomeMessageResponse$inboundSchema,
  WelcomeMessageResponse$Outbound,
  WelcomeMessageResponse$outboundSchema,
} from "./welcomemessageresponse.js";

export type GuildHomeSettingsResponse = {
  guildId: string;
  enabled: boolean;
  welcomeMessage?: WelcomeMessageResponse | null | undefined;
  newMemberActions?: Array<NewMemberActionResponse | null> | null | undefined;
  resourceChannels?: Array<ResourceChannelResponse | null> | null | undefined;
};

/** @internal */
export const GuildHomeSettingsResponse$inboundSchema: z.ZodType<
  GuildHomeSettingsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  enabled: z.boolean(),
  welcome_message: z.nullable(WelcomeMessageResponse$inboundSchema).optional(),
  new_member_actions: z.nullable(
    z.array(z.nullable(NewMemberActionResponse$inboundSchema)),
  ).optional(),
  resource_channels: z.nullable(
    z.array(z.nullable(ResourceChannelResponse$inboundSchema)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "welcome_message": "welcomeMessage",
    "new_member_actions": "newMemberActions",
    "resource_channels": "resourceChannels",
  });
});

/** @internal */
export type GuildHomeSettingsResponse$Outbound = {
  guild_id: string;
  enabled: boolean;
  welcome_message?: WelcomeMessageResponse$Outbound | null | undefined;
  new_member_actions?:
    | Array<NewMemberActionResponse$Outbound | null>
    | null
    | undefined;
  resource_channels?:
    | Array<ResourceChannelResponse$Outbound | null>
    | null
    | undefined;
};

/** @internal */
export const GuildHomeSettingsResponse$outboundSchema: z.ZodType<
  GuildHomeSettingsResponse$Outbound,
  z.ZodTypeDef,
  GuildHomeSettingsResponse
> = z.object({
  guildId: z.string(),
  enabled: z.boolean(),
  welcomeMessage: z.nullable(WelcomeMessageResponse$outboundSchema).optional(),
  newMemberActions: z.nullable(
    z.array(z.nullable(NewMemberActionResponse$outboundSchema)),
  ).optional(),
  resourceChannels: z.nullable(
    z.array(z.nullable(ResourceChannelResponse$outboundSchema)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    welcomeMessage: "welcome_message",
    newMemberActions: "new_member_actions",
    resourceChannels: "resource_channels",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GuildHomeSettingsResponse$ {
  /** @deprecated use `GuildHomeSettingsResponse$inboundSchema` instead. */
  export const inboundSchema = GuildHomeSettingsResponse$inboundSchema;
  /** @deprecated use `GuildHomeSettingsResponse$outboundSchema` instead. */
  export const outboundSchema = GuildHomeSettingsResponse$outboundSchema;
  /** @deprecated use `GuildHomeSettingsResponse$Outbound` instead. */
  export type Outbound = GuildHomeSettingsResponse$Outbound;
}

export function guildHomeSettingsResponseToJSON(
  guildHomeSettingsResponse: GuildHomeSettingsResponse,
): string {
  return JSON.stringify(
    GuildHomeSettingsResponse$outboundSchema.parse(guildHomeSettingsResponse),
  );
}

export function guildHomeSettingsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GuildHomeSettingsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GuildHomeSettingsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GuildHomeSettingsResponse' from JSON`,
  );
}
