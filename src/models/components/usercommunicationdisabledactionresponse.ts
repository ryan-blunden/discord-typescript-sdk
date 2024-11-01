/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  UserCommunicationDisabledActionMetadataResponse,
  UserCommunicationDisabledActionMetadataResponse$inboundSchema,
  UserCommunicationDisabledActionMetadataResponse$Outbound,
  UserCommunicationDisabledActionMetadataResponse$outboundSchema,
} from "./usercommunicationdisabledactionmetadataresponse.js";

export type UserCommunicationDisabledActionResponse = {
  type?: 1 | undefined;
  metadata: UserCommunicationDisabledActionMetadataResponse;
};

/** @internal */
export const UserCommunicationDisabledActionResponse$inboundSchema: z.ZodType<
  UserCommunicationDisabledActionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(1).optional(),
  metadata: UserCommunicationDisabledActionMetadataResponse$inboundSchema,
});

/** @internal */
export type UserCommunicationDisabledActionResponse$Outbound = {
  type: 1;
  metadata: UserCommunicationDisabledActionMetadataResponse$Outbound;
};

/** @internal */
export const UserCommunicationDisabledActionResponse$outboundSchema: z.ZodType<
  UserCommunicationDisabledActionResponse$Outbound,
  z.ZodTypeDef,
  UserCommunicationDisabledActionResponse
> = z.object({
  type: z.literal(1).default(1 as const),
  metadata: UserCommunicationDisabledActionMetadataResponse$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserCommunicationDisabledActionResponse$ {
  /** @deprecated use `UserCommunicationDisabledActionResponse$inboundSchema` instead. */
  export const inboundSchema =
    UserCommunicationDisabledActionResponse$inboundSchema;
  /** @deprecated use `UserCommunicationDisabledActionResponse$outboundSchema` instead. */
  export const outboundSchema =
    UserCommunicationDisabledActionResponse$outboundSchema;
  /** @deprecated use `UserCommunicationDisabledActionResponse$Outbound` instead. */
  export type Outbound = UserCommunicationDisabledActionResponse$Outbound;
}
