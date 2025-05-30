/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Channel types (1: DM, 3: GROUP_DM, 0: GUILD_TEXT, 2: GUILD_VOICE, 4: GUILD_CATEGORY, 5: GUILD_ANNOUNCEMENT, 7: UNKNOWN, 10: ANNOUNCEMENT_THREAD, 11: PUBLIC_THREAD, 12: PRIVATE_THREAD, 13: GUILD_STAGE_VOICE, 14: GUILD_DIRECTORY, 15: GUILD_FORUM)
 */
export const ChannelTypes = {
  Zero: 0,
  One: 1,
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Seven: 7,
  Ten: 10,
  Eleven: 11,
  Twelve: 12,
  Thirteen: 13,
  Fourteen: 14,
  Fifteen: 15,
} as const;
/**
 * Channel types (1: DM, 3: GROUP_DM, 0: GUILD_TEXT, 2: GUILD_VOICE, 4: GUILD_CATEGORY, 5: GUILD_ANNOUNCEMENT, 7: UNKNOWN, 10: ANNOUNCEMENT_THREAD, 11: PUBLIC_THREAD, 12: PRIVATE_THREAD, 13: GUILD_STAGE_VOICE, 14: GUILD_DIRECTORY, 15: GUILD_FORUM)
 */
export type ChannelTypes = ClosedEnum<typeof ChannelTypes>;

/** @internal */
export const ChannelTypes$inboundSchema: z.ZodNativeEnum<typeof ChannelTypes> =
  z.nativeEnum(ChannelTypes);

/** @internal */
export const ChannelTypes$outboundSchema: z.ZodNativeEnum<typeof ChannelTypes> =
  ChannelTypes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChannelTypes$ {
  /** @deprecated use `ChannelTypes$inboundSchema` instead. */
  export const inboundSchema = ChannelTypes$inboundSchema;
  /** @deprecated use `ChannelTypes$outboundSchema` instead. */
  export const outboundSchema = ChannelTypes$outboundSchema;
}
