/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  GithubCheckApp,
  GithubCheckApp$inboundSchema,
  GithubCheckApp$Outbound,
  GithubCheckApp$outboundSchema,
} from "./githubcheckapp.js";
import {
  GithubCheckPullRequest,
  GithubCheckPullRequest$inboundSchema,
  GithubCheckPullRequest$Outbound,
  GithubCheckPullRequest$outboundSchema,
} from "./githubcheckpullrequest.js";

export type GithubCheckSuite = {
  conclusion?: string | null | undefined;
  headBranch?: string | null | undefined;
  headSha: string;
  pullRequests?: Array<GithubCheckPullRequest> | null | undefined;
  app: GithubCheckApp;
};

/** @internal */
export const GithubCheckSuite$inboundSchema: z.ZodType<
  GithubCheckSuite,
  z.ZodTypeDef,
  unknown
> = z.object({
  conclusion: z.nullable(z.string()).optional(),
  head_branch: z.nullable(z.string()).optional(),
  head_sha: z.string(),
  pull_requests: z.nullable(z.array(GithubCheckPullRequest$inboundSchema))
    .optional(),
  app: GithubCheckApp$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "head_branch": "headBranch",
    "head_sha": "headSha",
    "pull_requests": "pullRequests",
  });
});

/** @internal */
export type GithubCheckSuite$Outbound = {
  conclusion?: string | null | undefined;
  head_branch?: string | null | undefined;
  head_sha: string;
  pull_requests?: Array<GithubCheckPullRequest$Outbound> | null | undefined;
  app: GithubCheckApp$Outbound;
};

/** @internal */
export const GithubCheckSuite$outboundSchema: z.ZodType<
  GithubCheckSuite$Outbound,
  z.ZodTypeDef,
  GithubCheckSuite
> = z.object({
  conclusion: z.nullable(z.string()).optional(),
  headBranch: z.nullable(z.string()).optional(),
  headSha: z.string(),
  pullRequests: z.nullable(z.array(GithubCheckPullRequest$outboundSchema))
    .optional(),
  app: GithubCheckApp$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    headBranch: "head_branch",
    headSha: "head_sha",
    pullRequests: "pull_requests",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubCheckSuite$ {
  /** @deprecated use `GithubCheckSuite$inboundSchema` instead. */
  export const inboundSchema = GithubCheckSuite$inboundSchema;
  /** @deprecated use `GithubCheckSuite$outboundSchema` instead. */
  export const outboundSchema = GithubCheckSuite$outboundSchema;
  /** @deprecated use `GithubCheckSuite$Outbound` instead. */
  export type Outbound = GithubCheckSuite$Outbound;
}