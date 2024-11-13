/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ApplicationCommandPermission = {
  id: string;
  type?: 1 | undefined;
  permission: boolean;
};

/** @internal */
export const ApplicationCommandPermission$inboundSchema: z.ZodType<
  ApplicationCommandPermission,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: z.literal(1).optional(),
  permission: z.boolean(),
});

/** @internal */
export type ApplicationCommandPermission$Outbound = {
  id: string;
  type: 1;
  permission: boolean;
};

/** @internal */
export const ApplicationCommandPermission$outboundSchema: z.ZodType<
  ApplicationCommandPermission$Outbound,
  z.ZodTypeDef,
  ApplicationCommandPermission
> = z.object({
  id: z.string(),
  type: z.literal(1).default(1 as const),
  permission: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationCommandPermission$ {
  /** @deprecated use `ApplicationCommandPermission$inboundSchema` instead. */
  export const inboundSchema = ApplicationCommandPermission$inboundSchema;
  /** @deprecated use `ApplicationCommandPermission$outboundSchema` instead. */
  export const outboundSchema = ApplicationCommandPermission$outboundSchema;
  /** @deprecated use `ApplicationCommandPermission$Outbound` instead. */
  export type Outbound = ApplicationCommandPermission$Outbound;
}