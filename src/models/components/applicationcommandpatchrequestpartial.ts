/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ApplicationCommandAttachmentOption,
  ApplicationCommandAttachmentOption$inboundSchema,
  ApplicationCommandAttachmentOption$Outbound,
  ApplicationCommandAttachmentOption$outboundSchema,
} from "./applicationcommandattachmentoption.js";
import {
  ApplicationCommandBooleanOption,
  ApplicationCommandBooleanOption$inboundSchema,
  ApplicationCommandBooleanOption$Outbound,
  ApplicationCommandBooleanOption$outboundSchema,
} from "./applicationcommandbooleanoption.js";
import {
  ApplicationCommandChannelOption,
  ApplicationCommandChannelOption$inboundSchema,
  ApplicationCommandChannelOption$Outbound,
  ApplicationCommandChannelOption$outboundSchema,
} from "./applicationcommandchanneloption.js";
import {
  ApplicationCommandIntegerOption,
  ApplicationCommandIntegerOption$inboundSchema,
  ApplicationCommandIntegerOption$Outbound,
  ApplicationCommandIntegerOption$outboundSchema,
} from "./applicationcommandintegeroption.js";
import {
  ApplicationCommandMentionableOption,
  ApplicationCommandMentionableOption$inboundSchema,
  ApplicationCommandMentionableOption$Outbound,
  ApplicationCommandMentionableOption$outboundSchema,
} from "./applicationcommandmentionableoption.js";
import {
  ApplicationCommandNumberOption,
  ApplicationCommandNumberOption$inboundSchema,
  ApplicationCommandNumberOption$Outbound,
  ApplicationCommandNumberOption$outboundSchema,
} from "./applicationcommandnumberoption.js";
import {
  ApplicationCommandRoleOption,
  ApplicationCommandRoleOption$inboundSchema,
  ApplicationCommandRoleOption$Outbound,
  ApplicationCommandRoleOption$outboundSchema,
} from "./applicationcommandroleoption.js";
import {
  ApplicationCommandStringOption,
  ApplicationCommandStringOption$inboundSchema,
  ApplicationCommandStringOption$Outbound,
  ApplicationCommandStringOption$outboundSchema,
} from "./applicationcommandstringoption.js";
import {
  ApplicationCommandSubcommandGroupOption,
  ApplicationCommandSubcommandGroupOption$inboundSchema,
  ApplicationCommandSubcommandGroupOption$Outbound,
  ApplicationCommandSubcommandGroupOption$outboundSchema,
} from "./applicationcommandsubcommandgroupoption.js";
import {
  ApplicationCommandSubcommandOption,
  ApplicationCommandSubcommandOption$inboundSchema,
  ApplicationCommandSubcommandOption$Outbound,
  ApplicationCommandSubcommandOption$outboundSchema,
} from "./applicationcommandsubcommandoption.js";
import {
  ApplicationCommandUserOption,
  ApplicationCommandUserOption$inboundSchema,
  ApplicationCommandUserOption$Outbound,
  ApplicationCommandUserOption$outboundSchema,
} from "./applicationcommanduseroption.js";

export type ApplicationCommandPatchRequestPartialOptions =
  | ApplicationCommandAttachmentOption
  | ApplicationCommandBooleanOption
  | ApplicationCommandMentionableOption
  | ApplicationCommandRoleOption
  | ApplicationCommandUserOption
  | ApplicationCommandChannelOption
  | ApplicationCommandSubcommandGroupOption
  | ApplicationCommandSubcommandOption
  | ApplicationCommandIntegerOption
  | ApplicationCommandNumberOption
  | ApplicationCommandStringOption;

export type ApplicationCommandPatchRequestPartial = {
  name?: string | undefined;
  nameLocalizations?: { [k: string]: string } | null | undefined;
  description?: string | null | undefined;
  descriptionLocalizations?: { [k: string]: string } | null | undefined;
  options?:
    | Array<
      | ApplicationCommandAttachmentOption
      | ApplicationCommandBooleanOption
      | ApplicationCommandMentionableOption
      | ApplicationCommandRoleOption
      | ApplicationCommandUserOption
      | ApplicationCommandChannelOption
      | ApplicationCommandSubcommandGroupOption
      | ApplicationCommandSubcommandOption
      | ApplicationCommandIntegerOption
      | ApplicationCommandNumberOption
      | ApplicationCommandStringOption
    >
    | null
    | undefined;
  defaultMemberPermissions?: number | null | undefined;
  dmPermission?: boolean | null | undefined;
  contexts?: Array<number> | null | undefined;
  integrationTypes?: Array<number> | null | undefined;
  handler?: number | null | undefined;
};

