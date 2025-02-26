/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateGuildFromTemplateRequestBody = {
  name: string;
  icon?: string | null | undefined;
};

export type CreateGuildFromTemplateRequest = {
  code: string;
  requestBody: CreateGuildFromTemplateRequestBody;
};

/** @internal */
export const CreateGuildFromTemplateRequestBody$inboundSchema: z.ZodType<
  CreateGuildFromTemplateRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  icon: z.nullable(z.string()).optional(),
});

/** @internal */
export type CreateGuildFromTemplateRequestBody$Outbound = {
  name: string;
  icon?: string | null | undefined;
};

/** @internal */
export const CreateGuildFromTemplateRequestBody$outboundSchema: z.ZodType<
  CreateGuildFromTemplateRequestBody$Outbound,
  z.ZodTypeDef,
  CreateGuildFromTemplateRequestBody
> = z.object({
  name: z.string(),
  icon: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateGuildFromTemplateRequestBody$ {
  /** @deprecated use `CreateGuildFromTemplateRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateGuildFromTemplateRequestBody$inboundSchema;
  /** @deprecated use `CreateGuildFromTemplateRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateGuildFromTemplateRequestBody$outboundSchema;
  /** @deprecated use `CreateGuildFromTemplateRequestBody$Outbound` instead. */
  export type Outbound = CreateGuildFromTemplateRequestBody$Outbound;
}

export function createGuildFromTemplateRequestBodyToJSON(
  createGuildFromTemplateRequestBody: CreateGuildFromTemplateRequestBody,
): string {
  return JSON.stringify(
    CreateGuildFromTemplateRequestBody$outboundSchema.parse(
      createGuildFromTemplateRequestBody,
    ),
  );
}

export function createGuildFromTemplateRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateGuildFromTemplateRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateGuildFromTemplateRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateGuildFromTemplateRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateGuildFromTemplateRequest$inboundSchema: z.ZodType<
  CreateGuildFromTemplateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string(),
  RequestBody: z.lazy(() => CreateGuildFromTemplateRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateGuildFromTemplateRequest$Outbound = {
  code: string;
  RequestBody: CreateGuildFromTemplateRequestBody$Outbound;
};

/** @internal */
export const CreateGuildFromTemplateRequest$outboundSchema: z.ZodType<
  CreateGuildFromTemplateRequest$Outbound,
  z.ZodTypeDef,
  CreateGuildFromTemplateRequest
> = z.object({
  code: z.string(),
  requestBody: z.lazy(() => CreateGuildFromTemplateRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateGuildFromTemplateRequest$ {
  /** @deprecated use `CreateGuildFromTemplateRequest$inboundSchema` instead. */
  export const inboundSchema = CreateGuildFromTemplateRequest$inboundSchema;
  /** @deprecated use `CreateGuildFromTemplateRequest$outboundSchema` instead. */
  export const outboundSchema = CreateGuildFromTemplateRequest$outboundSchema;
  /** @deprecated use `CreateGuildFromTemplateRequest$Outbound` instead. */
  export type Outbound = CreateGuildFromTemplateRequest$Outbound;
}

export function createGuildFromTemplateRequestToJSON(
  createGuildFromTemplateRequest: CreateGuildFromTemplateRequest,
): string {
  return JSON.stringify(
    CreateGuildFromTemplateRequest$outboundSchema.parse(
      createGuildFromTemplateRequest,
    ),
  );
}

export function createGuildFromTemplateRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateGuildFromTemplateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateGuildFromTemplateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateGuildFromTemplateRequest' from JSON`,
  );
}
