/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GithubUser = {
  id: number;
  login: string;
  htmlUrl: string;
  avatarUrl: string;
};

/** @internal */
export const GithubUser$inboundSchema: z.ZodType<
  GithubUser,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  login: z.string(),
  html_url: z.string(),
  avatar_url: z.string(),
}).transform((v) => {
  return remap$(v, {
    "html_url": "htmlUrl",
    "avatar_url": "avatarUrl",
  });
});

/** @internal */
export type GithubUser$Outbound = {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
};

/** @internal */
export const GithubUser$outboundSchema: z.ZodType<
  GithubUser$Outbound,
  z.ZodTypeDef,
  GithubUser
> = z.object({
  id: z.number().int(),
  login: z.string(),
  htmlUrl: z.string(),
  avatarUrl: z.string(),
}).transform((v) => {
  return remap$(v, {
    htmlUrl: "html_url",
    avatarUrl: "avatar_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubUser$ {
  /** @deprecated use `GithubUser$inboundSchema` instead. */
  export const inboundSchema = GithubUser$inboundSchema;
  /** @deprecated use `GithubUser$outboundSchema` instead. */
  export const outboundSchema = GithubUser$outboundSchema;
  /** @deprecated use `GithubUser$Outbound` instead. */
  export type Outbound = GithubUser$Outbound;
}