/** @internal */
export const ApplicationCommandPatchRequestPartialOptions$inboundSchema:
  z.ZodType<
    ApplicationCommandPatchRequestPartialOptions,
    z.ZodTypeDef,
    unknown
  > = z.union([
    ApplicationCommandAttachmentOption$inboundSchema,
    ApplicationCommandBooleanOption$inboundSchema,
    ApplicationCommandMentionableOption$inboundSchema,
    ApplicationCommandRoleOption$inboundSchema,
    ApplicationCommandUserOption$inboundSchema,
    ApplicationCommandChannelOption$inboundSchema,
    ApplicationCommandSubcommandGroupOption$inboundSchema,
    ApplicationCommandSubcommandOption$inboundSchema,
    ApplicationCommandIntegerOption$inboundSchema,
    ApplicationCommandNumberOption$inboundSchema,
    ApplicationCommandStringOption$inboundSchema,
  ]);

/** @internal */
export type ApplicationCommandPatchRequestPartialOptions$Outbound =
  | ApplicationCommandAttachmentOption$Outbound
  | ApplicationCommandBooleanOption$Outbound
  | ApplicationCommandMentionableOption$Outbound
  | ApplicationCommandRoleOption$Outbound
  | ApplicationCommandUserOption$Outbound
  | ApplicationCommandChannelOption$Outbound
  | ApplicationCommandSubcommandGroupOption$Outbound
  | ApplicationCommandSubcommandOption$Outbound
  | ApplicationCommandIntegerOption$Outbound
  | ApplicationCommandNumberOption$Outbound
  | ApplicationCommandStringOption$Outbound;

/** @internal */
export const ApplicationCommandPatchRequestPartialOptions$outboundSchema:
  z.ZodType<
    ApplicationCommandPatchRequestPartialOptions$Outbound,
    z.ZodTypeDef,
    ApplicationCommandPatchRequestPartialOptions
  > = z.union([
    ApplicationCommandAttachmentOption$outboundSchema,
    ApplicationCommandBooleanOption$outboundSchema,
    ApplicationCommandMentionableOption$outboundSchema,
    ApplicationCommandRoleOption$outboundSchema,
    ApplicationCommandUserOption$outboundSchema,
    ApplicationCommandChannelOption$outboundSchema,
    ApplicationCommandSubcommandGroupOption$outboundSchema,
    ApplicationCommandSubcommandOption$outboundSchema,
    ApplicationCommandIntegerOption$outboundSchema,
    ApplicationCommandNumberOption$outboundSchema,
    ApplicationCommandStringOption$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationCommandPatchRequestPartialOptions$ {
  /** @deprecated use `ApplicationCommandPatchRequestPartialOptions$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationCommandPatchRequestPartialOptions$inboundSchema;
  /** @deprecated use `ApplicationCommandPatchRequestPartialOptions$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationCommandPatchRequestPartialOptions$outboundSchema;
  /** @deprecated use `ApplicationCommandPatchRequestPartialOptions$Outbound` instead. */
  export type Outbound = ApplicationCommandPatchRequestPartialOptions$Outbound;
}

/** @internal */
export const ApplicationCommandPatchRequestPartial$inboundSchema: z.ZodType<
  ApplicationCommandPatchRequestPartial,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  name_localizations: z.nullable(z.record(z.string())).optional(),
  description: z.nullable(z.string()).optional(),
  description_localizations: z.nullable(z.record(z.string())).optional(),
  options: z.nullable(
    z.array(
      z.union([
        ApplicationCommandAttachmentOption$inboundSchema,
        ApplicationCommandBooleanOption$inboundSchema,
        ApplicationCommandMentionableOption$inboundSchema,
        ApplicationCommandRoleOption$inboundSchema,
        ApplicationCommandUserOption$inboundSchema,
        ApplicationCommandChannelOption$inboundSchema,
        ApplicationCommandSubcommandGroupOption$inboundSchema,
        ApplicationCommandSubcommandOption$inboundSchema,
        ApplicationCommandIntegerOption$inboundSchema,
        ApplicationCommandNumberOption$inboundSchema,
        ApplicationCommandStringOption$inboundSchema,
      ]),
    ),
  ).optional(),
  default_member_permissions: z.nullable(z.number().int()).optional(),
  dm_permission: z.nullable(z.boolean()).optional(),
  contexts: z.nullable(z.array(z.number().int())).optional(),
  integration_types: z.nullable(z.array(z.number().int())).optional(),
  handler: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "name_localizations": "nameLocalizations",
    "description_localizations": "descriptionLocalizations",
    "default_member_permissions": "defaultMemberPermissions",
    "dm_permission": "dmPermission",
    "integration_types": "integrationTypes",
  });
});

