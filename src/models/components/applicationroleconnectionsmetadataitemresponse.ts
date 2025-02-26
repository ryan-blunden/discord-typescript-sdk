/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ApplicationRoleConnectionsMetadataItemResponse = {
  type?: 1 | undefined;
  key: string;
  name: string;
  nameLocalizations?: { [k: string]: string } | null | undefined;
  description: string;
  descriptionLocalizations?: { [k: string]: string } | null | undefined;
};

/** @internal */
export const ApplicationRoleConnectionsMetadataItemResponse$inboundSchema:
  z.ZodType<
    ApplicationRoleConnectionsMetadataItemResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    type: z.literal(1).optional(),
    key: z.string(),
    name: z.string(),
    name_localizations: z.nullable(z.record(z.string())).optional(),
    description: z.string(),
    description_localizations: z.nullable(z.record(z.string())).optional(),
  }).transform((v) => {
    return remap$(v, {
      "name_localizations": "nameLocalizations",
      "description_localizations": "descriptionLocalizations",
    });
  });

/** @internal */
export type ApplicationRoleConnectionsMetadataItemResponse$Outbound = {
  type: 1;
  key: string;
  name: string;
  name_localizations?: { [k: string]: string } | null | undefined;
  description: string;
  description_localizations?: { [k: string]: string } | null | undefined;
};

/** @internal */
export const ApplicationRoleConnectionsMetadataItemResponse$outboundSchema:
  z.ZodType<
    ApplicationRoleConnectionsMetadataItemResponse$Outbound,
    z.ZodTypeDef,
    ApplicationRoleConnectionsMetadataItemResponse
  > = z.object({
    type: z.literal(1).default(1 as const),
    key: z.string(),
    name: z.string(),
    nameLocalizations: z.nullable(z.record(z.string())).optional(),
    description: z.string(),
    descriptionLocalizations: z.nullable(z.record(z.string())).optional(),
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
export namespace ApplicationRoleConnectionsMetadataItemResponse$ {
  /** @deprecated use `ApplicationRoleConnectionsMetadataItemResponse$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationRoleConnectionsMetadataItemResponse$inboundSchema;
  /** @deprecated use `ApplicationRoleConnectionsMetadataItemResponse$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationRoleConnectionsMetadataItemResponse$outboundSchema;
  /** @deprecated use `ApplicationRoleConnectionsMetadataItemResponse$Outbound` instead. */
  export type Outbound =
    ApplicationRoleConnectionsMetadataItemResponse$Outbound;
}

export function applicationRoleConnectionsMetadataItemResponseToJSON(
  applicationRoleConnectionsMetadataItemResponse:
    ApplicationRoleConnectionsMetadataItemResponse,
): string {
  return JSON.stringify(
    ApplicationRoleConnectionsMetadataItemResponse$outboundSchema.parse(
      applicationRoleConnectionsMetadataItemResponse,
    ),
  );
}

export function applicationRoleConnectionsMetadataItemResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  ApplicationRoleConnectionsMetadataItemResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ApplicationRoleConnectionsMetadataItemResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ApplicationRoleConnectionsMetadataItemResponse' from JSON`,
  );
}
