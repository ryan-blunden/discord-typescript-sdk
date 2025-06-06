/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ActionRowComponentResponse,
  ActionRowComponentResponse$inboundSchema,
  ActionRowComponentResponse$Outbound,
  ActionRowComponentResponse$outboundSchema,
} from "./actionrowcomponentresponse.js";
import {
  ApplicationCommandInteractionMetadataResponse,
  ApplicationCommandInteractionMetadataResponse$inboundSchema,
  ApplicationCommandInteractionMetadataResponse$Outbound,
  ApplicationCommandInteractionMetadataResponse$outboundSchema,
} from "./applicationcommandinteractionmetadataresponse.js";
import {
  BasicApplicationResponse,
  BasicApplicationResponse$inboundSchema,
  BasicApplicationResponse$Outbound,
  BasicApplicationResponse$outboundSchema,
} from "./basicapplicationresponse.js";
import {
  ContainerComponentResponse,
  ContainerComponentResponse$inboundSchema,
  ContainerComponentResponse$Outbound,
  ContainerComponentResponse$outboundSchema,
} from "./containercomponentresponse.js";
import {
  FileComponentResponse,
  FileComponentResponse$inboundSchema,
  FileComponentResponse$Outbound,
  FileComponentResponse$outboundSchema,
} from "./filecomponentresponse.js";
import {
  GuildStickerResponse,
  GuildStickerResponse$inboundSchema,
  GuildStickerResponse$Outbound,
  GuildStickerResponse$outboundSchema,
} from "./guildstickerresponse.js";
import {
  MediaGalleryComponentResponse,
  MediaGalleryComponentResponse$inboundSchema,
  MediaGalleryComponentResponse$Outbound,
  MediaGalleryComponentResponse$outboundSchema,
} from "./mediagallerycomponentresponse.js";
import {
  MessageActivityResponse,
  MessageActivityResponse$inboundSchema,
  MessageActivityResponse$Outbound,
  MessageActivityResponse$outboundSchema,
} from "./messageactivityresponse.js";
import {
  MessageAttachmentResponse,
  MessageAttachmentResponse$inboundSchema,
  MessageAttachmentResponse$Outbound,
  MessageAttachmentResponse$outboundSchema,
} from "./messageattachmentresponse.js";
import {
  MessageCallResponse,
  MessageCallResponse$inboundSchema,
  MessageCallResponse$Outbound,
  MessageCallResponse$outboundSchema,
} from "./messagecallresponse.js";
import {
  MessageComponentInteractionMetadataResponse,
  MessageComponentInteractionMetadataResponse$inboundSchema,
  MessageComponentInteractionMetadataResponse$Outbound,
  MessageComponentInteractionMetadataResponse$outboundSchema,
} from "./messagecomponentinteractionmetadataresponse.js";
import {
  MessageEmbedResponse,
  MessageEmbedResponse$inboundSchema,
  MessageEmbedResponse$Outbound,
  MessageEmbedResponse$outboundSchema,
} from "./messageembedresponse.js";
import {
  MessageInteractionResponse,
  MessageInteractionResponse$inboundSchema,
  MessageInteractionResponse$Outbound,
  MessageInteractionResponse$outboundSchema,
} from "./messageinteractionresponse.js";
import {
  MessageMentionChannelResponse,
  MessageMentionChannelResponse$inboundSchema,
  MessageMentionChannelResponse$Outbound,
  MessageMentionChannelResponse$outboundSchema,
} from "./messagementionchannelresponse.js";
import {
  MessageReferenceResponse,
  MessageReferenceResponse$inboundSchema,
  MessageReferenceResponse$Outbound,
  MessageReferenceResponse$outboundSchema,
} from "./messagereferenceresponse.js";
import {
  MessageRoleSubscriptionDataResponse,
  MessageRoleSubscriptionDataResponse$inboundSchema,
  MessageRoleSubscriptionDataResponse$Outbound,
  MessageRoleSubscriptionDataResponse$outboundSchema,
} from "./messagerolesubscriptiondataresponse.js";
import {
  MessageSnapshotResponse,
  MessageSnapshotResponse$inboundSchema,
  MessageSnapshotResponse$Outbound,
  MessageSnapshotResponse$outboundSchema,
} from "./messagesnapshotresponse.js";
import {
  MessageStickerItemResponse,
  MessageStickerItemResponse$inboundSchema,
  MessageStickerItemResponse$Outbound,
  MessageStickerItemResponse$outboundSchema,
} from "./messagestickeritemresponse.js";
import {
  ModalSubmitInteractionMetadataResponse,
  ModalSubmitInteractionMetadataResponse$inboundSchema,
  ModalSubmitInteractionMetadataResponse$Outbound,
  ModalSubmitInteractionMetadataResponse$outboundSchema,
} from "./modalsubmitinteractionmetadataresponse.js";
import {
  PollResponse,
  PollResponse$inboundSchema,
  PollResponse$Outbound,
  PollResponse$outboundSchema,
} from "./pollresponse.js";
import {
  PurchaseNotificationResponse,
  PurchaseNotificationResponse$inboundSchema,
  PurchaseNotificationResponse$Outbound,
  PurchaseNotificationResponse$outboundSchema,
} from "./purchasenotificationresponse.js";
import {
  ResolvedObjectsResponse,
  ResolvedObjectsResponse$inboundSchema,
  ResolvedObjectsResponse$Outbound,
  ResolvedObjectsResponse$outboundSchema,
} from "./resolvedobjectsresponse.js";
import {
  SectionComponentResponse,
  SectionComponentResponse$inboundSchema,
  SectionComponentResponse$Outbound,
  SectionComponentResponse$outboundSchema,
} from "./sectioncomponentresponse.js";
import {
  SeparatorComponentResponse,
  SeparatorComponentResponse$inboundSchema,
  SeparatorComponentResponse$Outbound,
  SeparatorComponentResponse$outboundSchema,
} from "./separatorcomponentresponse.js";
import {
  StandardStickerResponse,
  StandardStickerResponse$inboundSchema,
  StandardStickerResponse$Outbound,
  StandardStickerResponse$outboundSchema,
} from "./standardstickerresponse.js";
import {
  TextDisplayComponentResponse,
  TextDisplayComponentResponse$inboundSchema,
  TextDisplayComponentResponse$Outbound,
  TextDisplayComponentResponse$outboundSchema,
} from "./textdisplaycomponentresponse.js";
import {
  ThreadResponse,
  ThreadResponse$inboundSchema,
  ThreadResponse$Outbound,
  ThreadResponse$outboundSchema,
} from "./threadresponse.js";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";

