/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  AttachmentResponse,
  AttachmentResponse$inboundSchema,
  AttachmentResponse$Outbound,
  AttachmentResponse$outboundSchema,
} from "./attachmentresponse.js";

export type ActivitiesAttachmentResponse = {
  attachment: AttachmentResponse;
};

/** @internal */
export const ActivitiesAttachmentResponse$inboundSchema: z.ZodType<
  ActivitiesAttachmentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  attachment: AttachmentResponse$inboundSchema,
});

/** @internal */
export type ActivitiesAttachmentResponse$Outbound = {
  attachment: AttachmentResponse$Outbound;
};

/** @internal */
export const ActivitiesAttachmentResponse$outboundSchema: z.ZodType<
  ActivitiesAttachmentResponse$Outbound,
  z.ZodTypeDef,
  ActivitiesAttachmentResponse
> = z.object({
  attachment: AttachmentResponse$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivitiesAttachmentResponse$ {
  /** @deprecated use `ActivitiesAttachmentResponse$inboundSchema` instead. */
  export const inboundSchema = ActivitiesAttachmentResponse$inboundSchema;
  /** @deprecated use `ActivitiesAttachmentResponse$outboundSchema` instead. */
  export const outboundSchema = ActivitiesAttachmentResponse$outboundSchema;
  /** @deprecated use `ActivitiesAttachmentResponse$Outbound` instead. */
  export type Outbound = ActivitiesAttachmentResponse$Outbound;
}