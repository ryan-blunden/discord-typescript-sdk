/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type InviteChannelRecipientResponse = {
  username: string;
};

/** @internal */
export const InviteChannelRecipientResponse$inboundSchema: z.ZodType<
  InviteChannelRecipientResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  username: z.string(),
});

/** @internal */
export type InviteChannelRecipientResponse$Outbound = {
  username: string;
};

/** @internal */
export const InviteChannelRecipientResponse$outboundSchema: z.ZodType<
  InviteChannelRecipientResponse$Outbound,
  z.ZodTypeDef,
  InviteChannelRecipientResponse
> = z.object({
  username: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteChannelRecipientResponse$ {
  /** @deprecated use `InviteChannelRecipientResponse$inboundSchema` instead. */
  export const inboundSchema = InviteChannelRecipientResponse$inboundSchema;
  /** @deprecated use `InviteChannelRecipientResponse$outboundSchema` instead. */
  export const outboundSchema = InviteChannelRecipientResponse$outboundSchema;
  /** @deprecated use `InviteChannelRecipientResponse$Outbound` instead. */
  export type Outbound = InviteChannelRecipientResponse$Outbound;
}

export function inviteChannelRecipientResponseToJSON(
  inviteChannelRecipientResponse: InviteChannelRecipientResponse,
): string {
  return JSON.stringify(
    InviteChannelRecipientResponse$outboundSchema.parse(
      inviteChannelRecipientResponse,
    ),
  );
}

export function inviteChannelRecipientResponseFromJSON(
  jsonString: string,
): SafeParseResult<InviteChannelRecipientResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InviteChannelRecipientResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InviteChannelRecipientResponse' from JSON`,
  );
}
