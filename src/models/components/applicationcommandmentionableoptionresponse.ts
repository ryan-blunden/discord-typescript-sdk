/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ApplicationCommandMentionableOptionResponse = {
  type?: 1 | undefined;
  name: string;
  nameLocalized?: string | null | undefined;
  nameLocalizations?: { [k: string]: string } | null | undefined;
  description: string;
  descriptionLocalized?: string | null | undefined;
  descriptionLocalizations?: { [k: string]: string } | null | undefined;
  required?: boolean | null | undefined;
};

/** @internal */
export const ApplicationCommandMentionableOptionResponse$inboundSchema:
  z.ZodType<
    ApplicationCommandMentionableOptionResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    type: z.literal(1).optional(),
    name: z.string(),
    name_localized: z.nullable(z.string()).optional(),
    name_localizations: z.nullable(z.record(z.string())).optional(),
    description: z.string(),
    description_localized: z.nullable(z.string()).optional(),
    description_localizations: z.nullable(z.record(z.string())).optional(),
    required: z.nullable(z.boolean()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "name_localized": "nameLocalized",
      "name_localizations": "nameLocalizations",
      "description_localized": "descriptionLocalized",
      "description_localizations": "descriptionLocalizations",
    });
  });

/** @internal */
export type ApplicationCommandMentionableOptionResponse$Outbound = {
  type: 1;
  name: string;
  name_localized?: string | null | undefined;
  name_localizations?: { [k: string]: string } | null | undefined;
  description: string;
  description_localized?: string | null | undefined;
  description_localizations?: { [k: string]: string } | null | undefined;
  required?: boolean | null | undefined;
};

/** @internal */
export const ApplicationCommandMentionableOptionResponse$outboundSchema:
  z.ZodType<
    ApplicationCommandMentionableOptionResponse$Outbound,
    z.ZodTypeDef,
    ApplicationCommandMentionableOptionResponse
  > = z.object({
    type: z.literal(1).default(1 as const),
    name: z.string(),
    nameLocalized: z.nullable(z.string()).optional(),
    nameLocalizations: z.nullable(z.record(z.string())).optional(),
    description: z.string(),
    descriptionLocalized: z.nullable(z.string()).optional(),
    descriptionLocalizations: z.nullable(z.record(z.string())).optional(),
    required: z.nullable(z.boolean()).optional(),
  }).transform((v) => {
    return remap$(v, {
      nameLocalized: "name_localized",
      nameLocalizations: "name_localizations",
      descriptionLocalized: "description_localized",
      descriptionLocalizations: "description_localizations",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationCommandMentionableOptionResponse$ {
  /** @deprecated use `ApplicationCommandMentionableOptionResponse$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationCommandMentionableOptionResponse$inboundSchema;
  /** @deprecated use `ApplicationCommandMentionableOptionResponse$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationCommandMentionableOptionResponse$outboundSchema;
  /** @deprecated use `ApplicationCommandMentionableOptionResponse$Outbound` instead. */
  export type Outbound = ApplicationCommandMentionableOptionResponse$Outbound;
}