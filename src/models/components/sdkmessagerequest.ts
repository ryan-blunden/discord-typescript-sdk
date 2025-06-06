/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ActionRowComponentForMessageRequest,
  ActionRowComponentForMessageRequest$inboundSchema,
  ActionRowComponentForMessageRequest$Outbound,
  ActionRowComponentForMessageRequest$outboundSchema,
} from "./actionrowcomponentformessagerequest.js";
import {
  ConfettiPotionCreateRequest,
  ConfettiPotionCreateRequest$inboundSchema,
  ConfettiPotionCreateRequest$Outbound,
  ConfettiPotionCreateRequest$outboundSchema,
} from "./confettipotioncreaterequest.js";
import {
  ContainerComponentForMessageRequest,
  ContainerComponentForMessageRequest$inboundSchema,
  ContainerComponentForMessageRequest$Outbound,
  ContainerComponentForMessageRequest$outboundSchema,
} from "./containercomponentformessagerequest.js";
import {
  FileComponentForMessageRequest,
  FileComponentForMessageRequest$inboundSchema,
  FileComponentForMessageRequest$Outbound,
  FileComponentForMessageRequest$outboundSchema,
} from "./filecomponentformessagerequest.js";
import {
  MediaGalleryComponentForMessageRequest,
  MediaGalleryComponentForMessageRequest$inboundSchema,
  MediaGalleryComponentForMessageRequest$Outbound,
  MediaGalleryComponentForMessageRequest$outboundSchema,
} from "./mediagallerycomponentformessagerequest.js";
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
  MessageReferenceRequest,
  MessageReferenceRequest$inboundSchema,
  MessageReferenceRequest$Outbound,
  MessageReferenceRequest$outboundSchema,
} from "./messagereferencerequest.js";
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
import {
  SectionComponentForMessageRequest,
  SectionComponentForMessageRequest$inboundSchema,
  SectionComponentForMessageRequest$Outbound,
  SectionComponentForMessageRequest$outboundSchema,
} from "./sectioncomponentformessagerequest.js";
import {
  SeparatorComponentForMessageRequest,
  SeparatorComponentForMessageRequest$inboundSchema,
  SeparatorComponentForMessageRequest$Outbound,
  SeparatorComponentForMessageRequest$outboundSchema,
} from "./separatorcomponentformessagerequest.js";
import {
  TextDisplayComponentForMessageRequest,
  TextDisplayComponentForMessageRequest$inboundSchema,
  TextDisplayComponentForMessageRequest$Outbound,
  TextDisplayComponentForMessageRequest$outboundSchema,
} from "./textdisplaycomponentformessagerequest.js";

export type SDKMessageRequestComponents =
  | ActionRowComponentForMessageRequest
  | MediaGalleryComponentForMessageRequest
  | TextDisplayComponentForMessageRequest
  | FileComponentForMessageRequest
  | SectionComponentForMessageRequest
  | SeparatorComponentForMessageRequest
  | ContainerComponentForMessageRequest;

export type SDKMessageRequestNonce = number | string;

export type SDKMessageRequest = {
  content?: string | null | undefined;
  embeds?: Array<RichEmbed> | null | undefined;
  allowedMentions?: MessageAllowedMentionsRequest | null | undefined;
  stickerIds?: Array<string> | null | undefined;
  components?:
    | Array<
      | ActionRowComponentForMessageRequest
      | MediaGalleryComponentForMessageRequest
      | TextDisplayComponentForMessageRequest
      | FileComponentForMessageRequest
      | SectionComponentForMessageRequest
      | SeparatorComponentForMessageRequest
      | ContainerComponentForMessageRequest
    >
    | null
    | undefined;
  flags?: number | null | undefined;
  attachments?: Array<MessageAttachmentRequest> | null | undefined;
  poll?: PollCreateRequest | null | undefined;
  confettiPotion?: ConfettiPotionCreateRequest | null | undefined;
  messageReference?: MessageReferenceRequest | null | undefined;
  nonce?: number | string | null | undefined;
  enforceNonce?: boolean | null | undefined;
  tts?: boolean | null | undefined;
};

/** @internal */
export const SDKMessageRequestComponents$inboundSchema: z.ZodType<
  SDKMessageRequestComponents,
  z.ZodTypeDef,
  unknown
> = z.union([
  ActionRowComponentForMessageRequest$inboundSchema,
  MediaGalleryComponentForMessageRequest$inboundSchema,
  TextDisplayComponentForMessageRequest$inboundSchema,
  FileComponentForMessageRequest$inboundSchema,
  SectionComponentForMessageRequest$inboundSchema,
  SeparatorComponentForMessageRequest$inboundSchema,
  ContainerComponentForMessageRequest$inboundSchema,
]);

