/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GithubCheckPullRequest = {
  number: number;
};

/** @internal */
export const GithubCheckPullRequest$inboundSchema: z.ZodType<
  GithubCheckPullRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  number: z.number().int(),
});

/** @internal */
export type GithubCheckPullRequest$Outbound = {
  number: number;
};

/** @internal */
export const GithubCheckPullRequest$outboundSchema: z.ZodType<
  GithubCheckPullRequest$Outbound,
  z.ZodTypeDef,
  GithubCheckPullRequest
> = z.object({
  number: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubCheckPullRequest$ {
  /** @deprecated use `GithubCheckPullRequest$inboundSchema` instead. */
  export const inboundSchema = GithubCheckPullRequest$inboundSchema;
  /** @deprecated use `GithubCheckPullRequest$outboundSchema` instead. */
  export const outboundSchema = GithubCheckPullRequest$outboundSchema;
  /** @deprecated use `GithubCheckPullRequest$Outbound` instead. */
  export type Outbound = GithubCheckPullRequest$Outbound;
}
