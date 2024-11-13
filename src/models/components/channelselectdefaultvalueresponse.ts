/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ChannelSelectDefaultValueResponse = {
  type?: "user" | undefined;
  id: string;
};

/** @internal */
export const ChannelSelectDefaultValueResponse$inboundSchema: z.ZodType<
  ChannelSelectDefaultValueResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("user").optional(),
  id: z.string(),
});

/** @internal */
export type ChannelSelectDefaultValueResponse$Outbound = {
  type: "user";
  id: string;
};

/** @internal */
export const ChannelSelectDefaultValueResponse$outboundSchema: z.ZodType<
  ChannelSelectDefaultValueResponse$Outbound,
  z.ZodTypeDef,
  ChannelSelectDefaultValueResponse
> = z.object({
  type: z.literal("user").default("user" as const),
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChannelSelectDefaultValueResponse$ {
  /** @deprecated use `ChannelSelectDefaultValueResponse$inboundSchema` instead. */
  export const inboundSchema = ChannelSelectDefaultValueResponse$inboundSchema;
  /** @deprecated use `ChannelSelectDefaultValueResponse$outboundSchema` instead. */
  export const outboundSchema =
    ChannelSelectDefaultValueResponse$outboundSchema;
  /** @deprecated use `ChannelSelectDefaultValueResponse$Outbound` instead. */
  export type Outbound = ChannelSelectDefaultValueResponse$Outbound;
}