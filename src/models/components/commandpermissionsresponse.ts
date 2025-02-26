/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CommandPermissionResponse,
  CommandPermissionResponse$inboundSchema,
  CommandPermissionResponse$Outbound,
  CommandPermissionResponse$outboundSchema,
} from "./commandpermissionresponse.js";

export type CommandPermissionsResponse = {
  id: string;
  applicationId: string;
  guildId: string;
  permissions: Array<CommandPermissionResponse>;
};

/** @internal */
export const CommandPermissionsResponse$inboundSchema: z.ZodType<
  CommandPermissionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  application_id: z.string(),
  guild_id: z.string(),
  permissions: z.array(CommandPermissionResponse$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "guild_id": "guildId",
  });
});

/** @internal */
export type CommandPermissionsResponse$Outbound = {
  id: string;
  application_id: string;
  guild_id: string;
  permissions: Array<CommandPermissionResponse$Outbound>;
};

/** @internal */
export const CommandPermissionsResponse$outboundSchema: z.ZodType<
  CommandPermissionsResponse$Outbound,
  z.ZodTypeDef,
  CommandPermissionsResponse
> = z.object({
  id: z.string(),
  applicationId: z.string(),
  guildId: z.string(),
  permissions: z.array(CommandPermissionResponse$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    guildId: "guild_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommandPermissionsResponse$ {
  /** @deprecated use `CommandPermissionsResponse$inboundSchema` instead. */
  export const inboundSchema = CommandPermissionsResponse$inboundSchema;
  /** @deprecated use `CommandPermissionsResponse$outboundSchema` instead. */
  export const outboundSchema = CommandPermissionsResponse$outboundSchema;
  /** @deprecated use `CommandPermissionsResponse$Outbound` instead. */
  export type Outbound = CommandPermissionsResponse$Outbound;
}

export function commandPermissionsResponseToJSON(
  commandPermissionsResponse: CommandPermissionsResponse,
): string {
  return JSON.stringify(
    CommandPermissionsResponse$outboundSchema.parse(commandPermissionsResponse),
  );
}

export function commandPermissionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<CommandPermissionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommandPermissionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommandPermissionsResponse' from JSON`,
  );
}
