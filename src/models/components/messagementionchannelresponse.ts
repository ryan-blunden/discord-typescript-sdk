/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChannelTypes,
  ChannelTypes$inboundSchema,
  ChannelTypes$outboundSchema,
} from "./channeltypes.js";

export type MessageMentionChannelResponse = {
  id: string;
  name: string;
  /**
   * Channel types (1: DM, 3: GROUP_DM, 0: GUILD_TEXT, 2: GUILD_VOICE, 4: GUILD_CATEGORY, 5: GUILD_ANNOUNCEMENT, 7: UNKNOWN, 10: ANNOUNCEMENT_THREAD, 11: PUBLIC_THREAD, 12: PRIVATE_THREAD, 13: GUILD_STAGE_VOICE, 14: GUILD_DIRECTORY, 15: GUILD_FORUM)
   */
  type: ChannelTypes;
  guildId: string;
};

/** @internal */
export const MessageMentionChannelResponse$inboundSchema: z.ZodType<
  MessageMentionChannelResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  type: ChannelTypes$inboundSchema,
  guild_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
  });
});

/** @internal */
export type MessageMentionChannelResponse$Outbound = {
  id: string;
  name: string;
  type: number;
  guild_id: string;
};

/** @internal */
export const MessageMentionChannelResponse$outboundSchema: z.ZodType<
  MessageMentionChannelResponse$Outbound,
  z.ZodTypeDef,
  MessageMentionChannelResponse
> = z.object({
  id: z.string(),
  name: z.string(),
  type: ChannelTypes$outboundSchema,
  guildId: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageMentionChannelResponse$ {
  /** @deprecated use `MessageMentionChannelResponse$inboundSchema` instead. */
  export const inboundSchema = MessageMentionChannelResponse$inboundSchema;
  /** @deprecated use `MessageMentionChannelResponse$outboundSchema` instead. */
  export const outboundSchema = MessageMentionChannelResponse$outboundSchema;
  /** @deprecated use `MessageMentionChannelResponse$Outbound` instead. */
  export type Outbound = MessageMentionChannelResponse$Outbound;
}

export function messageMentionChannelResponseToJSON(
  messageMentionChannelResponse: MessageMentionChannelResponse,
): string {
  return JSON.stringify(
    MessageMentionChannelResponse$outboundSchema.parse(
      messageMentionChannelResponse,
    ),
  );
}

export function messageMentionChannelResponseFromJSON(
  jsonString: string,
): SafeParseResult<MessageMentionChannelResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MessageMentionChannelResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MessageMentionChannelResponse' from JSON`,
  );
}
