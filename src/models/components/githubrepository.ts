/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GithubRepository = {
  id: number;
  htmlUrl: string;
  name: string;
  fullName: string;
};

/** @internal */
export const GithubRepository$inboundSchema: z.ZodType<
  GithubRepository,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  html_url: z.string(),
  name: z.string(),
  full_name: z.string(),
}).transform((v) => {
  return remap$(v, {
    "html_url": "htmlUrl",
    "full_name": "fullName",
  });
});

/** @internal */
export type GithubRepository$Outbound = {
  id: number;
  html_url: string;
  name: string;
  full_name: string;
};

/** @internal */
export const GithubRepository$outboundSchema: z.ZodType<
  GithubRepository$Outbound,
  z.ZodTypeDef,
  GithubRepository
> = z.object({
  id: z.number().int(),
  htmlUrl: z.string(),
  name: z.string(),
  fullName: z.string(),
}).transform((v) => {
  return remap$(v, {
    htmlUrl: "html_url",
    fullName: "full_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubRepository$ {
  /** @deprecated use `GithubRepository$inboundSchema` instead. */
  export const inboundSchema = GithubRepository$inboundSchema;
  /** @deprecated use `GithubRepository$outboundSchema` instead. */
  export const outboundSchema = GithubRepository$outboundSchema;
  /** @deprecated use `GithubRepository$Outbound` instead. */
  export type Outbound = GithubRepository$Outbound;
}

export function githubRepositoryToJSON(
  githubRepository: GithubRepository,
): string {
  return JSON.stringify(
    GithubRepository$outboundSchema.parse(githubRepository),
  );
}

export function githubRepositoryFromJSON(
  jsonString: string,
): SafeParseResult<GithubRepository, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GithubRepository$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GithubRepository' from JSON`,
  );
}
