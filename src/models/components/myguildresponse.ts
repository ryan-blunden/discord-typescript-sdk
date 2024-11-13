/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type MyGuildResponse = {
  id: string;
  name: string;
  icon?: string | null | undefined;
  banner?: string | null | undefined;
  owner: boolean;
  permissions: string;
  features: Array<string>;
  approximateMemberCount?: number | null | undefined;
  approximatePresenceCount?: number | null | undefined;
};

/** @internal */
export const MyGuildResponse$inboundSchema: z.ZodType<
  MyGuildResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.nullable(z.string()).optional(),
  banner: z.nullable(z.string()).optional(),
  owner: z.boolean(),
  permissions: z.string(),
  features: z.array(z.string()),
  approximate_member_count: z.nullable(z.number().int()).optional(),
  approximate_presence_count: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "approximate_member_count": "approximateMemberCount",
    "approximate_presence_count": "approximatePresenceCount",
  });
});

/** @internal */
export type MyGuildResponse$Outbound = {
  id: string;
  name: string;
  icon?: string | null | undefined;
  banner?: string | null | undefined;
  owner: boolean;
  permissions: string;
  features: Array<string>;
  approximate_member_count?: number | null | undefined;
  approximate_presence_count?: number | null | undefined;
};

/** @internal */
export const MyGuildResponse$outboundSchema: z.ZodType<
  MyGuildResponse$Outbound,
  z.ZodTypeDef,
  MyGuildResponse
> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.nullable(z.string()).optional(),
  banner: z.nullable(z.string()).optional(),
  owner: z.boolean(),
  permissions: z.string(),
  features: z.array(z.string()),
  approximateMemberCount: z.nullable(z.number().int()).optional(),
  approximatePresenceCount: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    approximateMemberCount: "approximate_member_count",
    approximatePresenceCount: "approximate_presence_count",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MyGuildResponse$ {
  /** @deprecated use `MyGuildResponse$inboundSchema` instead. */
  export const inboundSchema = MyGuildResponse$inboundSchema;
  /** @deprecated use `MyGuildResponse$outboundSchema` instead. */
  export const outboundSchema = MyGuildResponse$outboundSchema;
  /** @deprecated use `MyGuildResponse$Outbound` instead. */
  export type Outbound = MyGuildResponse$Outbound;
}