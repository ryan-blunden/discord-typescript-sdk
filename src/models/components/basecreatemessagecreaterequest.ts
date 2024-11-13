/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ActionRow,
  ActionRow$inboundSchema,
  ActionRow$Outbound,
  ActionRow$outboundSchema,
} from "./actionrow.js";
import {
  MessageAllowedMentionsRequest,
  MessageAllowedMentionsRequest$inboundSchema,
  MessageAllowedMentionsRequest$Outbound,
  MessageAllowedMentionsRequest$outboundSchema,
} from "./messageallowedmentionsrequest.js";
import {
  MessageAttachmentRequest,
  MessageAttachmentRequest$inboundSchema,
  MessageAttachmentRequest$Outbound,
  MessageAttachmentRequest$outboundSchema,
} from "./messageattachmentrequest.js";
import {
  PollCreateRequest,
  PollCreateRequest$inboundSchema,
  PollCreateRequest$Outbound,
  PollCreateRequest$outboundSchema,
} from "./pollcreaterequest.js";
import {
  RichEmbed,
  RichEmbed$inboundSchema,
  RichEmbed$Outbound,
  RichEmbed$outboundSchema,
} from "./richembed.js";

export type BaseCreateMessageCreateRequest = {
  content?: string | null | undefined;
  embeds?: Array<RichEmbed> | null | undefined;
  allowedMentions?: MessageAllowedMentionsRequest | null | undefined;
  stickerIds?: Array<string> | null | undefined;
  components?: Array<ActionRow> | null | undefined;
  flags?: number | null | undefined;
  attachments?: Array<MessageAttachmentRequest> | null | undefined;
  poll?: PollCreateRequest | null | undefined;
};

/** @internal */
export const BaseCreateMessageCreateRequest$inboundSchema: z.ZodType<
  BaseCreateMessageCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  content: z.nullable(z.string()).optional(),
  embeds: z.nullable(z.array(RichEmbed$inboundSchema)).optional(),
  allowed_mentions: z.nullable(MessageAllowedMentionsRequest$inboundSchema)
    .optional(),
  sticker_ids: z.nullable(z.array(z.string())).optional(),
  components: z.nullable(z.array(ActionRow$inboundSchema)).optional(),
  flags: z.nullable(z.number().int()).optional(),
  attachments: z.nullable(z.array(MessageAttachmentRequest$inboundSchema))
    .optional(),
  poll: z.nullable(PollCreateRequest$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "allowed_mentions": "allowedMentions",
    "sticker_ids": "stickerIds",
  });
});

/** @internal */
export type BaseCreateMessageCreateRequest$Outbound = {
  content?: string | null | undefined;
  embeds?: Array<RichEmbed$Outbound> | null | undefined;
  allowed_mentions?: MessageAllowedMentionsRequest$Outbound | null | undefined;
  sticker_ids?: Array<string> | null | undefined;
  components?: Array<ActionRow$Outbound> | null | undefined;
  flags?: number | null | undefined;
  attachments?: Array<MessageAttachmentRequest$Outbound> | null | undefined;
  poll?: PollCreateRequest$Outbound | null | undefined;
};

/** @internal */
export const BaseCreateMessageCreateRequest$outboundSchema: z.ZodType<
  BaseCreateMessageCreateRequest$Outbound,
  z.ZodTypeDef,
  BaseCreateMessageCreateRequest
> = z.object({
  content: z.nullable(z.string()).optional(),
  embeds: z.nullable(z.array(RichEmbed$outboundSchema)).optional(),
  allowedMentions: z.nullable(MessageAllowedMentionsRequest$outboundSchema)
    .optional(),
  stickerIds: z.nullable(z.array(z.string())).optional(),
  components: z.nullable(z.array(ActionRow$outboundSchema)).optional(),
  flags: z.nullable(z.number().int()).optional(),
  attachments: z.nullable(z.array(MessageAttachmentRequest$outboundSchema))
    .optional(),
  poll: z.nullable(PollCreateRequest$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    allowedMentions: "allowed_mentions",
    stickerIds: "sticker_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BaseCreateMessageCreateRequest$ {
  /** @deprecated use `BaseCreateMessageCreateRequest$inboundSchema` instead. */
  export const inboundSchema = BaseCreateMessageCreateRequest$inboundSchema;
  /** @deprecated use `BaseCreateMessageCreateRequest$outboundSchema` instead. */
  export const outboundSchema = BaseCreateMessageCreateRequest$outboundSchema;
  /** @deprecated use `BaseCreateMessageCreateRequest$Outbound` instead. */
  export type Outbound = BaseCreateMessageCreateRequest$Outbound;
}