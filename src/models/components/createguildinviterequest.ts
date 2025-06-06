/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateGuildInviteRequest = {
  maxAge?: number | null | undefined;
  temporary?: boolean | null | undefined;
  maxUses?: number | null | undefined;
  unique?: boolean | null | undefined;
  targetUserId?: string | null | undefined;
  targetApplicationId?: string | null | undefined;
  targetType?: 1 | undefined;
};

/** @internal */
export const CreateGuildInviteRequest$inboundSchema: z.ZodType<
  CreateGuildInviteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  max_age: z.nullable(z.number().int()).optional(),
  temporary: z.nullable(z.boolean()).optional(),
  max_uses: z.nullable(z.number().int()).optional(),
  unique: z.nullable(z.boolean()).optional(),
  target_user_id: z.nullable(z.string()).optional(),
  target_application_id: z.nullable(z.string()).optional(),
  target_type: z.literal(1).optional(),
}).transform((v) => {
  return remap$(v, {
    "max_age": "maxAge",
    "max_uses": "maxUses",
    "target_user_id": "targetUserId",
    "target_application_id": "targetApplicationId",
    "target_type": "targetType",
  });
});

/** @internal */
export type CreateGuildInviteRequest$Outbound = {
  max_age?: number | null | undefined;
  temporary?: boolean | null | undefined;
  max_uses?: number | null | undefined;
  unique?: boolean | null | undefined;
  target_user_id?: string | null | undefined;
  target_application_id?: string | null | undefined;
  target_type: 1;
};

/** @internal */
export const CreateGuildInviteRequest$outboundSchema: z.ZodType<
  CreateGuildInviteRequest$Outbound,
  z.ZodTypeDef,
  CreateGuildInviteRequest
> = z.object({
  maxAge: z.nullable(z.number().int()).optional(),
  temporary: z.nullable(z.boolean()).optional(),
  maxUses: z.nullable(z.number().int()).optional(),
  unique: z.nullable(z.boolean()).optional(),
  targetUserId: z.nullable(z.string()).optional(),
  targetApplicationId: z.nullable(z.string()).optional(),
  targetType: z.literal(1).default(1 as const),
}).transform((v) => {
  return remap$(v, {
    maxAge: "max_age",
    maxUses: "max_uses",
    targetUserId: "target_user_id",
    targetApplicationId: "target_application_id",
    targetType: "target_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateGuildInviteRequest$ {
  /** @deprecated use `CreateGuildInviteRequest$inboundSchema` instead. */
  export const inboundSchema = CreateGuildInviteRequest$inboundSchema;
  /** @deprecated use `CreateGuildInviteRequest$outboundSchema` instead. */
  export const outboundSchema = CreateGuildInviteRequest$outboundSchema;
  /** @deprecated use `CreateGuildInviteRequest$Outbound` instead. */
  export type Outbound = CreateGuildInviteRequest$Outbound;
}

export function createGuildInviteRequestToJSON(
  createGuildInviteRequest: CreateGuildInviteRequest,
): string {
  return JSON.stringify(
    CreateGuildInviteRequest$outboundSchema.parse(createGuildInviteRequest),
  );
}

export function createGuildInviteRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateGuildInviteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateGuildInviteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateGuildInviteRequest' from JSON`,
  );
}
