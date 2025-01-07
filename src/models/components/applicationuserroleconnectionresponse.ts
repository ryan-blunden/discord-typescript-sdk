/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ApplicationUserRoleConnectionResponse = {
  platformName?: string | null | undefined;
  platformUsername?: string | null | undefined;
  metadata?: { [k: string]: string } | null | undefined;
};

/** @internal */
export const ApplicationUserRoleConnectionResponse$inboundSchema: z.ZodType<
  ApplicationUserRoleConnectionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  platform_name: z.nullable(z.string()).optional(),
  platform_username: z.nullable(z.string()).optional(),
  metadata: z.nullable(z.record(z.string())).optional(),
}).transform((v) => {
  return remap$(v, {
    "platform_name": "platformName",
    "platform_username": "platformUsername",
  });
});

/** @internal */
export type ApplicationUserRoleConnectionResponse$Outbound = {
  platform_name?: string | null | undefined;
  platform_username?: string | null | undefined;
  metadata?: { [k: string]: string } | null | undefined;
};

/** @internal */
export const ApplicationUserRoleConnectionResponse$outboundSchema: z.ZodType<
  ApplicationUserRoleConnectionResponse$Outbound,
  z.ZodTypeDef,
  ApplicationUserRoleConnectionResponse
> = z.object({
  platformName: z.nullable(z.string()).optional(),
  platformUsername: z.nullable(z.string()).optional(),
  metadata: z.nullable(z.record(z.string())).optional(),
}).transform((v) => {
  return remap$(v, {
    platformName: "platform_name",
    platformUsername: "platform_username",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationUserRoleConnectionResponse$ {
  /** @deprecated use `ApplicationUserRoleConnectionResponse$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationUserRoleConnectionResponse$inboundSchema;
  /** @deprecated use `ApplicationUserRoleConnectionResponse$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationUserRoleConnectionResponse$outboundSchema;
  /** @deprecated use `ApplicationUserRoleConnectionResponse$Outbound` instead. */
  export type Outbound = ApplicationUserRoleConnectionResponse$Outbound;
}

export function applicationUserRoleConnectionResponseToJSON(
  applicationUserRoleConnectionResponse: ApplicationUserRoleConnectionResponse,
): string {
  return JSON.stringify(
    ApplicationUserRoleConnectionResponse$outboundSchema.parse(
      applicationUserRoleConnectionResponse,
    ),
  );
}

export function applicationUserRoleConnectionResponseFromJSON(
  jsonString: string,
): SafeParseResult<ApplicationUserRoleConnectionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ApplicationUserRoleConnectionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ApplicationUserRoleConnectionResponse' from JSON`,
  );
}
