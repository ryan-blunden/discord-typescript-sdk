/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ApplicationRoleConnectionsMetadataItemRequest = {
  type?: 1 | undefined;
  key: string;
  name: string;
  nameLocalizations?: { [k: string]: string | null } | null | undefined;
  description: string;
  descriptionLocalizations?: { [k: string]: string | null } | null | undefined;
};

/** @internal */
export const ApplicationRoleConnectionsMetadataItemRequest$inboundSchema:
  z.ZodType<
    ApplicationRoleConnectionsMetadataItemRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    type: z.literal(1).optional(),
    key: z.string(),
    name: z.string(),
    name_localizations: z.nullable(z.record(z.nullable(z.string()))).optional(),
    description: z.string(),
    description_localizations: z.nullable(z.record(z.nullable(z.string())))
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      "name_localizations": "nameLocalizations",
      "description_localizations": "descriptionLocalizations",
    });
  });

/** @internal */
export type ApplicationRoleConnectionsMetadataItemRequest$Outbound = {
  type: 1;
  key: string;
  name: string;
  name_localizations?: { [k: string]: string | null } | null | undefined;
  description: string;
  description_localizations?: { [k: string]: string | null } | null | undefined;
};

/** @internal */
export const ApplicationRoleConnectionsMetadataItemRequest$outboundSchema:
  z.ZodType<
    ApplicationRoleConnectionsMetadataItemRequest$Outbound,
    z.ZodTypeDef,
    ApplicationRoleConnectionsMetadataItemRequest
  > = z.object({
    type: z.literal(1).default(1 as const),
    key: z.string(),
    name: z.string(),
    nameLocalizations: z.nullable(z.record(z.nullable(z.string()))).optional(),
    description: z.string(),
    descriptionLocalizations: z.nullable(z.record(z.nullable(z.string())))
      .optional(),
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
export namespace ApplicationRoleConnectionsMetadataItemRequest$ {
  /** @deprecated use `ApplicationRoleConnectionsMetadataItemRequest$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationRoleConnectionsMetadataItemRequest$inboundSchema;
  /** @deprecated use `ApplicationRoleConnectionsMetadataItemRequest$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationRoleConnectionsMetadataItemRequest$outboundSchema;
  /** @deprecated use `ApplicationRoleConnectionsMetadataItemRequest$Outbound` instead. */
  export type Outbound = ApplicationRoleConnectionsMetadataItemRequest$Outbound;
}

export function applicationRoleConnectionsMetadataItemRequestToJSON(
  applicationRoleConnectionsMetadataItemRequest:
    ApplicationRoleConnectionsMetadataItemRequest,
): string {
  return JSON.stringify(
    ApplicationRoleConnectionsMetadataItemRequest$outboundSchema.parse(
      applicationRoleConnectionsMetadataItemRequest,
    ),
  );
}

export function applicationRoleConnectionsMetadataItemRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  ApplicationRoleConnectionsMetadataItemRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ApplicationRoleConnectionsMetadataItemRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ApplicationRoleConnectionsMetadataItemRequest' from JSON`,
  );
}
