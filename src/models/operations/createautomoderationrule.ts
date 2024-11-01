/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CreateAutoModerationRuleRequestBody =
  | components.DefaultKeywordListUpsertRequest
  | components.KeywordUpsertRequest
  | components.MLSpamUpsertRequest
  | components.MentionSpamUpsertRequest;

export type CreateAutoModerationRuleRequest = {
  guildId: string;
  requestBody:
    | components.DefaultKeywordListUpsertRequest
    | components.KeywordUpsertRequest
    | components.MLSpamUpsertRequest
    | components.MentionSpamUpsertRequest;
};

/**
 * 200 response for create_auto_moderation_rule
 */
export type CreateAutoModerationRuleResponseBody =
  | components.DefaultKeywordRuleResponse
  | components.KeywordRuleResponse
  | components.MLSpamRuleResponse
  | components.MentionSpamRuleResponse
  | components.SpamLinkRuleResponse;

/** @internal */
export const CreateAutoModerationRuleRequestBody$inboundSchema: z.ZodType<
  CreateAutoModerationRuleRequestBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.DefaultKeywordListUpsertRequest$inboundSchema,
  components.KeywordUpsertRequest$inboundSchema,
  components.MLSpamUpsertRequest$inboundSchema,
  components.MentionSpamUpsertRequest$inboundSchema,
]);

/** @internal */
export type CreateAutoModerationRuleRequestBody$Outbound =
  | components.DefaultKeywordListUpsertRequest$Outbound
  | components.KeywordUpsertRequest$Outbound
  | components.MLSpamUpsertRequest$Outbound
  | components.MentionSpamUpsertRequest$Outbound;

/** @internal */
export const CreateAutoModerationRuleRequestBody$outboundSchema: z.ZodType<
  CreateAutoModerationRuleRequestBody$Outbound,
  z.ZodTypeDef,
  CreateAutoModerationRuleRequestBody
> = z.union([
  components.DefaultKeywordListUpsertRequest$outboundSchema,
  components.KeywordUpsertRequest$outboundSchema,
  components.MLSpamUpsertRequest$outboundSchema,
  components.MentionSpamUpsertRequest$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAutoModerationRuleRequestBody$ {
  /** @deprecated use `CreateAutoModerationRuleRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateAutoModerationRuleRequestBody$inboundSchema;
  /** @deprecated use `CreateAutoModerationRuleRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateAutoModerationRuleRequestBody$outboundSchema;
  /** @deprecated use `CreateAutoModerationRuleRequestBody$Outbound` instead. */
  export type Outbound = CreateAutoModerationRuleRequestBody$Outbound;
}

/** @internal */
export const CreateAutoModerationRuleRequest$inboundSchema: z.ZodType<
  CreateAutoModerationRuleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  RequestBody: z.union([
    components.DefaultKeywordListUpsertRequest$inboundSchema,
    components.KeywordUpsertRequest$inboundSchema,
    components.MLSpamUpsertRequest$inboundSchema,
    components.MentionSpamUpsertRequest$inboundSchema,
  ]),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateAutoModerationRuleRequest$Outbound = {
  guild_id: string;
  RequestBody:
    | components.DefaultKeywordListUpsertRequest$Outbound
    | components.KeywordUpsertRequest$Outbound
    | components.MLSpamUpsertRequest$Outbound
    | components.MentionSpamUpsertRequest$Outbound;
};

/** @internal */
export const CreateAutoModerationRuleRequest$outboundSchema: z.ZodType<
  CreateAutoModerationRuleRequest$Outbound,
  z.ZodTypeDef,
  CreateAutoModerationRuleRequest
> = z.object({
  guildId: z.string(),
  requestBody: z.union([
    components.DefaultKeywordListUpsertRequest$outboundSchema,
    components.KeywordUpsertRequest$outboundSchema,
    components.MLSpamUpsertRequest$outboundSchema,
    components.MentionSpamUpsertRequest$outboundSchema,
  ]),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAutoModerationRuleRequest$ {
  /** @deprecated use `CreateAutoModerationRuleRequest$inboundSchema` instead. */
  export const inboundSchema = CreateAutoModerationRuleRequest$inboundSchema;
  /** @deprecated use `CreateAutoModerationRuleRequest$outboundSchema` instead. */
  export const outboundSchema = CreateAutoModerationRuleRequest$outboundSchema;
  /** @deprecated use `CreateAutoModerationRuleRequest$Outbound` instead. */
  export type Outbound = CreateAutoModerationRuleRequest$Outbound;
}

/** @internal */
export const CreateAutoModerationRuleResponseBody$inboundSchema: z.ZodType<
  CreateAutoModerationRuleResponseBody,
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
export type CreateAutoModerationRuleResponseBody$Outbound =
  | components.DefaultKeywordRuleResponse$Outbound
  | components.KeywordRuleResponse$Outbound
  | components.MLSpamRuleResponse$Outbound
  | components.MentionSpamRuleResponse$Outbound
  | components.SpamLinkRuleResponse$Outbound;

/** @internal */
export const CreateAutoModerationRuleResponseBody$outboundSchema: z.ZodType<
  CreateAutoModerationRuleResponseBody$Outbound,
  z.ZodTypeDef,
  CreateAutoModerationRuleResponseBody
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
export namespace CreateAutoModerationRuleResponseBody$ {
  /** @deprecated use `CreateAutoModerationRuleResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateAutoModerationRuleResponseBody$inboundSchema;
  /** @deprecated use `CreateAutoModerationRuleResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateAutoModerationRuleResponseBody$outboundSchema;
  /** @deprecated use `CreateAutoModerationRuleResponseBody$Outbound` instead. */
  export type Outbound = CreateAutoModerationRuleResponseBody$Outbound;
}