export type BasicMessageResponseComponents =
  | ActionRowComponentResponse
  | MediaGalleryComponentResponse
  | TextDisplayComponentResponse
  | SectionComponentResponse
  | SeparatorComponentResponse
  | ContainerComponentResponse
  | FileComponentResponse;

export type BasicMessageResponseStickers =
  | StandardStickerResponse
  | GuildStickerResponse;

export type BasicMessageResponseNonce = number | string;

export type BasicMessageResponseInteractionMetadata =
  | MessageComponentInteractionMetadataResponse
  | ModalSubmitInteractionMetadataResponse
  | ApplicationCommandInteractionMetadataResponse;

export type BasicMessageResponse = {
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
    | ActionRowComponentResponse
    | MediaGalleryComponentResponse
    | TextDisplayComponentResponse
    | SectionComponentResponse
    | SeparatorComponentResponse
    | ContainerComponentResponse
    | FileComponentResponse
  >;
  resolved?: ResolvedObjectsResponse | null | undefined;
  stickers?:
    | Array<StandardStickerResponse | GuildStickerResponse>
    | null
    | undefined;
  stickerItems?: Array<MessageStickerItemResponse> | null | undefined;
  id: string;
  channelId: string;
  author: UserResponse;
  pinned: boolean;
  mentionEveryone: boolean;
  tts: boolean;
  call?: MessageCallResponse | null | undefined;
  activity?: MessageActivityResponse | null | undefined;
  application?: BasicApplicationResponse | null | undefined;
  applicationId?: string | null | undefined;
  interaction?: MessageInteractionResponse | null | undefined;
  nonce?: number | string | null | undefined;
  webhookId?: string | null | undefined;
  messageReference?: MessageReferenceResponse | null | undefined;
  thread?: ThreadResponse | null | undefined;
  mentionChannels?:
    | Array<MessageMentionChannelResponse | null>
    | null
    | undefined;
  roleSubscriptionData?: MessageRoleSubscriptionDataResponse | null | undefined;
  purchaseNotification?: PurchaseNotificationResponse | null | undefined;
  position?: number | null | undefined;
  poll?: PollResponse | null | undefined;
  interactionMetadata?:
    | MessageComponentInteractionMetadataResponse
    | ModalSubmitInteractionMetadataResponse
    | ApplicationCommandInteractionMetadataResponse
    | null
    | undefined;
  messageSnapshots?: Array<MessageSnapshotResponse> | null | undefined;
};

