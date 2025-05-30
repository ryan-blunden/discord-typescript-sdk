/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetGuildApplicationCommandPermissionsSecurity = {
  botToken?: string | undefined;
};

export type GetGuildApplicationCommandPermissionsRequest = {
  applicationId: string;
  guildId: string;
  commandId: string;
};

/** @internal */
export const GetGuildApplicationCommandPermissionsSecurity$inboundSchema:
  z.ZodType<
    GetGuildApplicationCommandPermissionsSecurity,
    z.ZodTypeDef,
    unknown
  > = z.object({
    BotToken: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "BotToken": "botToken",
    });
  });

/** @internal */
export type GetGuildApplicationCommandPermissionsSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const GetGuildApplicationCommandPermissionsSecurity$outboundSchema:
  z.ZodType<
    GetGuildApplicationCommandPermissionsSecurity$Outbound,
    z.ZodTypeDef,
    GetGuildApplicationCommandPermissionsSecurity
  > = z.object({
    botToken: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      botToken: "BotToken",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGuildApplicationCommandPermissionsSecurity$ {
  /** @deprecated use `GetGuildApplicationCommandPermissionsSecurity$inboundSchema` instead. */
  export const inboundSchema =
    GetGuildApplicationCommandPermissionsSecurity$inboundSchema;
  /** @deprecated use `GetGuildApplicationCommandPermissionsSecurity$outboundSchema` instead. */
  export const outboundSchema =
    GetGuildApplicationCommandPermissionsSecurity$outboundSchema;
  /** @deprecated use `GetGuildApplicationCommandPermissionsSecurity$Outbound` instead. */
  export type Outbound = GetGuildApplicationCommandPermissionsSecurity$Outbound;
}

export function getGuildApplicationCommandPermissionsSecurityToJSON(
  getGuildApplicationCommandPermissionsSecurity:
    GetGuildApplicationCommandPermissionsSecurity,
): string {
  return JSON.stringify(
    GetGuildApplicationCommandPermissionsSecurity$outboundSchema.parse(
      getGuildApplicationCommandPermissionsSecurity,
    ),
  );
}

export function getGuildApplicationCommandPermissionsSecurityFromJSON(
  jsonString: string,
): SafeParseResult<
  GetGuildApplicationCommandPermissionsSecurity,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetGuildApplicationCommandPermissionsSecurity$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetGuildApplicationCommandPermissionsSecurity' from JSON`,
  );
}

/** @internal */
export const GetGuildApplicationCommandPermissionsRequest$inboundSchema:
  z.ZodType<
    GetGuildApplicationCommandPermissionsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    application_id: z.string(),
    guild_id: z.string(),
    command_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "application_id": "applicationId",
      "guild_id": "guildId",
      "command_id": "commandId",
    });
  });

/** @internal */
export type GetGuildApplicationCommandPermissionsRequest$Outbound = {
  application_id: string;
  guild_id: string;
  command_id: string;
};

/** @internal */
export const GetGuildApplicationCommandPermissionsRequest$outboundSchema:
  z.ZodType<
    GetGuildApplicationCommandPermissionsRequest$Outbound,
    z.ZodTypeDef,
    GetGuildApplicationCommandPermissionsRequest
  > = z.object({
    applicationId: z.string(),
    guildId: z.string(),
    commandId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      applicationId: "application_id",
      guildId: "guild_id",
      commandId: "command_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGuildApplicationCommandPermissionsRequest$ {
  /** @deprecated use `GetGuildApplicationCommandPermissionsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetGuildApplicationCommandPermissionsRequest$inboundSchema;
  /** @deprecated use `GetGuildApplicationCommandPermissionsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetGuildApplicationCommandPermissionsRequest$outboundSchema;
  /** @deprecated use `GetGuildApplicationCommandPermissionsRequest$Outbound` instead. */
  export type Outbound = GetGuildApplicationCommandPermissionsRequest$Outbound;
}

export function getGuildApplicationCommandPermissionsRequestToJSON(
  getGuildApplicationCommandPermissionsRequest:
    GetGuildApplicationCommandPermissionsRequest,
): string {
  return JSON.stringify(
    GetGuildApplicationCommandPermissionsRequest$outboundSchema.parse(
      getGuildApplicationCommandPermissionsRequest,
    ),
  );
}

export function getGuildApplicationCommandPermissionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetGuildApplicationCommandPermissionsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetGuildApplicationCommandPermissionsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetGuildApplicationCommandPermissionsRequest' from JSON`,
  );
}
