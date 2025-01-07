/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  WidgetChannel,
  WidgetChannel$inboundSchema,
  WidgetChannel$Outbound,
  WidgetChannel$outboundSchema,
} from "./widgetchannel.js";
import {
  WidgetMember,
  WidgetMember$inboundSchema,
  WidgetMember$Outbound,
  WidgetMember$outboundSchema,
} from "./widgetmember.js";

export type WidgetResponse = {
  id: string;
  name: string;
  instantInvite?: string | null | undefined;
  channels: Array<WidgetChannel>;
  members: Array<WidgetMember>;
  presenceCount: number;
};

/** @internal */
export const WidgetResponse$inboundSchema: z.ZodType<
  WidgetResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  instant_invite: z.nullable(z.string()).optional(),
  channels: z.array(WidgetChannel$inboundSchema),
  members: z.array(WidgetMember$inboundSchema),
  presence_count: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "instant_invite": "instantInvite",
    "presence_count": "presenceCount",
  });
});

/** @internal */
export type WidgetResponse$Outbound = {
  id: string;
  name: string;
  instant_invite?: string | null | undefined;
  channels: Array<WidgetChannel$Outbound>;
  members: Array<WidgetMember$Outbound>;
  presence_count: number;
};

/** @internal */
export const WidgetResponse$outboundSchema: z.ZodType<
  WidgetResponse$Outbound,
  z.ZodTypeDef,
  WidgetResponse
> = z.object({
  id: z.string(),
  name: z.string(),
  instantInvite: z.nullable(z.string()).optional(),
  channels: z.array(WidgetChannel$outboundSchema),
  members: z.array(WidgetMember$outboundSchema),
  presenceCount: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    instantInvite: "instant_invite",
    presenceCount: "presence_count",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WidgetResponse$ {
  /** @deprecated use `WidgetResponse$inboundSchema` instead. */
  export const inboundSchema = WidgetResponse$inboundSchema;
  /** @deprecated use `WidgetResponse$outboundSchema` instead. */
  export const outboundSchema = WidgetResponse$outboundSchema;
  /** @deprecated use `WidgetResponse$Outbound` instead. */
  export type Outbound = WidgetResponse$Outbound;
}

export function widgetResponseToJSON(widgetResponse: WidgetResponse): string {
  return JSON.stringify(WidgetResponse$outboundSchema.parse(widgetResponse));
}

export function widgetResponseFromJSON(
  jsonString: string,
): SafeParseResult<WidgetResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WidgetResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WidgetResponse' from JSON`,
  );
}