/** @internal */
export const BasicMessageResponseComponents$inboundSchema: z.ZodType<
  BasicMessageResponseComponents,
  z.ZodTypeDef,
  unknown
> = z.union([
  ActionRowComponentResponse$inboundSchema,
  MediaGalleryComponentResponse$inboundSchema,
  TextDisplayComponentResponse$inboundSchema,
  SectionComponentResponse$inboundSchema,
  SeparatorComponentResponse$inboundSchema,
  ContainerComponentResponse$inboundSchema,
  FileComponentResponse$inboundSchema,
]);

/** @internal */
export type BasicMessageResponseComponents$Outbound =
  | ActionRowComponentResponse$Outbound
  | MediaGalleryComponentResponse$Outbound
  | TextDisplayComponentResponse$Outbound
  | SectionComponentResponse$Outbound
  | SeparatorComponentResponse$Outbound
  | ContainerComponentResponse$Outbound
  | FileComponentResponse$Outbound;

/** @internal */
export const BasicMessageResponseComponents$outboundSchema: z.ZodType<
  BasicMessageResponseComponents$Outbound,
  z.ZodTypeDef,
  BasicMessageResponseComponents
> = z.union([
  ActionRowComponentResponse$outboundSchema,
  MediaGalleryComponentResponse$outboundSchema,
  TextDisplayComponentResponse$outboundSchema,
  SectionComponentResponse$outboundSchema,
  SeparatorComponentResponse$outboundSchema,
  ContainerComponentResponse$outboundSchema,
  FileComponentResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BasicMessageResponseComponents$ {
  /** @deprecated use `BasicMessageResponseComponents$inboundSchema` instead. */
  export const inboundSchema = BasicMessageResponseComponents$inboundSchema;
  /** @deprecated use `BasicMessageResponseComponents$outboundSchema` instead. */
  export const outboundSchema = BasicMessageResponseComponents$outboundSchema;
  /** @deprecated use `BasicMessageResponseComponents$Outbound` instead. */
  export type Outbound = BasicMessageResponseComponents$Outbound;
}

export function basicMessageResponseComponentsToJSON(
  basicMessageResponseComponents: BasicMessageResponseComponents,
): string {
  return JSON.stringify(
    BasicMessageResponseComponents$outboundSchema.parse(
      basicMessageResponseComponents,
    ),
  );
}

export function basicMessageResponseComponentsFromJSON(
  jsonString: string,
): SafeParseResult<BasicMessageResponseComponents, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BasicMessageResponseComponents$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BasicMessageResponseComponents' from JSON`,
  );
}

/** @internal */
export const BasicMessageResponseStickers$inboundSchema: z.ZodType<
  BasicMessageResponseStickers,
  z.ZodTypeDef,
  unknown
> = z.union([
  StandardStickerResponse$inboundSchema,
  GuildStickerResponse$inboundSchema,
]);

/** @internal */
export type BasicMessageResponseStickers$Outbound =
  | StandardStickerResponse$Outbound
  | GuildStickerResponse$Outbound;

/** @internal */
export const BasicMessageResponseStickers$outboundSchema: z.ZodType<
  BasicMessageResponseStickers$Outbound,
  z.ZodTypeDef,
  BasicMessageResponseStickers
> = z.union([
  StandardStickerResponse$outboundSchema,
  GuildStickerResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BasicMessageResponseStickers$ {
  /** @deprecated use `BasicMessageResponseStickers$inboundSchema` instead. */
  export const inboundSchema = BasicMessageResponseStickers$inboundSchema;
  /** @deprecated use `BasicMessageResponseStickers$outboundSchema` instead. */
  export const outboundSchema = BasicMessageResponseStickers$outboundSchema;
  /** @deprecated use `BasicMessageResponseStickers$Outbound` instead. */
  export type Outbound = BasicMessageResponseStickers$Outbound;
}

export function basicMessageResponseStickersToJSON(
  basicMessageResponseStickers: BasicMessageResponseStickers,
): string {
  return JSON.stringify(
    BasicMessageResponseStickers$outboundSchema.parse(
      basicMessageResponseStickers,
    ),
  );
}

export function basicMessageResponseStickersFromJSON(
  jsonString: string,
): SafeParseResult<BasicMessageResponseStickers, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BasicMessageResponseStickers$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BasicMessageResponseStickers' from JSON`,
  );
}

