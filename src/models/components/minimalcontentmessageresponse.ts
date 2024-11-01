/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  GuildStickerResponse,
  GuildStickerResponse$inboundSchema,
  GuildStickerResponse$Outbound,
  GuildStickerResponse$outboundSchema,
} from "./guildstickerresponse.js";
import {
  MessageAttachmentResponse,
  MessageAttachmentResponse$inboundSchema,
  MessageAttachmentResponse$Outbound,
  MessageAttachmentResponse$outboundSchema,
} from "./messageattachmentresponse.js";
import {
  MessageComponentActionRowResponse,
  MessageComponentActionRowResponse$inboundSchema,
  MessageComponentActionRowResponse$Outbound,
  MessageComponentActionRowResponse$outboundSchema,
} from "./messagecomponentactionrowresponse.js";
import {
  MessageComponentButtonResponse,
  MessageComponentButtonResponse$inboundSchema,
  MessageComponentButtonResponse$Outbound,
  MessageComponentButtonResponse$outboundSchema,
} from "./messagecomponentbuttonresponse.js";
import {
  MessageComponentChannelSelectResponse,
  MessageComponentChannelSelectResponse$inboundSchema,
  MessageComponentChannelSelectResponse$Outbound,
  MessageComponentChannelSelectResponse$outboundSchema,
} from "./messagecomponentchannelselectresponse.js";
import {
  MessageComponentInputTextResponse,
  MessageComponentInputTextResponse$inboundSchema,
  MessageComponentInputTextResponse$Outbound,
  MessageComponentInputTextResponse$outboundSchema,
} from "./messagecomponentinputtextresponse.js";
import {
  MessageComponentMentionableSelectResponse,
  MessageComponentMentionableSelectResponse$inboundSchema,
  MessageComponentMentionableSelectResponse$Outbound,
  MessageComponentMentionableSelectResponse$outboundSchema,
} from "./messagecomponentmentionableselectresponse.js";
import {
  MessageComponentRoleSelectResponse,
  MessageComponentRoleSelectResponse$inboundSchema,
  MessageComponentRoleSelectResponse$Outbound,
  MessageComponentRoleSelectResponse$outboundSchema,
} from "./messagecomponentroleselectresponse.js";
import {
  MessageComponentStringSelectResponse,
  MessageComponentStringSelectResponse$inboundSchema,
  MessageComponentStringSelectResponse$Outbound,
  MessageComponentStringSelectResponse$outboundSchema,
} from "./messagecomponentstringselectresponse.js";
import {
  MessageComponentUserSelectResponse,
  MessageComponentUserSelectResponse$inboundSchema,
  MessageComponentUserSelectResponse$Outbound,
  MessageComponentUserSelectResponse$outboundSchema,
} from "./messagecomponentuserselectresponse.js";
import {
  MessageEmbedResponse,
  MessageEmbedResponse$inboundSchema,
  MessageEmbedResponse$Outbound,
  MessageEmbedResponse$outboundSchema,
} from "./messageembedresponse.js";
import {
  MessageStickerItemResponse,
  MessageStickerItemResponse$inboundSchema,
  MessageStickerItemResponse$Outbound,
  MessageStickerItemResponse$outboundSchema,
} from "./messagestickeritemresponse.js";
import {
  ResolvedObjectsResponse,
  ResolvedObjectsResponse$inboundSchema,
  ResolvedObjectsResponse$Outbound,
  ResolvedObjectsResponse$outboundSchema,
} from "./resolvedobjectsresponse.js";
import {
  StandardStickerResponse,
  StandardStickerResponse$inboundSchema,
  StandardStickerResponse$Outbound,
  StandardStickerResponse$outboundSchema,
} from "./standardstickerresponse.js";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";

export type MinimalContentMessageResponseComponents =
  | MessageComponentActionRowResponse
  | MessageComponentMentionableSelectResponse
  | MessageComponentRoleSelectResponse
  | MessageComponentStringSelectResponse
  | MessageComponentUserSelectResponse
  | MessageComponentButtonResponse
  | MessageComponentChannelSelectResponse
  | MessageComponentInputTextResponse;

export type MinimalContentMessageResponseStickers =
  | StandardStickerResponse
  | GuildStickerResponse;

