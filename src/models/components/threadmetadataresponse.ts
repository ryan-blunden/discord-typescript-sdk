/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ThreadMetadataResponse = {
  archived: boolean;
  archiveTimestamp?: Date | null | undefined;
  autoArchiveDuration?: 60 | undefined;
  locked: boolean;
  createTimestamp?: Date | null | undefined;
  invitable?: boolean | null | undefined;
};

/** @internal */
export const ThreadMetadataResponse$inboundSchema: z.ZodType<
  ThreadMetadataResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  archived: z.boolean(),
  archive_timestamp: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  auto_archive_duration: z.literal(60).optional(),
  locked: z.boolean(),
  create_timestamp: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  invitable: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "archive_timestamp": "archiveTimestamp",
    "auto_archive_duration": "autoArchiveDuration",
    "create_timestamp": "createTimestamp",
  });
});

/** @internal */
export type ThreadMetadataResponse$Outbound = {
  archived: boolean;
  archive_timestamp?: string | null | undefined;
  auto_archive_duration: 60;
  locked: boolean;
  create_timestamp?: string | null | undefined;
  invitable?: boolean | null | undefined;
};

/** @internal */
export const ThreadMetadataResponse$outboundSchema: z.ZodType<
  ThreadMetadataResponse$Outbound,
  z.ZodTypeDef,
  ThreadMetadataResponse
> = z.object({
  archived: z.boolean(),
  archiveTimestamp: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  autoArchiveDuration: z.literal(60).default(60 as const),
  locked: z.boolean(),
  createTimestamp: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  invitable: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    archiveTimestamp: "archive_timestamp",
    autoArchiveDuration: "auto_archive_duration",
    createTimestamp: "create_timestamp",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ThreadMetadataResponse$ {
  /** @deprecated use `ThreadMetadataResponse$inboundSchema` instead. */
  export const inboundSchema = ThreadMetadataResponse$inboundSchema;
  /** @deprecated use `ThreadMetadataResponse$outboundSchema` instead. */
  export const outboundSchema = ThreadMetadataResponse$outboundSchema;
  /** @deprecated use `ThreadMetadataResponse$Outbound` instead. */
  export type Outbound = ThreadMetadataResponse$Outbound;
}

export function threadMetadataResponseToJSON(
  threadMetadataResponse: ThreadMetadataResponse,
): string {
  return JSON.stringify(
    ThreadMetadataResponse$outboundSchema.parse(threadMetadataResponse),
  );
}

export function threadMetadataResponseFromJSON(
  jsonString: string,
): SafeParseResult<ThreadMetadataResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ThreadMetadataResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ThreadMetadataResponse' from JSON`,
  );
}