/** @internal */
export const BasicMessageResponseNonce$inboundSchema: z.ZodType<
  BasicMessageResponseNonce,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.string()]);

/** @internal */
export type BasicMessageResponseNonce$Outbound = number | string;

/** @internal */
export const BasicMessageResponseNonce$outboundSchema: z.ZodType<
  BasicMessageResponseNonce$Outbound,
  z.ZodTypeDef,
  BasicMessageResponseNonce
> = z.union([z.number().int(), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BasicMessageResponseNonce$ {
  /** @deprecated use `BasicMessageResponseNonce$inboundSchema` instead. */
  export const inboundSchema = BasicMessageResponseNonce$inboundSchema;
  /** @deprecated use `BasicMessageResponseNonce$outboundSchema` instead. */
  export const outboundSchema = BasicMessageResponseNonce$outboundSchema;
  /** @deprecated use `BasicMessageResponseNonce$Outbound` instead. */
  export type Outbound = BasicMessageResponseNonce$Outbound;
}

export function basicMessageResponseNonceToJSON(
  basicMessageResponseNonce: BasicMessageResponseNonce,
): string {
  return JSON.stringify(
    BasicMessageResponseNonce$outboundSchema.parse(basicMessageResponseNonce),
  );
}

export function basicMessageResponseNonceFromJSON(
  jsonString: string,
): SafeParseResult<BasicMessageResponseNonce, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BasicMessageResponseNonce$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BasicMessageResponseNonce' from JSON`,
  );
}

/** @internal */
export const BasicMessageResponseInteractionMetadata$inboundSchema: z.ZodType<
  BasicMessageResponseInteractionMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([
  MessageComponentInteractionMetadataResponse$inboundSchema,
  ModalSubmitInteractionMetadataResponse$inboundSchema,
  ApplicationCommandInteractionMetadataResponse$inboundSchema,
]);

/** @internal */
export type BasicMessageResponseInteractionMetadata$Outbound =
  | MessageComponentInteractionMetadataResponse$Outbound
  | ModalSubmitInteractionMetadataResponse$Outbound
  | ApplicationCommandInteractionMetadataResponse$Outbound;

/** @internal */
export const BasicMessageResponseInteractionMetadata$outboundSchema: z.ZodType<
  BasicMessageResponseInteractionMetadata$Outbound,
  z.ZodTypeDef,
  BasicMessageResponseInteractionMetadata
