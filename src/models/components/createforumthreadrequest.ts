/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  BaseCreateMessageCreateRequest,
  BaseCreateMessageCreateRequest$inboundSchema,
  BaseCreateMessageCreateRequest$Outbound,
  BaseCreateMessageCreateRequest$outboundSchema,
} from "./basecreatemessagecreaterequest.js";

export type CreateForumThreadRequest = {
  name: string;
  autoArchiveDuration?: 60 | null | undefined;
  rateLimitPerUser?: number | null | undefined;
  appliedTags?: Array<string> | null | undefined;
  message: BaseCreateMessageCreateRequest;
};

/** @internal */
export const CreateForumThreadRequest$inboundSchema: z.ZodType<
  CreateForumThreadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  auto_archive_duration: z.nullable(z.literal(60)).optional(),
  rate_limit_per_user: z.nullable(z.number().int()).optional(),
  applied_tags: z.nullable(z.array(z.string())).optional(),
  message: BaseCreateMessageCreateRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "auto_archive_duration": "autoArchiveDuration",
    "rate_limit_per_user": "rateLimitPerUser",
    "applied_tags": "appliedTags",
  });
});

/** @internal */
export type CreateForumThreadRequest$Outbound = {
  name: string;
  auto_archive_duration: 60 | null;
  rate_limit_per_user?: number | null | undefined;
  applied_tags?: Array<string> | null | undefined;
  message: BaseCreateMessageCreateRequest$Outbound;
};

/** @internal */
export const CreateForumThreadRequest$outboundSchema: z.ZodType<
  CreateForumThreadRequest$Outbound,
  z.ZodTypeDef,
  CreateForumThreadRequest
> = z.object({
  name: z.string(),
  autoArchiveDuration: z.nullable(z.literal(60).default(60 as const)),
  rateLimitPerUser: z.nullable(z.number().int()).optional(),
  appliedTags: z.nullable(z.array(z.string())).optional(),
  message: BaseCreateMessageCreateRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    autoArchiveDuration: "auto_archive_duration",
    rateLimitPerUser: "rate_limit_per_user",
    appliedTags: "applied_tags",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateForumThreadRequest$ {
  /** @deprecated use `CreateForumThreadRequest$inboundSchema` instead. */
  export const inboundSchema = CreateForumThreadRequest$inboundSchema;
  /** @deprecated use `CreateForumThreadRequest$outboundSchema` instead. */
  export const outboundSchema = CreateForumThreadRequest$outboundSchema;
  /** @deprecated use `CreateForumThreadRequest$Outbound` instead. */
  export type Outbound = CreateForumThreadRequest$Outbound;
}