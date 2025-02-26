/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateApplicationRoleConnectionsMetadataRequest = {
  applicationId: string;
  requestBody:
    | Array<components.ApplicationRoleConnectionsMetadataItemRequest>
    | null;
};

/** @internal */
export const UpdateApplicationRoleConnectionsMetadataRequest$inboundSchema:
  z.ZodType<
    UpdateApplicationRoleConnectionsMetadataRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    application_id: z.string(),
    RequestBody: z.nullable(
      z.array(
        components.ApplicationRoleConnectionsMetadataItemRequest$inboundSchema,
      ),
    ),
  }).transform((v) => {
    return remap$(v, {
      "application_id": "applicationId",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type UpdateApplicationRoleConnectionsMetadataRequest$Outbound = {
  application_id: string;
  RequestBody:
    | Array<components.ApplicationRoleConnectionsMetadataItemRequest$Outbound>
    | null;
};

/** @internal */
export const UpdateApplicationRoleConnectionsMetadataRequest$outboundSchema:
  z.ZodType<
    UpdateApplicationRoleConnectionsMetadataRequest$Outbound,
    z.ZodTypeDef,
    UpdateApplicationRoleConnectionsMetadataRequest
  > = z.object({
    applicationId: z.string(),
    requestBody: z.nullable(
      z.array(
        components.ApplicationRoleConnectionsMetadataItemRequest$outboundSchema,
      ),
    ),
  }).transform((v) => {
    return remap$(v, {
      applicationId: "application_id",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateApplicationRoleConnectionsMetadataRequest$ {
  /** @deprecated use `UpdateApplicationRoleConnectionsMetadataRequest$inboundSchema` instead. */
  export const inboundSchema =
    UpdateApplicationRoleConnectionsMetadataRequest$inboundSchema;
  /** @deprecated use `UpdateApplicationRoleConnectionsMetadataRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateApplicationRoleConnectionsMetadataRequest$outboundSchema;
  /** @deprecated use `UpdateApplicationRoleConnectionsMetadataRequest$Outbound` instead. */
  export type Outbound =
    UpdateApplicationRoleConnectionsMetadataRequest$Outbound;
}

export function updateApplicationRoleConnectionsMetadataRequestToJSON(
  updateApplicationRoleConnectionsMetadataRequest:
    UpdateApplicationRoleConnectionsMetadataRequest,
): string {
  return JSON.stringify(
    UpdateApplicationRoleConnectionsMetadataRequest$outboundSchema.parse(
      updateApplicationRoleConnectionsMetadataRequest,
    ),
  );
}

export function updateApplicationRoleConnectionsMetadataRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  UpdateApplicationRoleConnectionsMetadataRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateApplicationRoleConnectionsMetadataRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UpdateApplicationRoleConnectionsMetadataRequest' from JSON`,
  );
}
