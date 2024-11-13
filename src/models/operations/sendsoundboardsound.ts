/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type SendSoundboardSoundRequest = {
  channelId: string;
  soundboardSoundSendRequest: components.SoundboardSoundSendRequest;
};

/** @internal */
export const SendSoundboardSoundRequest$inboundSchema: z.ZodType<
  SendSoundboardSoundRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  SoundboardSoundSendRequest:
    components.SoundboardSoundSendRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "SoundboardSoundSendRequest": "soundboardSoundSendRequest",
  });
});

/** @internal */
export type SendSoundboardSoundRequest$Outbound = {
  channel_id: string;
  SoundboardSoundSendRequest: components.SoundboardSoundSendRequest$Outbound;
};

/** @internal */
export const SendSoundboardSoundRequest$outboundSchema: z.ZodType<
  SendSoundboardSoundRequest$Outbound,
  z.ZodTypeDef,
  SendSoundboardSoundRequest
> = z.object({
  channelId: z.string(),
  soundboardSoundSendRequest:
    components.SoundboardSoundSendRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    soundboardSoundSendRequest: "SoundboardSoundSendRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SendSoundboardSoundRequest$ {
  /** @deprecated use `SendSoundboardSoundRequest$inboundSchema` instead. */
  export const inboundSchema = SendSoundboardSoundRequest$inboundSchema;
  /** @deprecated use `SendSoundboardSoundRequest$outboundSchema` instead. */
  export const outboundSchema = SendSoundboardSoundRequest$outboundSchema;
  /** @deprecated use `SendSoundboardSoundRequest$Outbound` instead. */
  export type Outbound = SendSoundboardSoundRequest$Outbound;
}