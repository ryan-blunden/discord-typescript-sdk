/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EntityMetadataExternal,
  EntityMetadataExternal$inboundSchema,
  EntityMetadataExternal$Outbound,
  EntityMetadataExternal$outboundSchema,
} from "./entitymetadataexternal.js";

export type ExternalScheduledEventPatchRequestPartial = {
  status?: 1 | null | undefined;
  name?: string | undefined;
  description?: string | null | undefined;
  image?: string | null | undefined;
  scheduledStartTime?: Date | undefined;
  scheduledEndTime?: Date | null | undefined;
  entityType?: 0 | undefined;
  privacyLevel?: 2 | undefined;
  channelId?: string | null | undefined;
  entityMetadata?: EntityMetadataExternal | undefined;
};

/** @internal */
export const ExternalScheduledEventPatchRequestPartial$inboundSchema: z.ZodType<
  ExternalScheduledEventPatchRequestPartial,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.nullable(z.literal(1)).optional(),
  name: z.string().optional(),
  description: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  scheduled_start_time: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  scheduled_end_time: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  entity_type: z.literal(0).optional(),
  privacy_level: z.literal(2).optional(),
  channel_id: z.nullable(z.string()).optional(),
  entity_metadata: EntityMetadataExternal$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "scheduled_start_time": "scheduledStartTime",
    "scheduled_end_time": "scheduledEndTime",
    "entity_type": "entityType",
    "privacy_level": "privacyLevel",
    "channel_id": "channelId",
    "entity_metadata": "entityMetadata",
  });
});

/** @internal */
export type ExternalScheduledEventPatchRequestPartial$Outbound = {
  status: 1 | null;
  name?: string | undefined;
  description?: string | null | undefined;
  image?: string | null | undefined;
  scheduled_start_time?: string | undefined;
  scheduled_end_time?: string | null | undefined;
  entity_type: 0;
  privacy_level: 2;
  channel_id?: string | null | undefined;
  entity_metadata?: EntityMetadataExternal$Outbound | undefined;
};

/** @internal */
export const ExternalScheduledEventPatchRequestPartial$outboundSchema:
  z.ZodType<
    ExternalScheduledEventPatchRequestPartial$Outbound,
    z.ZodTypeDef,
    ExternalScheduledEventPatchRequestPartial
  > = z.object({
    status: z.nullable(z.literal(1).default(1 as const)),
    name: z.string().optional(),
    description: z.nullable(z.string()).optional(),
    image: z.nullable(z.string()).optional(),
    scheduledStartTime: z.date().transform(v => v.toISOString()).optional(),
    scheduledEndTime: z.nullable(z.date().transform(v => v.toISOString()))
      .optional(),
    entityType: z.literal(0).default(0 as const),
    privacyLevel: z.literal(2).default(2 as const),
    channelId: z.nullable(z.string()).optional(),
    entityMetadata: EntityMetadataExternal$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      scheduledStartTime: "scheduled_start_time",
      scheduledEndTime: "scheduled_end_time",
      entityType: "entity_type",
      privacyLevel: "privacy_level",
      channelId: "channel_id",
      entityMetadata: "entity_metadata",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExternalScheduledEventPatchRequestPartial$ {
  /** @deprecated use `ExternalScheduledEventPatchRequestPartial$inboundSchema` instead. */
  export const inboundSchema =
    ExternalScheduledEventPatchRequestPartial$inboundSchema;
  /** @deprecated use `ExternalScheduledEventPatchRequestPartial$outboundSchema` instead. */
  export const outboundSchema =
    ExternalScheduledEventPatchRequestPartial$outboundSchema;
  /** @deprecated use `ExternalScheduledEventPatchRequestPartial$Outbound` instead. */
  export type Outbound = ExternalScheduledEventPatchRequestPartial$Outbound;
}

export function externalScheduledEventPatchRequestPartialToJSON(
  externalScheduledEventPatchRequestPartial:
    ExternalScheduledEventPatchRequestPartial,
): string {
  return JSON.stringify(
    ExternalScheduledEventPatchRequestPartial$outboundSchema.parse(
      externalScheduledEventPatchRequestPartial,
    ),
  );
}

export function externalScheduledEventPatchRequestPartialFromJSON(
  jsonString: string,
): SafeParseResult<
  ExternalScheduledEventPatchRequestPartial,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ExternalScheduledEventPatchRequestPartial$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ExternalScheduledEventPatchRequestPartial' from JSON`,
  );
}
