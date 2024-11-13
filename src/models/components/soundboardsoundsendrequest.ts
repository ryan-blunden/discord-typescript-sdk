/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type SoundboardSoundSendRequest = {
  soundId: string;
  sourceGuildId?: string | null | undefined;
};

/** @internal */
export const SoundboardSoundSendRequest$inboundSchema: z.ZodType<
  SoundboardSoundSendRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sound_id: z.string(),
  source_guild_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "sound_id": "soundId",
    "source_guild_id": "sourceGuildId",
  });
});

/** @internal */
export type SoundboardSoundSendRequest$Outbound = {
  sound_id: string;
  source_guild_id?: string | null | undefined;
};

/** @internal */
export const SoundboardSoundSendRequest$outboundSchema: z.ZodType<
  SoundboardSoundSendRequest$Outbound,
  z.ZodTypeDef,
  SoundboardSoundSendRequest
> = z.object({
  soundId: z.string(),
  sourceGuildId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    soundId: "sound_id",
    sourceGuildId: "source_guild_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SoundboardSoundSendRequest$ {
  /** @deprecated use `SoundboardSoundSendRequest$inboundSchema` instead. */
  export const inboundSchema = SoundboardSoundSendRequest$inboundSchema;
  /** @deprecated use `SoundboardSoundSendRequest$outboundSchema` instead. */
  export const outboundSchema = SoundboardSoundSendRequest$outboundSchema;
  /** @deprecated use `SoundboardSoundSendRequest$Outbound` instead. */
  export type Outbound = SoundboardSoundSendRequest$Outbound;
}