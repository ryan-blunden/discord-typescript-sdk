/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteGuildRoleRequest = {
  guildId: string;
  roleId: string;
};

/** @internal */
export const DeleteGuildRoleRequest$inboundSchema: z.ZodType<
  DeleteGuildRoleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  role_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "role_id": "roleId",
  });
});

/** @internal */
export type DeleteGuildRoleRequest$Outbound = {
  guild_id: string;
  role_id: string;
};

/** @internal */
export const DeleteGuildRoleRequest$outboundSchema: z.ZodType<
  DeleteGuildRoleRequest$Outbound,
  z.ZodTypeDef,
  DeleteGuildRoleRequest
> = z.object({
  guildId: z.string(),
  roleId: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    roleId: "role_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteGuildRoleRequest$ {
  /** @deprecated use `DeleteGuildRoleRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteGuildRoleRequest$inboundSchema;
  /** @deprecated use `DeleteGuildRoleRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteGuildRoleRequest$outboundSchema;
  /** @deprecated use `DeleteGuildRoleRequest$Outbound` instead. */
  export type Outbound = DeleteGuildRoleRequest$Outbound;
}

export function deleteGuildRoleRequestToJSON(
  deleteGuildRoleRequest: DeleteGuildRoleRequest,
): string {
  return JSON.stringify(
    DeleteGuildRoleRequest$outboundSchema.parse(deleteGuildRoleRequest),
  );
}

export function deleteGuildRoleRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteGuildRoleRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteGuildRoleRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteGuildRoleRequest' from JSON`,
  );
}
