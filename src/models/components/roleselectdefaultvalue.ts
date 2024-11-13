/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type RoleSelectDefaultValue = {
  type?: "user" | undefined;
  id: string;
};

/** @internal */
export const RoleSelectDefaultValue$inboundSchema: z.ZodType<
  RoleSelectDefaultValue,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("user").optional(),
  id: z.string(),
});

/** @internal */
export type RoleSelectDefaultValue$Outbound = {
  type: "user";
  id: string;
};

/** @internal */
export const RoleSelectDefaultValue$outboundSchema: z.ZodType<
  RoleSelectDefaultValue$Outbound,
  z.ZodTypeDef,
  RoleSelectDefaultValue
> = z.object({
  type: z.literal("user").default("user" as const),
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RoleSelectDefaultValue$ {
  /** @deprecated use `RoleSelectDefaultValue$inboundSchema` instead. */
  export const inboundSchema = RoleSelectDefaultValue$inboundSchema;
  /** @deprecated use `RoleSelectDefaultValue$outboundSchema` instead. */
  export const outboundSchema = RoleSelectDefaultValue$outboundSchema;
  /** @deprecated use `RoleSelectDefaultValue$Outbound` instead. */
  export type Outbound = RoleSelectDefaultValue$Outbound;
}