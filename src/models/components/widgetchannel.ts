/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type WidgetChannel = {
  id: string;
  name: string;
  position: number;
};

/** @internal */
export const WidgetChannel$inboundSchema: z.ZodType<
  WidgetChannel,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  position: z.number().int(),
});

/** @internal */
export type WidgetChannel$Outbound = {
  id: string;
  name: string;
  position: number;
};

/** @internal */
export const WidgetChannel$outboundSchema: z.ZodType<
  WidgetChannel$Outbound,
  z.ZodTypeDef,
  WidgetChannel
> = z.object({
  id: z.string(),
  name: z.string(),
  position: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WidgetChannel$ {
  /** @deprecated use `WidgetChannel$inboundSchema` instead. */
  export const inboundSchema = WidgetChannel$inboundSchema;
  /** @deprecated use `WidgetChannel$outboundSchema` instead. */
  export const outboundSchema = WidgetChannel$outboundSchema;
  /** @deprecated use `WidgetChannel$Outbound` instead. */
  export type Outbound = WidgetChannel$Outbound;
}
