/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type AccountResponse = {
  id: string;
  name?: string | null | undefined;
};

/** @internal */
export const AccountResponse$inboundSchema: z.ZodType<
  AccountResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.nullable(z.string()).optional(),
});

/** @internal */
export type AccountResponse$Outbound = {
  id: string;
  name?: string | null | undefined;
};

/** @internal */
export const AccountResponse$outboundSchema: z.ZodType<
  AccountResponse$Outbound,
  z.ZodTypeDef,
  AccountResponse
> = z.object({
  id: z.string(),
  name: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountResponse$ {
  /** @deprecated use `AccountResponse$inboundSchema` instead. */
  export const inboundSchema = AccountResponse$inboundSchema;
  /** @deprecated use `AccountResponse$outboundSchema` instead. */
  export const outboundSchema = AccountResponse$outboundSchema;
  /** @deprecated use `AccountResponse$Outbound` instead. */
  export type Outbound = AccountResponse$Outbound;
}
