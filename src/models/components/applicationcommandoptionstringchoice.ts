/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ApplicationCommandOptionStringChoice = {
  name: string;
  nameLocalizations?: { [k: string]: string } | null | undefined;
  value: string;
};

/** @internal */
export const ApplicationCommandOptionStringChoice$inboundSchema: z.ZodType<
  ApplicationCommandOptionStringChoice,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  name_localizations: z.nullable(z.record(z.string())).optional(),
  value: z.string(),
}).transform((v) => {
  return remap$(v, {
    "name_localizations": "nameLocalizations",
  });
});

/** @internal */
export type ApplicationCommandOptionStringChoice$Outbound = {
  name: string;
  name_localizations?: { [k: string]: string } | null | undefined;
  value: string;
};

/** @internal */
export const ApplicationCommandOptionStringChoice$outboundSchema: z.ZodType<
  ApplicationCommandOptionStringChoice$Outbound,
  z.ZodTypeDef,
  ApplicationCommandOptionStringChoice
> = z.object({
  name: z.string(),
  nameLocalizations: z.nullable(z.record(z.string())).optional(),
  value: z.string(),
}).transform((v) => {
  return remap$(v, {
    nameLocalizations: "name_localizations",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationCommandOptionStringChoice$ {
  /** @deprecated use `ApplicationCommandOptionStringChoice$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationCommandOptionStringChoice$inboundSchema;
  /** @deprecated use `ApplicationCommandOptionStringChoice$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationCommandOptionStringChoice$outboundSchema;
  /** @deprecated use `ApplicationCommandOptionStringChoice$Outbound` instead. */
  export type Outbound = ApplicationCommandOptionStringChoice$Outbound;
}