/** @internal */
export type SDKMessageRequestComponents$Outbound =
  | ActionRowComponentForMessageRequest$Outbound
  | MediaGalleryComponentForMessageRequest$Outbound
  | TextDisplayComponentForMessageRequest$Outbound
  | FileComponentForMessageRequest$Outbound
  | SectionComponentForMessageRequest$Outbound
  | SeparatorComponentForMessageRequest$Outbound
  | ContainerComponentForMessageRequest$Outbound;

/** @internal */
export const SDKMessageRequestComponents$outboundSchema: z.ZodType<
  SDKMessageRequestComponents$Outbound,
  z.ZodTypeDef,
  SDKMessageRequestComponents
> = z.union([
  ActionRowComponentForMessageRequest$outboundSchema,
  MediaGalleryComponentForMessageRequest$outboundSchema,
  TextDisplayComponentForMessageRequest$outboundSchema,
  FileComponentForMessageRequest$outboundSchema,
  SectionComponentForMessageRequest$outboundSchema,
  SeparatorComponentForMessageRequest$outboundSchema,
  ContainerComponentForMessageRequest$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SDKMessageRequestComponents$ {
  /** @deprecated use `SDKMessageRequestComponents$inboundSchema` instead. */
  export const inboundSchema = SDKMessageRequestComponents$inboundSchema;
  /** @deprecated use `SDKMessageRequestComponents$outboundSchema` instead. */
  export const outboundSchema = SDKMessageRequestComponents$outboundSchema;
  /** @deprecated use `SDKMessageRequestComponents$Outbound` instead. */
  export type Outbound = SDKMessageRequestComponents$Outbound;
}

export function sdkMessageRequestComponentsToJSON(
  sdkMessageRequestComponents: SDKMessageRequestComponents,
): string {
  return JSON.stringify(
    SDKMessageRequestComponents$outboundSchema.parse(
      sdkMessageRequestComponents,
    ),
  );
}

export function sdkMessageRequestComponentsFromJSON(
  jsonString: string,
): SafeParseResult<SDKMessageRequestComponents, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SDKMessageRequestComponents$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SDKMessageRequestComponents' from JSON`,
  );
}

/** @internal */
export const SDKMessageRequestNonce$inboundSchema: z.ZodType<
  SDKMessageRequestNonce,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.string()]);

/** @internal */
export type SDKMessageRequestNonce$Outbound = number | string;

/** @internal */
export const SDKMessageRequestNonce$outboundSchema: z.ZodType<
  SDKMessageRequestNonce$Outbound,
  z.ZodTypeDef,
  SDKMessageRequestNonce
> = z.union([z.number().int(), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SDKMessageRequestNonce$ {
  /** @deprecated use `SDKMessageRequestNonce$inboundSchema` instead. */
  export const inboundSchema = SDKMessageRequestNonce$inboundSchema;
  /** @deprecated use `SDKMessageRequestNonce$outboundSchema` instead. */
  export const outboundSchema = SDKMessageRequestNonce$outboundSchema;
  /** @deprecated use `SDKMessageRequestNonce$Outbound` instead. */
  export type Outbound = SDKMessageRequestNonce$Outbound;
}

export function sdkMessageRequestNonceToJSON(
  sdkMessageRequestNonce: SDKMessageRequestNonce,
): string {
  return JSON.stringify(
    SDKMessageRequestNonce$outboundSchema.parse(sdkMessageRequestNonce),
  );
}

export function sdkMessageRequestNonceFromJSON(
  jsonString: string,
): SafeParseResult<SDKMessageRequestNonce, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SDKMessageRequestNonce$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SDKMessageRequestNonce' from JSON`,
  );
}

/** @internal */
export const SDKMessageRequest$inboundSchema: z.ZodType<
  SDKMessageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  content: z.nullable(z.string()).optional(),
  embeds: z.nullable(z.array(RichEmbed$inboundSchema)).optional(),
  allowed_mentions: z.nullable(MessageAllowedMentionsRequest$inboundSchema)
    .optional(),
  sticker_ids: z.nullable(z.array(z.string())).optional(),
  components: z.nullable(
    z.array(
      z.union([
        ActionRowComponentForMessageRequest$inboundSchema,
        MediaGalleryComponentForMessageRequest$inboundSchema,
        TextDisplayComponentForMessageRequest$inboundSchema,
        FileComponentForMessageRequest$inboundSchema,
        SectionComponentForMessageRequest$inboundSchema,
        SeparatorComponentForMessageRequest$inboundSchema,
        ContainerComponentForMessageRequest$inboundSchema,
      ]),
    ),
  ).optional(),
  flags: z.nullable(z.number().int()).optional(),
  attachments: z.nullable(z.array(MessageAttachmentRequest$inboundSchema))
    .optional(),
  poll: z.nullable(PollCreateRequest$inboundSchema).optional(),
  confetti_potion: z.nullable(ConfettiPotionCreateRequest$inboundSchema)
    .optional(),
  message_reference: z.nullable(MessageReferenceRequest$inboundSchema)
    .optional(),
  nonce: z.nullable(z.union([z.number().int(), z.string()])).optional(),
  enforce_nonce: z.nullable(z.boolean()).optional(),
  tts: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "allowed_mentions": "allowedMentions",
    "sticker_ids": "stickerIds",
    "confetti_potion": "confettiPotion",
    "message_reference": "messageReference",
    "enforce_nonce": "enforceNonce",
  });
});

