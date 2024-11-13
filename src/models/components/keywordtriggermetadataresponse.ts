/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type KeywordTriggerMetadataResponse = {
  keywordFilter: Array<string>;
  regexPatterns: Array<string>;
  allowList: Array<string>;
};

/** @internal */
export const KeywordTriggerMetadataResponse$inboundSchema: z.ZodType<
  KeywordTriggerMetadataResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  keyword_filter: z.array(z.string()),
  regex_patterns: z.array(z.string()),
  allow_list: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "keyword_filter": "keywordFilter",
    "regex_patterns": "regexPatterns",
    "allow_list": "allowList",
  });
});

/** @internal */
export type KeywordTriggerMetadataResponse$Outbound = {
  keyword_filter: Array<string>;
  regex_patterns: Array<string>;
  allow_list: Array<string>;
};

/** @internal */
export const KeywordTriggerMetadataResponse$outboundSchema: z.ZodType<
  KeywordTriggerMetadataResponse$Outbound,
  z.ZodTypeDef,
  KeywordTriggerMetadataResponse
> = z.object({
  keywordFilter: z.array(z.string()),
  regexPatterns: z.array(z.string()),
  allowList: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    keywordFilter: "keyword_filter",
    regexPatterns: "regex_patterns",
    allowList: "allow_list",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KeywordTriggerMetadataResponse$ {
  /** @deprecated use `KeywordTriggerMetadataResponse$inboundSchema` instead. */
  export const inboundSchema = KeywordTriggerMetadataResponse$inboundSchema;
  /** @deprecated use `KeywordTriggerMetadataResponse$outboundSchema` instead. */
  export const outboundSchema = KeywordTriggerMetadataResponse$outboundSchema;
  /** @deprecated use `KeywordTriggerMetadataResponse$Outbound` instead. */
  export type Outbound = KeywordTriggerMetadataResponse$Outbound;
}