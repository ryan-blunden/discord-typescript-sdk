/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UnfurledMediaResponse,
  UnfurledMediaResponse$inboundSchema,
  UnfurledMediaResponse$Outbound,
  UnfurledMediaResponse$outboundSchema,
} from "./unfurledmediaresponse.js";

export type MediaGalleryItemResponse = {
  media: UnfurledMediaResponse;
  description?: string | null | undefined;
  spoiler: boolean;
};

/** @internal */
export const MediaGalleryItemResponse$inboundSchema: z.ZodType<
  MediaGalleryItemResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  media: UnfurledMediaResponse$inboundSchema,
  description: z.nullable(z.string()).optional(),
  spoiler: z.boolean(),
});

/** @internal */
export type MediaGalleryItemResponse$Outbound = {
  media: UnfurledMediaResponse$Outbound;
  description?: string | null | undefined;
  spoiler: boolean;
};

/** @internal */
export const MediaGalleryItemResponse$outboundSchema: z.ZodType<
  MediaGalleryItemResponse$Outbound,
  z.ZodTypeDef,
  MediaGalleryItemResponse
> = z.object({
  media: UnfurledMediaResponse$outboundSchema,
  description: z.nullable(z.string()).optional(),
  spoiler: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaGalleryItemResponse$ {
  /** @deprecated use `MediaGalleryItemResponse$inboundSchema` instead. */
  export const inboundSchema = MediaGalleryItemResponse$inboundSchema;
  /** @deprecated use `MediaGalleryItemResponse$outboundSchema` instead. */
  export const outboundSchema = MediaGalleryItemResponse$outboundSchema;
  /** @deprecated use `MediaGalleryItemResponse$Outbound` instead. */
  export type Outbound = MediaGalleryItemResponse$Outbound;
}

export function mediaGalleryItemResponseToJSON(
  mediaGalleryItemResponse: MediaGalleryItemResponse,
): string {
  return JSON.stringify(
    MediaGalleryItemResponse$outboundSchema.parse(mediaGalleryItemResponse),
  );
}

export function mediaGalleryItemResponseFromJSON(
  jsonString: string,
): SafeParseResult<MediaGalleryItemResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaGalleryItemResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaGalleryItemResponse' from JSON`,
  );
}
