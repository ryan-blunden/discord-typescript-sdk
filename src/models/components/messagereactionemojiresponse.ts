/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type MessageReactionEmojiResponse = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  animated?: boolean | null | undefined;
};

/** @internal */
export const MessageReactionEmojiResponse$inboundSchema: z.ZodType<
  MessageReactionEmojiResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  animated: z.nullable(z.boolean()).optional(),
});

/** @internal */
export type MessageReactionEmojiResponse$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  animated?: boolean | null | undefined;
};

/** @internal */
export const MessageReactionEmojiResponse$outboundSchema: z.ZodType<
  MessageReactionEmojiResponse$Outbound,
  z.ZodTypeDef,
  MessageReactionEmojiResponse
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  animated: z.nullable(z.boolean()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageReactionEmojiResponse$ {
  /** @deprecated use `MessageReactionEmojiResponse$inboundSchema` instead. */
  export const inboundSchema = MessageReactionEmojiResponse$inboundSchema;
  /** @deprecated use `MessageReactionEmojiResponse$outboundSchema` instead. */
  export const outboundSchema = MessageReactionEmojiResponse$outboundSchema;
  /** @deprecated use `MessageReactionEmojiResponse$Outbound` instead. */
  export type Outbound = MessageReactionEmojiResponse$Outbound;
}