export type MinimalContentMessageResponse = {
  type?: 0 | undefined;
  content: string;
  mentions: Array<UserResponse>;
  mentionRoles: Array<string>;
  attachments: Array<MessageAttachmentResponse>;
  embeds: Array<MessageEmbedResponse>;
  timestamp: Date;
  editedTimestamp?: Date | null | undefined;
  flags: number;
  components: Array<
    | MessageComponentActionRowResponse
    | MessageComponentMentionableSelectResponse
    | MessageComponentRoleSelectResponse
    | MessageComponentStringSelectResponse
    | MessageComponentUserSelectResponse
    | MessageComponentButtonResponse
    | MessageComponentChannelSelectResponse
    | MessageComponentInputTextResponse
  >;
  resolved?: ResolvedObjectsResponse | null | undefined;
  stickers?:
    | Array<StandardStickerResponse | GuildStickerResponse>
    | null
    | undefined;
  stickerItems?: Array<MessageStickerItemResponse> | null | undefined;
};

/** @internal */
export const MinimalContentMessageResponseComponents$inboundSchema: z.ZodType<
  MinimalContentMessageResponseComponents,
  z.ZodTypeDef,
  unknown
> = z.union([
  MessageComponentActionRowResponse$inboundSchema,
  MessageComponentMentionableSelectResponse$inboundSchema,
  MessageComponentRoleSelectResponse$inboundSchema,
  MessageComponentStringSelectResponse$inboundSchema,
  MessageComponentUserSelectResponse$inboundSchema,
  MessageComponentButtonResponse$inboundSchema,
  MessageComponentChannelSelectResponse$inboundSchema,
  MessageComponentInputTextResponse$inboundSchema,
]);

/** @internal */
export type MinimalContentMessageResponseComponents$Outbound =
  | MessageComponentActionRowResponse$Outbound
  | MessageComponentMentionableSelectResponse$Outbound
  | MessageComponentRoleSelectResponse$Outbound
  | MessageComponentStringSelectResponse$Outbound
  | MessageComponentUserSelectResponse$Outbound
  | MessageComponentButtonResponse$Outbound
  | MessageComponentChannelSelectResponse$Outbound
  | MessageComponentInputTextResponse$Outbound;

/** @internal */
export const MinimalContentMessageResponseComponents$outboundSchema: z.ZodType<
  MinimalContentMessageResponseComponents$Outbound,
  z.ZodTypeDef,
  MinimalContentMessageResponseComponents
