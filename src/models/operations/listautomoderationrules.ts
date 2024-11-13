/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListAutoModerationRulesRequest = {
  guildId: string;
};

export type ResponseBody =
  | components.DefaultKeywordRuleResponse
  | components.KeywordRuleResponse
  | components.MLSpamRuleResponse
  | components.MentionSpamRuleResponse
  | components.SpamLinkRuleResponse;

/** @internal */
export const ListAutoModerationRulesRequest$inboundSchema: z.ZodType<
  ListAutoModerationRulesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
  });
});

/** @internal */
export type ListAutoModerationRulesRequest$Outbound = {
  guild_id: string;
};

/** @internal */
export const ListAutoModerationRulesRequest$outboundSchema: z.ZodType<
  ListAutoModerationRulesRequest$Outbound,
  z.ZodTypeDef,
  ListAutoModerationRulesRequest
> = z.object({
  guildId: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAutoModerationRulesRequest$ {
  /** @deprecated use `ListAutoModerationRulesRequest$inboundSchema` instead. */
  export const inboundSchema = ListAutoModerationRulesRequest$inboundSchema;
  /** @deprecated use `ListAutoModerationRulesRequest$outboundSchema` instead. */
  export const outboundSchema = ListAutoModerationRulesRequest$outboundSchema;
  /** @deprecated use `ListAutoModerationRulesRequest$Outbound` instead. */
  export type Outbound = ListAutoModerationRulesRequest$Outbound;
}

/** @internal */
export const ResponseBody$inboundSchema: z.ZodType<
  ResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.DefaultKeywordRuleResponse$inboundSchema,
  components.KeywordRuleResponse$inboundSchema,
  components.MLSpamRuleResponse$inboundSchema,
  components.MentionSpamRuleResponse$inboundSchema,
  components.SpamLinkRuleResponse$inboundSchema,
]);

/** @internal */
export type ResponseBody$Outbound =
  | components.DefaultKeywordRuleResponse$Outbound
  | components.KeywordRuleResponse$Outbound
  | components.MLSpamRuleResponse$Outbound
  | components.MentionSpamRuleResponse$Outbound
  | components.SpamLinkRuleResponse$Outbound;

/** @internal */
export const ResponseBody$outboundSchema: z.ZodType<
  ResponseBody$Outbound,
  z.ZodTypeDef,
  ResponseBody
> = z.union([
  components.DefaultKeywordRuleResponse$outboundSchema,
  components.KeywordRuleResponse$outboundSchema,
  components.MLSpamRuleResponse$outboundSchema,
  components.MentionSpamRuleResponse$outboundSchema,
  components.SpamLinkRuleResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBody$ {
  /** @deprecated use `ResponseBody$inboundSchema` instead. */
  export const inboundSchema = ResponseBody$inboundSchema;
  /** @deprecated use `ResponseBody$outboundSchema` instead. */
  export const outboundSchema = ResponseBody$outboundSchema;
  /** @deprecated use `ResponseBody$Outbound` instead. */
  export type Outbound = ResponseBody$Outbound;
}