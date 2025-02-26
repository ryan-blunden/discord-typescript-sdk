/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";

export type IntegrationApplicationResponse = {
  id: string;
  name: string;
  icon?: string | null | undefined;
  description: string;
  type?: 4 | null | undefined;
  coverImage?: string | null | undefined;
  primarySkuId?: string | null | undefined;
  bot?: UserResponse | null | undefined;
};

/** @internal */
export const IntegrationApplicationResponse$inboundSchema: z.ZodType<
  IntegrationApplicationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.nullable(z.string()).optional(),
  description: z.string(),
  type: z.nullable(z.literal(4)).optional(),
  cover_image: z.nullable(z.string()).optional(),
  primary_sku_id: z.nullable(z.string()).optional(),
  bot: z.nullable(UserResponse$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "cover_image": "coverImage",
    "primary_sku_id": "primarySkuId",
  });
});

/** @internal */
export type IntegrationApplicationResponse$Outbound = {
  id: string;
  name: string;
  icon?: string | null | undefined;
  description: string;
  type: 4 | null;
  cover_image?: string | null | undefined;
  primary_sku_id?: string | null | undefined;
  bot?: UserResponse$Outbound | null | undefined;
};

/** @internal */
export const IntegrationApplicationResponse$outboundSchema: z.ZodType<
  IntegrationApplicationResponse$Outbound,
  z.ZodTypeDef,
  IntegrationApplicationResponse
> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.nullable(z.string()).optional(),
  description: z.string(),
  type: z.nullable(z.literal(4).default(4 as const)),
  coverImage: z.nullable(z.string()).optional(),
  primarySkuId: z.nullable(z.string()).optional(),
  bot: z.nullable(UserResponse$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    coverImage: "cover_image",
    primarySkuId: "primary_sku_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntegrationApplicationResponse$ {
  /** @deprecated use `IntegrationApplicationResponse$inboundSchema` instead. */
  export const inboundSchema = IntegrationApplicationResponse$inboundSchema;
  /** @deprecated use `IntegrationApplicationResponse$outboundSchema` instead. */
  export const outboundSchema = IntegrationApplicationResponse$outboundSchema;
  /** @deprecated use `IntegrationApplicationResponse$Outbound` instead. */
  export type Outbound = IntegrationApplicationResponse$Outbound;
}

export function integrationApplicationResponseToJSON(
  integrationApplicationResponse: IntegrationApplicationResponse,
): string {
  return JSON.stringify(
    IntegrationApplicationResponse$outboundSchema.parse(
      integrationApplicationResponse,
    ),
  );
}

export function integrationApplicationResponseFromJSON(
  jsonString: string,
): SafeParseResult<IntegrationApplicationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IntegrationApplicationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IntegrationApplicationResponse' from JSON`,
  );
}
