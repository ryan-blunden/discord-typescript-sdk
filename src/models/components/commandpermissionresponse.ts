/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CommandPermissionResponse = {
  id: string;
  type?: 1 | undefined;
  permission: boolean;
};

/** @internal */
export const CommandPermissionResponse$inboundSchema: z.ZodType<
  CommandPermissionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: z.literal(1).optional(),
  permission: z.boolean(),
});

/** @internal */
export type CommandPermissionResponse$Outbound = {
  id: string;
  type: 1;
  permission: boolean;
};

/** @internal */
export const CommandPermissionResponse$outboundSchema: z.ZodType<
  CommandPermissionResponse$Outbound,
  z.ZodTypeDef,
  CommandPermissionResponse
> = z.object({
  id: z.string(),
  type: z.literal(1).default(1 as const),
  permission: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommandPermissionResponse$ {
  /** @deprecated use `CommandPermissionResponse$inboundSchema` instead. */
  export const inboundSchema = CommandPermissionResponse$inboundSchema;
  /** @deprecated use `CommandPermissionResponse$outboundSchema` instead. */
  export const outboundSchema = CommandPermissionResponse$outboundSchema;
  /** @deprecated use `CommandPermissionResponse$Outbound` instead. */
  export type Outbound = CommandPermissionResponse$Outbound;
}

export function commandPermissionResponseToJSON(
  commandPermissionResponse: CommandPermissionResponse,
): string {
  return JSON.stringify(
    CommandPermissionResponse$outboundSchema.parse(commandPermissionResponse),
  );
}

export function commandPermissionResponseFromJSON(
  jsonString: string,
): SafeParseResult<CommandPermissionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommandPermissionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommandPermissionResponse' from JSON`,
  );
}
