/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ApplicationCommandOptionNumberChoiceResponse = {
  name: string;
  nameLocalized?: string | null | undefined;
  nameLocalizations?: { [k: string]: string } | null | undefined;
  value: number;
};

/** @internal */
export const ApplicationCommandOptionNumberChoiceResponse$inboundSchema:
  z.ZodType<
    ApplicationCommandOptionNumberChoiceResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    name: z.string(),
    name_localized: z.nullable(z.string()).optional(),
    name_localizations: z.nullable(z.record(z.string())).optional(),
    value: z.number(),
  }).transform((v) => {
    return remap$(v, {
      "name_localized": "nameLocalized",
      "name_localizations": "nameLocalizations",
    });
  });

/** @internal */
export type ApplicationCommandOptionNumberChoiceResponse$Outbound = {
  name: string;
  name_localized?: string | null | undefined;
  name_localizations?: { [k: string]: string } | null | undefined;
  value: number;
};

/** @internal */
export const ApplicationCommandOptionNumberChoiceResponse$outboundSchema:
  z.ZodType<
    ApplicationCommandOptionNumberChoiceResponse$Outbound,
    z.ZodTypeDef,
    ApplicationCommandOptionNumberChoiceResponse
  > = z.object({
    name: z.string(),
    nameLocalized: z.nullable(z.string()).optional(),
    nameLocalizations: z.nullable(z.record(z.string())).optional(),
    value: z.number(),
  }).transform((v) => {
    return remap$(v, {
      nameLocalized: "name_localized",
      nameLocalizations: "name_localizations",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationCommandOptionNumberChoiceResponse$ {
  /** @deprecated use `ApplicationCommandOptionNumberChoiceResponse$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationCommandOptionNumberChoiceResponse$inboundSchema;
  /** @deprecated use `ApplicationCommandOptionNumberChoiceResponse$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationCommandOptionNumberChoiceResponse$outboundSchema;
  /** @deprecated use `ApplicationCommandOptionNumberChoiceResponse$Outbound` instead. */
  export type Outbound = ApplicationCommandOptionNumberChoiceResponse$Outbound;
}
