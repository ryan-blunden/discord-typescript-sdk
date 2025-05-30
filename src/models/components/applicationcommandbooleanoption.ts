/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ApplicationCommandBooleanOption = {
  type?: 1 | undefined;
  name: string;
  nameLocalizations?: { [k: string]: string } | null | undefined;
  description: string;
  descriptionLocalizations?: { [k: string]: string } | null | undefined;
  required?: boolean | null | undefined;
};

/** @internal */
export const ApplicationCommandBooleanOption$inboundSchema: z.ZodType<
  ApplicationCommandBooleanOption,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(1).optional(),
  name: z.string(),
  name_localizations: z.nullable(z.record(z.string())).optional(),
  description: z.string(),
  description_localizations: z.nullable(z.record(z.string())).optional(),
  required: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "name_localizations": "nameLocalizations",
    "description_localizations": "descriptionLocalizations",
  });
});

/** @internal */
export type ApplicationCommandBooleanOption$Outbound = {
  type: 1;
  name: string;
  name_localizations?: { [k: string]: string } | null | undefined;
  description: string;
  description_localizations?: { [k: string]: string } | null | undefined;
  required?: boolean | null | undefined;
};

/** @internal */
export const ApplicationCommandBooleanOption$outboundSchema: z.ZodType<
  ApplicationCommandBooleanOption$Outbound,
  z.ZodTypeDef,
  ApplicationCommandBooleanOption
> = z.object({
  type: z.literal(1).default(1 as const),
  name: z.string(),
  nameLocalizations: z.nullable(z.record(z.string())).optional(),
  description: z.string(),
  descriptionLocalizations: z.nullable(z.record(z.string())).optional(),
  required: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    nameLocalizations: "name_localizations",
    descriptionLocalizations: "description_localizations",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationCommandBooleanOption$ {
  /** @deprecated use `ApplicationCommandBooleanOption$inboundSchema` instead. */
  export const inboundSchema = ApplicationCommandBooleanOption$inboundSchema;
  /** @deprecated use `ApplicationCommandBooleanOption$outboundSchema` instead. */
  export const outboundSchema = ApplicationCommandBooleanOption$outboundSchema;
  /** @deprecated use `ApplicationCommandBooleanOption$Outbound` instead. */
  export type Outbound = ApplicationCommandBooleanOption$Outbound;
}

export function applicationCommandBooleanOptionToJSON(
  applicationCommandBooleanOption: ApplicationCommandBooleanOption,
): string {
  return JSON.stringify(
    ApplicationCommandBooleanOption$outboundSchema.parse(
      applicationCommandBooleanOption,
    ),
  );
}

export function applicationCommandBooleanOptionFromJSON(
  jsonString: string,
): SafeParseResult<ApplicationCommandBooleanOption, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ApplicationCommandBooleanOption$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ApplicationCommandBooleanOption' from JSON`,
  );
}
