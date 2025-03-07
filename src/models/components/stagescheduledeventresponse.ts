/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EntityMetadataStageInstanceResponse,
  EntityMetadataStageInstanceResponse$inboundSchema,
  EntityMetadataStageInstanceResponse$Outbound,
  EntityMetadataStageInstanceResponse$outboundSchema,
} from "./entitymetadatastageinstanceresponse.js";
import {
  ScheduledEventUserResponse,
  ScheduledEventUserResponse$inboundSchema,
  ScheduledEventUserResponse$Outbound,
  ScheduledEventUserResponse$outboundSchema,
} from "./scheduledeventuserresponse.js";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";

export type StageScheduledEventResponse = {
  id: string;
  guildId: string;
  name: string;
  description?: string | null | undefined;
  channelId?: string | null | undefined;
  creatorId?: string | null | undefined;
  creator?: UserResponse | null | undefined;
  image?: string | null | undefined;
  scheduledStartTime: Date;
  scheduledEndTime?: Date | null | undefined;
  status?: 1 | undefined;
  entityType?: 0 | undefined;
  entityId?: string | null | undefined;
  userCount?: number | null | undefined;
  privacyLevel?: 2 | undefined;
  userRsvp?: ScheduledEventUserResponse | null | undefined;
  entityMetadata?: EntityMetadataStageInstanceResponse | null | undefined;
};

/** @internal */
export const StageScheduledEventResponse$inboundSchema: z.ZodType<
  StageScheduledEventResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  guild_id: z.string(),
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  channel_id: z.nullable(z.string()).optional(),
  creator_id: z.nullable(z.string()).optional(),
  creator: z.nullable(UserResponse$inboundSchema).optional(),
  image: z.nullable(z.string()).optional(),
  scheduled_start_time: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  scheduled_end_time: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  status: z.literal(1).optional(),
  entity_type: z.literal(0).optional(),
  entity_id: z.nullable(z.string()).optional(),
  user_count: z.nullable(z.number().int()).optional(),
  privacy_level: z.literal(2).optional(),
  user_rsvp: z.nullable(ScheduledEventUserResponse$inboundSchema).optional(),
  entity_metadata: z.nullable(EntityMetadataStageInstanceResponse$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "channel_id": "channelId",
    "creator_id": "creatorId",
    "scheduled_start_time": "scheduledStartTime",
    "scheduled_end_time": "scheduledEndTime",
    "entity_type": "entityType",
    "entity_id": "entityId",
    "user_count": "userCount",
    "privacy_level": "privacyLevel",
    "user_rsvp": "userRsvp",
    "entity_metadata": "entityMetadata",
  });
});

/** @internal */
export type StageScheduledEventResponse$Outbound = {
  id: string;
  guild_id: string;
  name: string;
  description?: string | null | undefined;
  channel_id?: string | null | undefined;
  creator_id?: string | null | undefined;
  creator?: UserResponse$Outbound | null | undefined;
  image?: string | null | undefined;
  scheduled_start_time: string;
  scheduled_end_time?: string | null | undefined;
  status: 1;
  entity_type: 0;
  entity_id?: string | null | undefined;
  user_count?: number | null | undefined;
  privacy_level: 2;
  user_rsvp?: ScheduledEventUserResponse$Outbound | null | undefined;
  entity_metadata?:
    | EntityMetadataStageInstanceResponse$Outbound
    | null
    | undefined;
};

/** @internal */
export const StageScheduledEventResponse$outboundSchema: z.ZodType<
  StageScheduledEventResponse$Outbound,
  z.ZodTypeDef,
  StageScheduledEventResponse
> = z.object({
  id: z.string(),
  guildId: z.string(),
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  channelId: z.nullable(z.string()).optional(),
  creatorId: z.nullable(z.string()).optional(),
  creator: z.nullable(UserResponse$outboundSchema).optional(),
  image: z.nullable(z.string()).optional(),
  scheduledStartTime: z.date().transform(v => v.toISOString()),
  scheduledEndTime: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  status: z.literal(1).default(1 as const),
  entityType: z.literal(0).default(0 as const),
  entityId: z.nullable(z.string()).optional(),
  userCount: z.nullable(z.number().int()).optional(),
  privacyLevel: z.literal(2).default(2 as const),
  userRsvp: z.nullable(ScheduledEventUserResponse$outboundSchema).optional(),
  entityMetadata: z.nullable(EntityMetadataStageInstanceResponse$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    channelId: "channel_id",
    creatorId: "creator_id",
    scheduledStartTime: "scheduled_start_time",
    scheduledEndTime: "scheduled_end_time",
    entityType: "entity_type",
    entityId: "entity_id",
    userCount: "user_count",
    privacyLevel: "privacy_level",
    userRsvp: "user_rsvp",
    entityMetadata: "entity_metadata",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StageScheduledEventResponse$ {
  /** @deprecated use `StageScheduledEventResponse$inboundSchema` instead. */
  export const inboundSchema = StageScheduledEventResponse$inboundSchema;
  /** @deprecated use `StageScheduledEventResponse$outboundSchema` instead. */
  export const outboundSchema = StageScheduledEventResponse$outboundSchema;
  /** @deprecated use `StageScheduledEventResponse$Outbound` instead. */
  export type Outbound = StageScheduledEventResponse$Outbound;
}

export function stageScheduledEventResponseToJSON(
  stageScheduledEventResponse: StageScheduledEventResponse,
): string {
  return JSON.stringify(
    StageScheduledEventResponse$outboundSchema.parse(
      stageScheduledEventResponse,
    ),
  );
}

export function stageScheduledEventResponseFromJSON(
  jsonString: string,
): SafeParseResult<StageScheduledEventResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StageScheduledEventResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StageScheduledEventResponse' from JSON`,
  );
}