> = z.union([
  MessageComponentActionRowResponse$outboundSchema,
  MessageComponentMentionableSelectResponse$outboundSchema,
  MessageComponentRoleSelectResponse$outboundSchema,
  MessageComponentStringSelectResponse$outboundSchema,
  MessageComponentUserSelectResponse$outboundSchema,
  MessageComponentButtonResponse$outboundSchema,
  MessageComponentChannelSelectResponse$outboundSchema,
  MessageComponentInputTextResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MinimalContentMessageResponseComponents$ {
  /** @deprecated use `MinimalContentMessageResponseComponents$inboundSchema` instead. */
  export const inboundSchema =
    MinimalContentMessageResponseComponents$inboundSchema;
  /** @deprecated use `MinimalContentMessageResponseComponents$outboundSchema` instead. */
  export const outboundSchema =
    MinimalContentMessageResponseComponents$outboundSchema;
  /** @deprecated use `MinimalContentMessageResponseComponents$Outbound` instead. */
  export type Outbound = MinimalContentMessageResponseComponents$Outbound;
}

/** @internal */
export const MinimalContentMessageResponseStickers$inboundSchema: z.ZodType<
  MinimalContentMessageResponseStickers,
  z.ZodTypeDef,
  unknown
> = z.union([
  StandardStickerResponse$inboundSchema,
  GuildStickerResponse$inboundSchema,
]);

/** @internal */
export type MinimalContentMessageResponseStickers$Outbound =
  | StandardStickerResponse$Outbound
  | GuildStickerResponse$Outbound;

/** @internal */
export const MinimalContentMessageResponseStickers$outboundSchema: z.ZodType<
  MinimalContentMessageResponseStickers$Outbound,
  z.ZodTypeDef,
  MinimalContentMessageResponseStickers
> = z.union([
  StandardStickerResponse$outboundSchema,
  GuildStickerResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MinimalContentMessageResponseStickers$ {
  /** @deprecated use `MinimalContentMessageResponseStickers$inboundSchema` instead. */
  export const inboundSchema =
    MinimalContentMessageResponseStickers$inboundSchema;
  /** @deprecated use `MinimalContentMessageResponseStickers$outboundSchema` instead. */
  export const outboundSchema =
    MinimalContentMessageResponseStickers$outboundSchema;
  /** @deprecated use `MinimalContentMessageResponseStickers$Outbound` instead. */
  export type Outbound = MinimalContentMessageResponseStickers$Outbound;
}

/** @internal */
export const MinimalContentMessageResponse$inboundSchema: z.ZodType<
  MinimalContentMessageResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(0).optional(),
  content: z.string(),
  mentions: z.array(UserResponse$inboundSchema),
  mention_roles: z.array(z.string()),
  attachments: z.array(MessageAttachmentResponse$inboundSchema),
  embeds: z.array(MessageEmbedResponse$inboundSchema),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  edited_timestamp: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  flags: z.number().int(),
  components: z.array(
    z.union([
      MessageComponentActionRowResponse$inboundSchema,
      MessageComponentMentionableSelectResponse$inboundSchema,
      MessageComponentRoleSelectResponse$inboundSchema,
      MessageComponentStringSelectResponse$inboundSchema,
      MessageComponentUserSelectResponse$inboundSchema,
      MessageComponentButtonResponse$inboundSchema,
      MessageComponentChannelSelectResponse$inboundSchema,
      MessageComponentInputTextResponse$inboundSchema,
    ]),
  ),
  resolved: z.nullable(ResolvedObjectsResponse$inboundSchema).optional(),
  stickers: z.nullable(
    z.array(
      z.union([
        StandardStickerResponse$inboundSchema,
        GuildStickerResponse$inboundSchema,
      ]),
    ),
  ).optional(),
  sticker_items: z.nullable(z.array(MessageStickerItemResponse$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "mention_roles": "mentionRoles",
    "edited_timestamp": "editedTimestamp",
    "sticker_items": "stickerItems",
  });
});

/** @internal */
export type MinimalContentMessageResponse$Outbound = {
  type: 0;
  content: string;
  mentions: Array<UserResponse$Outbound>;
  mention_roles: Array<string>;
  attachments: Array<MessageAttachmentResponse$Outbound>;
  embeds: Array<MessageEmbedResponse$Outbound>;
  timestamp: string;
  edited_timestamp?: string | null | undefined;
  flags: number;
  components: Array<
    | MessageComponentActionRowResponse$Outbound
    | MessageComponentMentionableSelectResponse$Outbound
    | MessageComponentRoleSelectResponse$Outbound
    | MessageComponentStringSelectResponse$Outbound
    | MessageComponentUserSelectResponse$Outbound
    | MessageComponentButtonResponse$Outbound
    | MessageComponentChannelSelectResponse$Outbound
    | MessageComponentInputTextResponse$Outbound
  >;
  resolved?: ResolvedObjectsResponse$Outbound | null | undefined;
  stickers?:
    | Array<StandardStickerResponse$Outbound | GuildStickerResponse$Outbound>
    | null
    | undefined;
  sticker_items?: Array<MessageStickerItemResponse$Outbound> | null | undefined;
};

/** @internal */
export const MinimalContentMessageResponse$outboundSchema: z.ZodType<
  MinimalContentMessageResponse$Outbound,
  z.ZodTypeDef,
  MinimalContentMessageResponse
> = z.object({
  type: z.literal(0).default(0 as const),
  content: z.string(),
  mentions: z.array(UserResponse$outboundSchema),
  mentionRoles: z.array(z.string()),
  attachments: z.array(MessageAttachmentResponse$outboundSchema),
  embeds: z.array(MessageEmbedResponse$outboundSchema),
  timestamp: z.date().transform(v => v.toISOString()),
  editedTimestamp: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  flags: z.number().int(),
  components: z.array(
    z.union([
      MessageComponentActionRowResponse$outboundSchema,
      MessageComponentMentionableSelectResponse$outboundSchema,
      MessageComponentRoleSelectResponse$outboundSchema,
      MessageComponentStringSelectResponse$outboundSchema,
      MessageComponentUserSelectResponse$outboundSchema,
      MessageComponentButtonResponse$outboundSchema,
      MessageComponentChannelSelectResponse$outboundSchema,
      MessageComponentInputTextResponse$outboundSchema,
    ]),
  ),
  resolved: z.nullable(ResolvedObjectsResponse$outboundSchema).optional(),
  stickers: z.nullable(
    z.array(
      z.union([
        StandardStickerResponse$outboundSchema,
        GuildStickerResponse$outboundSchema,
      ]),
    ),
  ).optional(),
  stickerItems: z.nullable(z.array(MessageStickerItemResponse$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    mentionRoles: "mention_roles",
    editedTimestamp: "edited_timestamp",
    stickerItems: "sticker_items",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MinimalContentMessageResponse$ {
  /** @deprecated use `MinimalContentMessageResponse$inboundSchema` instead. */
  export const inboundSchema = MinimalContentMessageResponse$inboundSchema;
  /** @deprecated use `MinimalContentMessageResponse$outboundSchema` instead. */
  export const outboundSchema = MinimalContentMessageResponse$outboundSchema;
  /** @deprecated use `MinimalContentMessageResponse$Outbound` instead. */
  export type Outbound = MinimalContentMessageResponse$Outbound;
}
