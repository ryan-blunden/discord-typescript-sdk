/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  MessageComponentButtonResponse,
  MessageComponentButtonResponse$inboundSchema,
  MessageComponentButtonResponse$Outbound,
  MessageComponentButtonResponse$outboundSchema,
} from "./messagecomponentbuttonresponse.js";
import {
  MessageComponentChannelSelectResponse,
  MessageComponentChannelSelectResponse$inboundSchema,
  MessageComponentChannelSelectResponse$Outbound,
  MessageComponentChannelSelectResponse$outboundSchema,
} from "./messagecomponentchannelselectresponse.js";
import {
  MessageComponentInputTextResponse,
  MessageComponentInputTextResponse$inboundSchema,
  MessageComponentInputTextResponse$Outbound,
  MessageComponentInputTextResponse$outboundSchema,
} from "./messagecomponentinputtextresponse.js";
import {
  MessageComponentMentionableSelectResponse,
  MessageComponentMentionableSelectResponse$inboundSchema,
  MessageComponentMentionableSelectResponse$Outbound,
  MessageComponentMentionableSelectResponse$outboundSchema,
} from "./messagecomponentmentionableselectresponse.js";
import {
  MessageComponentRoleSelectResponse,
  MessageComponentRoleSelectResponse$inboundSchema,
  MessageComponentRoleSelectResponse$Outbound,
  MessageComponentRoleSelectResponse$outboundSchema,
} from "./messagecomponentroleselectresponse.js";
import {
  MessageComponentStringSelectResponse,
  MessageComponentStringSelectResponse$inboundSchema,
  MessageComponentStringSelectResponse$Outbound,
  MessageComponentStringSelectResponse$outboundSchema,
} from "./messagecomponentstringselectresponse.js";
import {
  MessageComponentUserSelectResponse,
  MessageComponentUserSelectResponse$inboundSchema,
  MessageComponentUserSelectResponse$Outbound,
  MessageComponentUserSelectResponse$outboundSchema,
} from "./messagecomponentuserselectresponse.js";

export type Components =
  | MessageComponentMentionableSelectResponse
  | MessageComponentRoleSelectResponse
  | MessageComponentStringSelectResponse
  | MessageComponentUserSelectResponse
  | MessageComponentButtonResponse
  | MessageComponentChannelSelectResponse
  | MessageComponentInputTextResponse;

export type MessageComponentActionRowResponse = {
  type?: 1 | undefined;
  id: number;
  components?:
    | Array<
      | MessageComponentMentionableSelectResponse
      | MessageComponentRoleSelectResponse
      | MessageComponentStringSelectResponse
      | MessageComponentUserSelectResponse
      | MessageComponentButtonResponse
      | MessageComponentChannelSelectResponse
      | MessageComponentInputTextResponse
    >
    | null
    | undefined;
};

/** @internal */
export const Components$inboundSchema: z.ZodType<
  Components,
  z.ZodTypeDef,
  unknown
> = z.union([
  MessageComponentMentionableSelectResponse$inboundSchema,
  MessageComponentRoleSelectResponse$inboundSchema,
  MessageComponentStringSelectResponse$inboundSchema,
  MessageComponentUserSelectResponse$inboundSchema,
  MessageComponentButtonResponse$inboundSchema,
  MessageComponentChannelSelectResponse$inboundSchema,
  MessageComponentInputTextResponse$inboundSchema,
]);

/** @internal */
export type Components$Outbound =
  | MessageComponentMentionableSelectResponse$Outbound
  | MessageComponentRoleSelectResponse$Outbound
  | MessageComponentStringSelectResponse$Outbound
  | MessageComponentUserSelectResponse$Outbound
  | MessageComponentButtonResponse$Outbound
  | MessageComponentChannelSelectResponse$Outbound
  | MessageComponentInputTextResponse$Outbound;

/** @internal */
export const Components$outboundSchema: z.ZodType<
  Components$Outbound,
  z.ZodTypeDef,
  Components
> = z.union([
  MessageComponentMentionableSelectResponse$outboundSchema,
  MessageComponentRoleSelectResponse$outboundSchema,
  MessageComponentStringSelectResponse$outboundSchema,
  MessageComponentUserSelectResponse$outboundSchema,
  MessageComponentButtonResponse$outboundSchema,
  MessageComponentChannelSelectResponse$outboundSchema,
  MessageComponentInputTextResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Components$ {
  /** @deprecated use `Components$inboundSchema` instead. */
  export const inboundSchema = Components$inboundSchema;
  /** @deprecated use `Components$outboundSchema` instead. */
  export const outboundSchema = Components$outboundSchema;
  /** @deprecated use `Components$Outbound` instead. */
  export type Outbound = Components$Outbound;
}

/** @internal */
export const MessageComponentActionRowResponse$inboundSchema: z.ZodType<
  MessageComponentActionRowResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(1).optional(),
  id: z.number().int(),
  components: z.nullable(
    z.array(
      z.union([
        MessageComponentMentionableSelectResponse$inboundSchema,
        MessageComponentRoleSelectResponse$inboundSchema,
        MessageComponentStringSelectResponse$inboundSchema,
        MessageComponentUserSelectResponse$inboundSchema,
        MessageComponentButtonResponse$inboundSchema,
        MessageComponentChannelSelectResponse$inboundSchema,
        MessageComponentInputTextResponse$inboundSchema,
      ]),
    ),
  ).optional(),
});

/** @internal */
export type MessageComponentActionRowResponse$Outbound = {
  type: 1;
  id: number;
  components?:
    | Array<
      | MessageComponentMentionableSelectResponse$Outbound
      | MessageComponentRoleSelectResponse$Outbound
      | MessageComponentStringSelectResponse$Outbound
      | MessageComponentUserSelectResponse$Outbound
      | MessageComponentButtonResponse$Outbound
      | MessageComponentChannelSelectResponse$Outbound
      | MessageComponentInputTextResponse$Outbound
    >
    | null
    | undefined;
};

/** @internal */
export const MessageComponentActionRowResponse$outboundSchema: z.ZodType<
  MessageComponentActionRowResponse$Outbound,
  z.ZodTypeDef,
  MessageComponentActionRowResponse
> = z.object({
  type: z.literal(1).default(1 as const),
  id: z.number().int(),
  components: z.nullable(
    z.array(
      z.union([
        MessageComponentMentionableSelectResponse$outboundSchema,
        MessageComponentRoleSelectResponse$outboundSchema,
        MessageComponentStringSelectResponse$outboundSchema,
        MessageComponentUserSelectResponse$outboundSchema,
        MessageComponentButtonResponse$outboundSchema,
        MessageComponentChannelSelectResponse$outboundSchema,
        MessageComponentInputTextResponse$outboundSchema,
      ]),
    ),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageComponentActionRowResponse$ {
  /** @deprecated use `MessageComponentActionRowResponse$inboundSchema` instead. */
  export const inboundSchema = MessageComponentActionRowResponse$inboundSchema;
  /** @deprecated use `MessageComponentActionRowResponse$outboundSchema` instead. */
  export const outboundSchema =
    MessageComponentActionRowResponse$outboundSchema;
  /** @deprecated use `MessageComponentActionRowResponse$Outbound` instead. */
  export type Outbound = MessageComponentActionRowResponse$Outbound;
}