/** @internal */
export type ApplicationCommandPatchRequestPartial$Outbound = {
  name?: string | undefined;
  name_localizations?: { [k: string]: string } | null | undefined;
  description?: string | null | undefined;
  description_localizations?: { [k: string]: string } | null | undefined;
  options?:
    | Array<
      | ApplicationCommandAttachmentOption$Outbound
      | ApplicationCommandBooleanOption$Outbound
      | ApplicationCommandMentionableOption$Outbound
      | ApplicationCommandRoleOption$Outbound
      | ApplicationCommandUserOption$Outbound
      | ApplicationCommandChannelOption$Outbound
      | ApplicationCommandSubcommandGroupOption$Outbound
      | ApplicationCommandSubcommandOption$Outbound
      | ApplicationCommandIntegerOption$Outbound
      | ApplicationCommandNumberOption$Outbound
      | ApplicationCommandStringOption$Outbound
    >
    | null
    | undefined;
  default_member_permissions?: number | null | undefined;
  dm_permission?: boolean | null | undefined;
  contexts?: Array<number> | null | undefined;
  integration_types?: Array<number> | null | undefined;
  handler?: number | null | undefined;
};

/** @internal */
export const ApplicationCommandPatchRequestPartial$outboundSchema: z.ZodType<
  ApplicationCommandPatchRequestPartial$Outbound,
  z.ZodTypeDef,
  ApplicationCommandPatchRequestPartial
> = z.object({
  name: z.string().optional(),
  nameLocalizations: z.nullable(z.record(z.string())).optional(),
  description: z.nullable(z.string()).optional(),
  descriptionLocalizations: z.nullable(z.record(z.string())).optional(),
  options: z.nullable(
    z.array(
      z.union([
        ApplicationCommandAttachmentOption$outboundSchema,
        ApplicationCommandBooleanOption$outboundSchema,
        ApplicationCommandMentionableOption$outboundSchema,
        ApplicationCommandRoleOption$outboundSchema,
        ApplicationCommandUserOption$outboundSchema,
        ApplicationCommandChannelOption$outboundSchema,
        ApplicationCommandSubcommandGroupOption$outboundSchema,
        ApplicationCommandSubcommandOption$outboundSchema,
        ApplicationCommandIntegerOption$outboundSchema,
        ApplicationCommandNumberOption$outboundSchema,
        ApplicationCommandStringOption$outboundSchema,
      ]),
    ),
  ).optional(),
  defaultMemberPermissions: z.nullable(z.number().int()).optional(),
  dmPermission: z.nullable(z.boolean()).optional(),
  contexts: z.nullable(z.array(z.number().int())).optional(),
  integrationTypes: z.nullable(z.array(z.number().int())).optional(),
  handler: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    nameLocalizations: "name_localizations",
    descriptionLocalizations: "description_localizations",
    defaultMemberPermissions: "default_member_permissions",
    dmPermission: "dm_permission",
    integrationTypes: "integration_types",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationCommandPatchRequestPartial$ {
  /** @deprecated use `ApplicationCommandPatchRequestPartial$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationCommandPatchRequestPartial$inboundSchema;
  /** @deprecated use `ApplicationCommandPatchRequestPartial$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationCommandPatchRequestPartial$outboundSchema;
  /** @deprecated use `ApplicationCommandPatchRequestPartial$Outbound` instead. */
  export type Outbound = ApplicationCommandPatchRequestPartial$Outbound;
}