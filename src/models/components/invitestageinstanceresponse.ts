/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  GuildMemberResponse,
  GuildMemberResponse$inboundSchema,
  GuildMemberResponse$Outbound,
  GuildMemberResponse$outboundSchema,
} from "./guildmemberresponse.js";

export type InviteStageInstanceResponse = {
  topic: string;
  participantCount?: number | null | undefined;
  speakerCount?: number | null | undefined;
  members?: Array<GuildMemberResponse> | null | undefined;
};

/** @internal */
export const InviteStageInstanceResponse$inboundSchema: z.ZodType<
  InviteStageInstanceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  topic: z.string(),
  participant_count: z.nullable(z.number().int()).optional(),
  speaker_count: z.nullable(z.number().int()).optional(),
  members: z.nullable(z.array(GuildMemberResponse$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "participant_count": "participantCount",
    "speaker_count": "speakerCount",
  });
});

/** @internal */
export type InviteStageInstanceResponse$Outbound = {
  topic: string;
  participant_count?: number | null | undefined;
  speaker_count?: number | null | undefined;
  members?: Array<GuildMemberResponse$Outbound> | null | undefined;
};

/** @internal */
export const InviteStageInstanceResponse$outboundSchema: z.ZodType<
  InviteStageInstanceResponse$Outbound,
  z.ZodTypeDef,
  InviteStageInstanceResponse
> = z.object({
  topic: z.string(),
  participantCount: z.nullable(z.number().int()).optional(),
  speakerCount: z.nullable(z.number().int()).optional(),
  members: z.nullable(z.array(GuildMemberResponse$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    participantCount: "participant_count",
    speakerCount: "speaker_count",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteStageInstanceResponse$ {
  /** @deprecated use `InviteStageInstanceResponse$inboundSchema` instead. */
  export const inboundSchema = InviteStageInstanceResponse$inboundSchema;
  /** @deprecated use `InviteStageInstanceResponse$outboundSchema` instead. */
  export const outboundSchema = InviteStageInstanceResponse$outboundSchema;
  /** @deprecated use `InviteStageInstanceResponse$Outbound` instead. */
  export type Outbound = InviteStageInstanceResponse$Outbound;
}

export function inviteStageInstanceResponseToJSON(
  inviteStageInstanceResponse: InviteStageInstanceResponse,
): string {
  return JSON.stringify(
    InviteStageInstanceResponse$outboundSchema.parse(
      inviteStageInstanceResponse,
    ),
  );
}

export function inviteStageInstanceResponseFromJSON(
  jsonString: string,
): SafeParseResult<InviteStageInstanceResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InviteStageInstanceResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InviteStageInstanceResponse' from JSON`,
  );
}
