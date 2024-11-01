/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type EntityMetadataExternal = {
  location: string;
};

/** @internal */
export const EntityMetadataExternal$inboundSchema: z.ZodType<
  EntityMetadataExternal,
  z.ZodTypeDef,
  unknown
> = z.object({
  location: z.string(),
});

/** @internal */
export type EntityMetadataExternal$Outbound = {
  location: string;
};

/** @internal */
export const EntityMetadataExternal$outboundSchema: z.ZodType<
  EntityMetadataExternal$Outbound,
  z.ZodTypeDef,
  EntityMetadataExternal
> = z.object({
  location: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntityMetadataExternal$ {
  /** @deprecated use `EntityMetadataExternal$inboundSchema` instead. */
  export const inboundSchema = EntityMetadataExternal$inboundSchema;
  /** @deprecated use `EntityMetadataExternal$outboundSchema` instead. */
  export const outboundSchema = EntityMetadataExternal$outboundSchema;
  /** @deprecated use `EntityMetadataExternal$Outbound` instead. */
  export type Outbound = EntityMetadataExternal$Outbound;
}