/** @internal */
export type SDKMessageRequest$Outbound = {
  content?: string | null | undefined;
  embeds?: Array<RichEmbed$Outbound> | null | undefined;
  allowed_mentions?: MessageAllowedMentionsRequest$Outbound | null | undefined;
  sticker_ids?: Array<string> | null | undefined;
  components?:
    | Array<
      | ActionRowComponentForMessageRequest$Outbound
      | MediaGalleryComponentForMessageRequest$Outbound
      | TextDisplayComponentForMessageRequest$Outbound
      | FileComponentForMessageRequest$Outbound
      | SectionComponentForMessageRequest$Outbound
      | SeparatorComponentForMessageRequest$Outbound
      | ContainerComponentForMessageRequest$Outbound
    >
    | null
    | undefined;
  flags?: number | null | undefined;
  attachments?: Array<MessageAttachmentRequest$Outbound> | null | undefined;
  poll?: PollCreateRequest$Outbound | null | undefined;
  confetti_potion?: ConfettiPotionCreateRequest$Outbound | null | undefined;
  message_reference?: MessageReferenceRequest$Outbound | null | undefined;
  nonce?: number | string | null | undefined;
  enforce_nonce?: boolean | null | undefined;
  tts?: boolean | null | undefined;
};

/** @internal */
export const SDKMessageRequest$outboundSchema: z.ZodType<
  SDKMessageRequest$Outbound,
  z.ZodTypeDef,
  SDKMessageRequest
> = z.object({
  content: z.nullable(z.string()).optional(),
  embeds: z.nullable(z.array(RichEmbed$outboundSchema)).optional(),
  allowedMentions: z.nullable(MessageAllowedMentionsRequest$outboundSchema)
    .optional(),
  stickerIds: z.nullable(z.array(z.string())).optional(),
  components: z.nullable(
    z.array(
      z.union([
        ActionRowComponentForMessageRequest$outboundSchema,
        MediaGalleryComponentForMessageRequest$outboundSchema,
        TextDisplayComponentForMessageRequest$outboundSchema,
        FileComponentForMessageRequest$outboundSchema,
        SectionComponentForMessageRequest$outboundSchema,
        SeparatorComponentForMessageRequest$outboundSchema,
        ContainerComponentForMessageRequest$outboundSchema,
      ]),
    ),
  ).optional(),
  flags: z.nullable(z.number().int()).optional(),
  attachments: z.nullable(z.array(MessageAttachmentRequest$outboundSchema))
    .optional(),
  poll: z.nullable(PollCreateRequest$outboundSchema).optional(),
  confettiPotion: z.nullable(ConfettiPotionCreateRequest$outboundSchema)
    .optional(),
  messageReference: z.nullable(MessageReferenceRequest$outboundSchema)
    .optional(),
  nonce: z.nullable(z.union([z.number().int(), z.string()])).optional(),
  enforceNonce: z.nullable(z.boolean()).optional(),
  tts: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    allowedMentions: "allowed_mentions",
    stickerIds: "sticker_ids",
    confettiPotion: "confetti_potion",
    messageReference: "message_reference",
    enforceNonce: "enforce_nonce",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SDKMessageRequest$ {
  /** @deprecated use `SDKMessageRequest$inboundSchema` instead. */
  export const inboundSchema = SDKMessageRequest$inboundSchema;
  /** @deprecated use `SDKMessageRequest$outboundSchema` instead. */
  export const outboundSchema = SDKMessageRequest$outboundSchema;
  /** @deprecated use `SDKMessageRequest$Outbound` instead. */
  export type Outbound = SDKMessageRequest$Outbound;
}

export function sdkMessageRequestToJSON(
  sdkMessageRequest: SDKMessageRequest,
): string {
  return JSON.stringify(
    SDKMessageRequest$outboundSchema.parse(sdkMessageRequest),
  );
}

export function sdkMessageRequestFromJSON(
  jsonString: string,
): SafeParseResult<SDKMessageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SDKMessageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SDKMessageRequest' from JSON`,
  );
}
