/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type DeleteAutoModerationRuleRequest = {
  guildId: string;
  ruleId: string;
};

/** @internal */
export const DeleteAutoModerationRuleRequest$inboundSchema: z.ZodType<
  DeleteAutoModerationRuleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  rule_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "rule_id": "ruleId",
  });
});

/** @internal */
export type DeleteAutoModerationRuleRequest$Outbound = {
  guild_id: string;
  rule_id: string;
};

/** @internal */
export const DeleteAutoModerationRuleRequest$outboundSchema: z.ZodType<
  DeleteAutoModerationRuleRequest$Outbound,
  z.ZodTypeDef,
  DeleteAutoModerationRuleRequest
> = z.object({
  guildId: z.string(),
  ruleId: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    ruleId: "rule_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteAutoModerationRuleRequest$ {
  /** @deprecated use `DeleteAutoModerationRuleRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteAutoModerationRuleRequest$inboundSchema;
  /** @deprecated use `DeleteAutoModerationRuleRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteAutoModerationRuleRequest$outboundSchema;
  /** @deprecated use `DeleteAutoModerationRuleRequest$Outbound` instead. */
  export type Outbound = DeleteAutoModerationRuleRequest$Outbound;
}