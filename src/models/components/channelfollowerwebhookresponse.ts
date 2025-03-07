/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";
import {
  WebhookSourceChannelResponse,
  WebhookSourceChannelResponse$inboundSchema,
  WebhookSourceChannelResponse$Outbound,
  WebhookSourceChannelResponse$outboundSchema,
} from "./webhooksourcechannelresponse.js";
import {
  WebhookSourceGuildResponse,
  WebhookSourceGuildResponse$inboundSchema,
  WebhookSourceGuildResponse$Outbound,
  WebhookSourceGuildResponse$outboundSchema,
} from "./webhooksourceguildresponse.js";

export type ChannelFollowerWebhookResponse = {
  applicationId?: string | null | undefined;
  avatar?: string | null | undefined;
  channelId?: string | null | undefined;
  guildId?: string | null | undefined;
  id: string;
  name: string;
  type?: 1 | undefined;
  user?: UserResponse | null | undefined;
  sourceGuild?: WebhookSourceGuildResponse | null | undefined;
  sourceChannel?: WebhookSourceChannelResponse | null | undefined;
};

/** @internal */
export const ChannelFollowerWebhookResponse$inboundSchema: z.ZodType<
  ChannelFollowerWebhookResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.nullable(z.string()).optional(),
  avatar: z.nullable(z.string()).optional(),
  channel_id: z.nullable(z.string()).optional(),
  guild_id: z.nullable(z.string()).optional(),
  id: z.string(),
  name: z.string(),
  type: z.literal(1).optional(),
  user: z.nullable(UserResponse$inboundSchema).optional(),
  source_guild: z.nullable(WebhookSourceGuildResponse$inboundSchema).optional(),
  source_channel: z.nullable(WebhookSourceChannelResponse$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "channel_id": "channelId",
    "guild_id": "guildId",
    "source_guild": "sourceGuild",
    "source_channel": "sourceChannel",
  });
});

/** @internal */
export type ChannelFollowerWebhookResponse$Outbound = {
  application_id?: string | null | undefined;
  avatar?: string | null | undefined;
  channel_id?: string | null | undefined;
  guild_id?: string | null | undefined;
  id: string;
  name: string;
  type: 1;
  user?: UserResponse$Outbound | null | undefined;
  source_guild?: WebhookSourceGuildResponse$Outbound | null | undefined;
  source_channel?: WebhookSourceChannelResponse$Outbound | null | undefined;
};

/** @internal */
export const ChannelFollowerWebhookResponse$outboundSchema: z.ZodType<
  ChannelFollowerWebhookResponse$Outbound,
  z.ZodTypeDef,
  ChannelFollowerWebhookResponse
> = z.object({
  applicationId: z.nullable(z.string()).optional(),
  avatar: z.nullable(z.string()).optional(),
  channelId: z.nullable(z.string()).optional(),
  guildId: z.nullable(z.string()).optional(),
  id: z.string(),
  name: z.string(),
  type: z.literal(1).default(1 as const),
  user: z.nullable(UserResponse$outboundSchema).optional(),
  sourceGuild: z.nullable(WebhookSourceGuildResponse$outboundSchema).optional(),
  sourceChannel: z.nullable(WebhookSourceChannelResponse$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    channelId: "channel_id",
    guildId: "guild_id",
    sourceGuild: "source_guild",
    sourceChannel: "source_channel",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChannelFollowerWebhookResponse$ {
  /** @deprecated use `ChannelFollowerWebhookResponse$inboundSchema` instead. */
  export const inboundSchema = ChannelFollowerWebhookResponse$inboundSchema;
  /** @deprecated use `ChannelFollowerWebhookResponse$outboundSchema` instead. */
  export const outboundSchema = ChannelFollowerWebhookResponse$outboundSchema;
  /** @deprecated use `ChannelFollowerWebhookResponse$Outbound` instead. */
  export type Outbound = ChannelFollowerWebhookResponse$Outbound;
}

export function channelFollowerWebhookResponseToJSON(
  channelFollowerWebhookResponse: ChannelFollowerWebhookResponse,
): string {
  return JSON.stringify(
    ChannelFollowerWebhookResponse$outboundSchema.parse(
      channelFollowerWebhookResponse,
    ),
  );
}

export function channelFollowerWebhookResponseFromJSON(
  jsonString: string,
): SafeParseResult<ChannelFollowerWebhookResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChannelFollowerWebhookResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChannelFollowerWebhookResponse' from JSON`,
  );
}
