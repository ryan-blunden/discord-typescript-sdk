/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  AccountResponse,
  AccountResponse$inboundSchema,
  AccountResponse$Outbound,
  AccountResponse$outboundSchema,
} from "./accountresponse.js";

export type PartialDiscordIntegrationResponse = {
  id: string;
  type?: "discord" | undefined;
  name?: string | null | undefined;
  account?: AccountResponse | null | undefined;
  applicationId: string;
};

/** @internal */
export const PartialDiscordIntegrationResponse$inboundSchema: z.ZodType<
  PartialDiscordIntegrationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: z.literal("discord").optional(),
  name: z.nullable(z.string()).optional(),
  account: z.nullable(AccountResponse$inboundSchema).optional(),
  application_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
  });
});

/** @internal */
export type PartialDiscordIntegrationResponse$Outbound = {
  id: string;
  type: "discord";
  name?: string | null | undefined;
  account?: AccountResponse$Outbound | null | undefined;
  application_id: string;
};

/** @internal */
export const PartialDiscordIntegrationResponse$outboundSchema: z.ZodType<
  PartialDiscordIntegrationResponse$Outbound,
  z.ZodTypeDef,
  PartialDiscordIntegrationResponse
> = z.object({
  id: z.string(),
  type: z.literal("discord").default("discord" as const),
  name: z.nullable(z.string()).optional(),
  account: z.nullable(AccountResponse$outboundSchema).optional(),
  applicationId: z.string(),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PartialDiscordIntegrationResponse$ {
  /** @deprecated use `PartialDiscordIntegrationResponse$inboundSchema` instead. */
  export const inboundSchema = PartialDiscordIntegrationResponse$inboundSchema;
  /** @deprecated use `PartialDiscordIntegrationResponse$outboundSchema` instead. */
  export const outboundSchema =
    PartialDiscordIntegrationResponse$outboundSchema;
  /** @deprecated use `PartialDiscordIntegrationResponse$Outbound` instead. */
  export type Outbound = PartialDiscordIntegrationResponse$Outbound;
}