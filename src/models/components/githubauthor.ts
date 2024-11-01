/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GithubAuthor = {
  username?: string | null | undefined;
  name: string;
};

/** @internal */
export const GithubAuthor$inboundSchema: z.ZodType<
  GithubAuthor,
  z.ZodTypeDef,
  unknown
> = z.object({
  username: z.nullable(z.string()).optional(),
  name: z.string(),
});

/** @internal */
export type GithubAuthor$Outbound = {
  username?: string | null | undefined;
  name: string;
};

/** @internal */
export const GithubAuthor$outboundSchema: z.ZodType<
  GithubAuthor$Outbound,
  z.ZodTypeDef,
  GithubAuthor
> = z.object({
  username: z.nullable(z.string()).optional(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubAuthor$ {
  /** @deprecated use `GithubAuthor$inboundSchema` instead. */
  export const inboundSchema = GithubAuthor$inboundSchema;
  /** @deprecated use `GithubAuthor$outboundSchema` instead. */
  export const outboundSchema = GithubAuthor$outboundSchema;
  /** @deprecated use `GithubAuthor$Outbound` instead. */
  export type Outbound = GithubAuthor$Outbound;
}
