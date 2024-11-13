/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  OAuth2Key,
  OAuth2Key$inboundSchema,
  OAuth2Key$Outbound,
  OAuth2Key$outboundSchema,
} from "./oauth2key.js";

export type OAuth2GetKeys = {
  keys: Array<OAuth2Key>;
};

/** @internal */
export const OAuth2GetKeys$inboundSchema: z.ZodType<
  OAuth2GetKeys,
  z.ZodTypeDef,
  unknown
> = z.object({
  keys: z.array(OAuth2Key$inboundSchema),
});

/** @internal */
export type OAuth2GetKeys$Outbound = {
  keys: Array<OAuth2Key$Outbound>;
};

/** @internal */
export const OAuth2GetKeys$outboundSchema: z.ZodType<
  OAuth2GetKeys$Outbound,
  z.ZodTypeDef,
  OAuth2GetKeys
> = z.object({
  keys: z.array(OAuth2Key$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OAuth2GetKeys$ {
  /** @deprecated use `OAuth2GetKeys$inboundSchema` instead. */
  export const inboundSchema = OAuth2GetKeys$inboundSchema;
  /** @deprecated use `OAuth2GetKeys$outboundSchema` instead. */
  export const outboundSchema = OAuth2GetKeys$outboundSchema;
  /** @deprecated use `OAuth2GetKeys$Outbound` instead. */
  export type Outbound = OAuth2GetKeys$Outbound;
}