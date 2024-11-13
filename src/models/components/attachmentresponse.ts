/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ApplicationResponse,
  ApplicationResponse$inboundSchema,
  ApplicationResponse$Outbound,
  ApplicationResponse$outboundSchema,
} from "./applicationresponse.js";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";

export type AttachmentResponse = {
  id: string;
  filename: string;
  size: number;
  url: string;
  proxyUrl: string;
  width?: number | null | undefined;
  height?: number | null | undefined;
  durationSecs?: number | null | undefined;
  waveform?: string | null | undefined;
  description?: string | null | undefined;
  contentType?: string | null | undefined;
  ephemeral?: boolean | null | undefined;
  title?: string | null | undefined;
  application?: ApplicationResponse | null | undefined;
  clipCreatedAt?: Date | null | undefined;
  clipParticipants?: Array<UserResponse> | null | undefined;
};

/** @internal */
export const AttachmentResponse$inboundSchema: z.ZodType<
  AttachmentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  filename: z.string(),
  size: z.number().int(),
  url: z.string(),
  proxy_url: z.string(),
  width: z.nullable(z.number().int()).optional(),
  height: z.nullable(z.number().int()).optional(),
  duration_secs: z.nullable(z.number()).optional(),
  waveform: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  content_type: z.nullable(z.string()).optional(),
  ephemeral: z.nullable(z.boolean()).optional(),
  title: z.nullable(z.string()).optional(),
  application: z.nullable(ApplicationResponse$inboundSchema).optional(),
  clip_created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  clip_participants: z.nullable(z.array(UserResponse$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "proxy_url": "proxyUrl",
    "duration_secs": "durationSecs",
    "content_type": "contentType",
    "clip_created_at": "clipCreatedAt",
    "clip_participants": "clipParticipants",
  });
});

/** @internal */
export type AttachmentResponse$Outbound = {
  id: string;
  filename: string;
  size: number;
  url: string;
  proxy_url: string;
  width?: number | null | undefined;
  height?: number | null | undefined;
  duration_secs?: number | null | undefined;
  waveform?: string | null | undefined;
  description?: string | null | undefined;
  content_type?: string | null | undefined;
  ephemeral?: boolean | null | undefined;
  title?: string | null | undefined;
  application?: ApplicationResponse$Outbound | null | undefined;
  clip_created_at?: string | null | undefined;
  clip_participants?: Array<UserResponse$Outbound> | null | undefined;
};

/** @internal */
export const AttachmentResponse$outboundSchema: z.ZodType<
  AttachmentResponse$Outbound,
  z.ZodTypeDef,
  AttachmentResponse
> = z.object({
  id: z.string(),
  filename: z.string(),
  size: z.number().int(),
  url: z.string(),
  proxyUrl: z.string(),
  width: z.nullable(z.number().int()).optional(),
  height: z.nullable(z.number().int()).optional(),
  durationSecs: z.nullable(z.number()).optional(),
  waveform: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  contentType: z.nullable(z.string()).optional(),
  ephemeral: z.nullable(z.boolean()).optional(),
  title: z.nullable(z.string()).optional(),
  application: z.nullable(ApplicationResponse$outboundSchema).optional(),
  clipCreatedAt: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  clipParticipants: z.nullable(z.array(UserResponse$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    proxyUrl: "proxy_url",
    durationSecs: "duration_secs",
    contentType: "content_type",
    clipCreatedAt: "clip_created_at",
    clipParticipants: "clip_participants",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AttachmentResponse$ {
  /** @deprecated use `AttachmentResponse$inboundSchema` instead. */
  export const inboundSchema = AttachmentResponse$inboundSchema;
  /** @deprecated use `AttachmentResponse$outboundSchema` instead. */
  export const outboundSchema = AttachmentResponse$outboundSchema;
  /** @deprecated use `AttachmentResponse$Outbound` instead. */
  export type Outbound = AttachmentResponse$Outbound;
}