> = z.union([
  MessageComponentInteractionMetadataResponse$outboundSchema,
  ModalSubmitInteractionMetadataResponse$outboundSchema,
  ApplicationCommandInteractionMetadataResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BasicMessageResponseInteractionMetadata$ {
  /** @deprecated use `BasicMessageResponseInteractionMetadata$inboundSchema` instead. */
  export const inboundSchema =
    BasicMessageResponseInteractionMetadata$inboundSchema;
  /** @deprecated use `BasicMessageResponseInteractionMetadata$outboundSchema` instead. */
  export const outboundSchema =
    BasicMessageResponseInteractionMetadata$outboundSchema;
  /** @deprecated use `BasicMessageResponseInteractionMetadata$Outbound` instead. */
  export type Outbound = BasicMessageResponseInteractionMetadata$Outbound;
}

export function basicMessageResponseInteractionMetadataToJSON(
  basicMessageResponseInteractionMetadata:
    BasicMessageResponseInteractionMetadata,
): string {
  return JSON.stringify(
    BasicMessageResponseInteractionMetadata$outboundSchema.parse(
      basicMessageResponseInteractionMetadata,
    ),
  );
}

export function basicMessageResponseInteractionMetadataFromJSON(
  jsonString: string,
): SafeParseResult<
  BasicMessageResponseInteractionMetadata,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      BasicMessageResponseInteractionMetadata$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'BasicMessageResponseInteractionMetadata' from JSON`,
  );
}

/** @internal */
export const BasicMessageResponse$inboundSchema: z.ZodType<
  BasicMessageResponse,
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
      ActionRowComponentResponse$inboundSchema,
      MediaGalleryComponentResponse$inboundSchema,
      TextDisplayComponentResponse$inboundSchema,
      SectionComponentResponse$inboundSchema,
      SeparatorComponentResponse$inboundSchema,
      ContainerComponentResponse$inboundSchema,
      FileComponentResponse$inboundSchema,
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
  id: z.string(),
  channel_id: z.string(),
  author: UserResponse$inboundSchema,
  pinned: z.boolean(),
  mention_everyone: z.boolean(),
  tts: z.boolean(),
  call: z.nullable(MessageCallResponse$inboundSchema).optional(),
  activity: z.nullable(MessageActivityResponse$inboundSchema).optional(),
  application: z.nullable(BasicApplicationResponse$inboundSchema).optional(),
  application_id: z.nullable(z.string()).optional(),
  interaction: z.nullable(MessageInteractionResponse$inboundSchema).optional(),
  nonce: z.nullable(z.union([z.number().int(), z.string()])).optional(),
  webhook_id: z.nullable(z.string()).optional(),
  message_reference: z.nullable(MessageReferenceResponse$inboundSchema)
    .optional(),
  thread: z.nullable(ThreadResponse$inboundSchema).optional(),
  mention_channels: z.nullable(
    z.array(z.nullable(MessageMentionChannelResponse$inboundSchema)),
  ).optional(),
  role_subscription_data: z.nullable(
    MessageRoleSubscriptionDataResponse$inboundSchema,
  ).optional(),
  purchase_notification: z.nullable(PurchaseNotificationResponse$inboundSchema)
    .optional(),
  position: z.nullable(z.number().int()).optional(),
  poll: z.nullable(PollResponse$inboundSchema).optional(),
  interaction_metadata: z.nullable(
    z.union([
      MessageComponentInteractionMetadataResponse$inboundSchema,
      ModalSubmitInteractionMetadataResponse$inboundSchema,
      ApplicationCommandInteractionMetadataResponse$inboundSchema,
    ]),
  ).optional(),
  message_snapshots: z.nullable(z.array(MessageSnapshotResponse$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "mention_roles": "mentionRoles",
    "edited_timestamp": "editedTimestamp",
    "sticker_items": "stickerItems",
    "channel_id": "channelId",
    "mention_everyone": "mentionEveryone",
    "application_id": "applicationId",
    "webhook_id": "webhookId",
    "message_reference": "messageReference",
    "mention_channels": "mentionChannels",
    "role_subscription_data": "roleSubscriptionData",
    "purchase_notification": "purchaseNotification",
    "interaction_metadata": "interactionMetadata",
    "message_snapshots": "messageSnapshots",
  });
});

/** @internal */
export type BasicMessageResponse$Outbound = {
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
    | ActionRowComponentResponse$Outbound
    | MediaGalleryComponentResponse$Outbound
    | TextDisplayComponentResponse$Outbound
    | SectionComponentResponse$Outbound
    | SeparatorComponentResponse$Outbound
    | ContainerComponentResponse$Outbound
    | FileComponentResponse$Outbound
  >;
  resolved?: ResolvedObjectsResponse$Outbound | null | undefined;
  stickers?:
    | Array<StandardStickerResponse$Outbound | GuildStickerResponse$Outbound>
    | null
    | undefined;
  sticker_items?: Array<MessageStickerItemResponse$Outbound> | null | undefined;
  id: string;
  channel_id: string;
  author: UserResponse$Outbound;
  pinned: boolean;
  mention_everyone: boolean;
  tts: boolean;
  call?: MessageCallResponse$Outbound | null | undefined;
  activity?: MessageActivityResponse$Outbound | null | undefined;
  application?: BasicApplicationResponse$Outbound | null | undefined;
  application_id?: string | null | undefined;
  interaction?: MessageInteractionResponse$Outbound | null | undefined;
  nonce?: number | string | null | undefined;
  webhook_id?: string | null | undefined;
  message_reference?: MessageReferenceResponse$Outbound | null | undefined;
  thread?: ThreadResponse$Outbound | null | undefined;
  mention_channels?:
    | Array<MessageMentionChannelResponse$Outbound | null>
    | null
    | undefined;
  role_subscription_data?:
    | MessageRoleSubscriptionDataResponse$Outbound
    | null
    | undefined;
  purchase_notification?:
    | PurchaseNotificationResponse$Outbound
    | null
    | undefined;
  position?: number | null | undefined;
  poll?: PollResponse$Outbound | null | undefined;
  interaction_metadata?:
    | MessageComponentInteractionMetadataResponse$Outbound
    | ModalSubmitInteractionMetadataResponse$Outbound
    | ApplicationCommandInteractionMetadataResponse$Outbound
    | null
    | undefined;
  message_snapshots?:
    | Array<MessageSnapshotResponse$Outbound>
    | null
    | undefined;
};

/** @internal */
export const BasicMessageResponse$outboundSchema: z.ZodType<
  BasicMessageResponse$Outbound,
  z.ZodTypeDef,
  BasicMessageResponse
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
      ActionRowComponentResponse$outboundSchema,
      MediaGalleryComponentResponse$outboundSchema,
      TextDisplayComponentResponse$outboundSchema,
      SectionComponentResponse$outboundSchema,
      SeparatorComponentResponse$outboundSchema,
      ContainerComponentResponse$outboundSchema,
      FileComponentResponse$outboundSchema,
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
  id: z.string(),
  channelId: z.string(),
  author: UserResponse$outboundSchema,
  pinned: z.boolean(),
  mentionEveryone: z.boolean(),
  tts: z.boolean(),
  call: z.nullable(MessageCallResponse$outboundSchema).optional(),
  activity: z.nullable(MessageActivityResponse$outboundSchema).optional(),
  application: z.nullable(BasicApplicationResponse$outboundSchema).optional(),
  applicationId: z.nullable(z.string()).optional(),
  interaction: z.nullable(MessageInteractionResponse$outboundSchema).optional(),
  nonce: z.nullable(z.union([z.number().int(), z.string()])).optional(),
  webhookId: z.nullable(z.string()).optional(),
  messageReference: z.nullable(MessageReferenceResponse$outboundSchema)
    .optional(),
  thread: z.nullable(ThreadResponse$outboundSchema).optional(),
  mentionChannels: z.nullable(
    z.array(z.nullable(MessageMentionChannelResponse$outboundSchema)),
  ).optional(),
  roleSubscriptionData: z.nullable(
    MessageRoleSubscriptionDataResponse$outboundSchema,
  ).optional(),
  purchaseNotification: z.nullable(PurchaseNotificationResponse$outboundSchema)
    .optional(),
  position: z.nullable(z.number().int()).optional(),
  poll: z.nullable(PollResponse$outboundSchema).optional(),
  interactionMetadata: z.nullable(
    z.union([
      MessageComponentInteractionMetadataResponse$outboundSchema,
      ModalSubmitInteractionMetadataResponse$outboundSchema,
      ApplicationCommandInteractionMetadataResponse$outboundSchema,
    ]),
  ).optional(),
  messageSnapshots: z.nullable(z.array(MessageSnapshotResponse$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    mentionRoles: "mention_roles",
    editedTimestamp: "edited_timestamp",
    stickerItems: "sticker_items",
    channelId: "channel_id",
    mentionEveryone: "mention_everyone",
    applicationId: "application_id",
    webhookId: "webhook_id",
    messageReference: "message_reference",
    mentionChannels: "mention_channels",
    roleSubscriptionData: "role_subscription_data",
    purchaseNotification: "purchase_notification",
    interactionMetadata: "interaction_metadata",
    messageSnapshots: "message_snapshots",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BasicMessageResponse$ {
  /** @deprecated use `BasicMessageResponse$inboundSchema` instead. */
  export const inboundSchema = BasicMessageResponse$inboundSchema;
  /** @deprecated use `BasicMessageResponse$outboundSchema` instead. */
  export const outboundSchema = BasicMessageResponse$outboundSchema;
  /** @deprecated use `BasicMessageResponse$Outbound` instead. */
  export type Outbound = BasicMessageResponse$Outbound;
}

export function basicMessageResponseToJSON(
  basicMessageResponse: BasicMessageResponse,
): string {
  return JSON.stringify(
    BasicMessageResponse$outboundSchema.parse(basicMessageResponse),
  );
}

export function basicMessageResponseFromJSON(
  jsonString: string,
): SafeParseResult<BasicMessageResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BasicMessageResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BasicMessageResponse' from JSON`,
  );
}
