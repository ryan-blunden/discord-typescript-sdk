/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListApplicationEmojisRequest = {
  applicationId: string;
};

/** @internal */
export const ListApplicationEmojisRequest$inboundSchema: z.ZodType<
  ListApplicationEmojisRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
  });
});

/** @internal */
export type ListApplicationEmojisRequest$Outbound = {
  application_id: string;
};

/** @internal */
export const ListApplicationEmojisRequest$outboundSchema: z.ZodType<
  ListApplicationEmojisRequest$Outbound,
  z.ZodTypeDef,
  ListApplicationEmojisRequest
> = z.object({
  applicationId: z.string(),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListApplicationEmojisRequest$ {
  /** @deprecated use `ListApplicationEmojisRequest$inboundSchema` instead. */
  export const inboundSchema = ListApplicationEmojisRequest$inboundSchema;
  /** @deprecated use `ListApplicationEmojisRequest$outboundSchema` instead. */
  export const outboundSchema = ListApplicationEmojisRequest$outboundSchema;
  /** @deprecated use `ListApplicationEmojisRequest$Outbound` instead. */
  export type Outbound = ListApplicationEmojisRequest$Outbound;
}

export function listApplicationEmojisRequestToJSON(
  listApplicationEmojisRequest: ListApplicationEmojisRequest,
): string {
  return JSON.stringify(
    ListApplicationEmojisRequest$outboundSchema.parse(
      listApplicationEmojisRequest,
    ),
  );
}

export function listApplicationEmojisRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListApplicationEmojisRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListApplicationEmojisRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListApplicationEmojisRequest' from JSON`,
  );
}
