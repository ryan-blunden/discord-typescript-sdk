/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type DeleteApplicationEmojiRequest = {
  applicationId: string;
  emojiId: string;
};

/** @internal */
export const DeleteApplicationEmojiRequest$inboundSchema: z.ZodType<
  DeleteApplicationEmojiRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.string(),
  emoji_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "emoji_id": "emojiId",
  });
});

/** @internal */
export type DeleteApplicationEmojiRequest$Outbound = {
  application_id: string;
  emoji_id: string;
};

/** @internal */
export const DeleteApplicationEmojiRequest$outboundSchema: z.ZodType<
  DeleteApplicationEmojiRequest$Outbound,
  z.ZodTypeDef,
  DeleteApplicationEmojiRequest
> = z.object({
  applicationId: z.string(),
  emojiId: z.string(),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    emojiId: "emoji_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteApplicationEmojiRequest$ {
  /** @deprecated use `DeleteApplicationEmojiRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteApplicationEmojiRequest$inboundSchema;
  /** @deprecated use `DeleteApplicationEmojiRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteApplicationEmojiRequest$outboundSchema;
  /** @deprecated use `DeleteApplicationEmojiRequest$Outbound` instead. */
  export type Outbound = DeleteApplicationEmojiRequest$Outbound;
}
