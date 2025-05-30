/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UnfurledMediaRequestWithAttachmentReferenceRequired,
  UnfurledMediaRequestWithAttachmentReferenceRequired$inboundSchema,
  UnfurledMediaRequestWithAttachmentReferenceRequired$Outbound,
  UnfurledMediaRequestWithAttachmentReferenceRequired$outboundSchema,
} from "./unfurledmediarequestwithattachmentreferencerequired.js";

export type FileComponentForMessageRequest = {
  type?: 1 | undefined;
  spoiler?: boolean | null | undefined;
  file: UnfurledMediaRequestWithAttachmentReferenceRequired;
};

/** @internal */
export const FileComponentForMessageRequest$inboundSchema: z.ZodType<
  FileComponentForMessageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(1).optional(),
  spoiler: z.nullable(z.boolean()).optional(),
  file: UnfurledMediaRequestWithAttachmentReferenceRequired$inboundSchema,
});

/** @internal */
export type FileComponentForMessageRequest$Outbound = {
  type: 1;
  spoiler?: boolean | null | undefined;
  file: UnfurledMediaRequestWithAttachmentReferenceRequired$Outbound;
};

/** @internal */
export const FileComponentForMessageRequest$outboundSchema: z.ZodType<
  FileComponentForMessageRequest$Outbound,
  z.ZodTypeDef,
  FileComponentForMessageRequest
> = z.object({
  type: z.literal(1).default(1 as const),
  spoiler: z.nullable(z.boolean()).optional(),
  file: UnfurledMediaRequestWithAttachmentReferenceRequired$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileComponentForMessageRequest$ {
  /** @deprecated use `FileComponentForMessageRequest$inboundSchema` instead. */
  export const inboundSchema = FileComponentForMessageRequest$inboundSchema;
  /** @deprecated use `FileComponentForMessageRequest$outboundSchema` instead. */
  export const outboundSchema = FileComponentForMessageRequest$outboundSchema;
  /** @deprecated use `FileComponentForMessageRequest$Outbound` instead. */
  export type Outbound = FileComponentForMessageRequest$Outbound;
}

export function fileComponentForMessageRequestToJSON(
  fileComponentForMessageRequest: FileComponentForMessageRequest,
): string {
  return JSON.stringify(
    FileComponentForMessageRequest$outboundSchema.parse(
      fileComponentForMessageRequest,
    ),
  );
}

export function fileComponentForMessageRequestFromJSON(
  jsonString: string,
): SafeParseResult<FileComponentForMessageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileComponentForMessageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileComponentForMessageRequest' from JSON`,
  );
}
