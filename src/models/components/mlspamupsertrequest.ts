/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  BlockMessageAction,
  BlockMessageAction$inboundSchema,
  BlockMessageAction$Outbound,
  BlockMessageAction$outboundSchema,
} from "./blockmessageaction.js";
import {
  FlagToChannelAction,
  FlagToChannelAction$inboundSchema,
  FlagToChannelAction$Outbound,
  FlagToChannelAction$outboundSchema,
} from "./flagtochannelaction.js";
import {
  MLSpamTriggerMetadata,
  MLSpamTriggerMetadata$inboundSchema,
  MLSpamTriggerMetadata$Outbound,
  MLSpamTriggerMetadata$outboundSchema,
} from "./mlspamtriggermetadata.js";
import {
  QuarantineUserAction,
  QuarantineUserAction$inboundSchema,
  QuarantineUserAction$Outbound,
  QuarantineUserAction$outboundSchema,
} from "./quarantineuseraction.js";
import {
  UserCommunicationDisabledAction,
  UserCommunicationDisabledAction$inboundSchema,
  UserCommunicationDisabledAction$Outbound,
  UserCommunicationDisabledAction$outboundSchema,
} from "./usercommunicationdisabledaction.js";

export type MLSpamUpsertRequestActions =
  | BlockMessageAction
  | FlagToChannelAction
  | QuarantineUserAction
  | UserCommunicationDisabledAction;

export type MLSpamUpsertRequest = {
  name: string;
  eventType?: 1 | undefined;
  actions?:
    | Array<
      | BlockMessageAction
      | FlagToChannelAction
      | QuarantineUserAction
      | UserCommunicationDisabledAction
    >
    | null
    | undefined;
  enabled?: boolean | null | undefined;
  exemptRoles?: Array<string> | null | undefined;
  exemptChannels?: Array<string> | null | undefined;
  triggerType?: 1 | undefined;
  triggerMetadata?: MLSpamTriggerMetadata | null | undefined;
};

/** @internal */
export const MLSpamUpsertRequestActions$inboundSchema: z.ZodType<
  MLSpamUpsertRequestActions,
  z.ZodTypeDef,
  unknown
> = z.union([
  BlockMessageAction$inboundSchema,
  FlagToChannelAction$inboundSchema,
  QuarantineUserAction$inboundSchema,
  UserCommunicationDisabledAction$inboundSchema,
]);

/** @internal */
export type MLSpamUpsertRequestActions$Outbound =
  | BlockMessageAction$Outbound
  | FlagToChannelAction$Outbound
  | QuarantineUserAction$Outbound
  | UserCommunicationDisabledAction$Outbound;

/** @internal */
export const MLSpamUpsertRequestActions$outboundSchema: z.ZodType<
  MLSpamUpsertRequestActions$Outbound,
  z.ZodTypeDef,
  MLSpamUpsertRequestActions
> = z.union([
  BlockMessageAction$outboundSchema,
  FlagToChannelAction$outboundSchema,
  QuarantineUserAction$outboundSchema,
  UserCommunicationDisabledAction$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MLSpamUpsertRequestActions$ {
  /** @deprecated use `MLSpamUpsertRequestActions$inboundSchema` instead. */
  export const inboundSchema = MLSpamUpsertRequestActions$inboundSchema;
  /** @deprecated use `MLSpamUpsertRequestActions$outboundSchema` instead. */
  export const outboundSchema = MLSpamUpsertRequestActions$outboundSchema;
  /** @deprecated use `MLSpamUpsertRequestActions$Outbound` instead. */
  export type Outbound = MLSpamUpsertRequestActions$Outbound;
}

/** @internal */
export const MLSpamUpsertRequest$inboundSchema: z.ZodType<
  MLSpamUpsertRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  event_type: z.literal(1).optional(),
  actions: z.nullable(
    z.array(
      z.union([
        BlockMessageAction$inboundSchema,
        FlagToChannelAction$inboundSchema,
        QuarantineUserAction$inboundSchema,
        UserCommunicationDisabledAction$inboundSchema,
      ]),
    ),
  ).optional(),
  enabled: z.nullable(z.boolean()).optional(),
  exempt_roles: z.nullable(z.array(z.string())).optional(),
  exempt_channels: z.nullable(z.array(z.string())).optional(),
  trigger_type: z.literal(1).optional(),
  trigger_metadata: z.nullable(MLSpamTriggerMetadata$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "event_type": "eventType",
    "exempt_roles": "exemptRoles",
    "exempt_channels": "exemptChannels",
    "trigger_type": "triggerType",
    "trigger_metadata": "triggerMetadata",
  });
});

/** @internal */
export type MLSpamUpsertRequest$Outbound = {
  name: string;
  event_type: 1;
  actions?:
    | Array<
      | BlockMessageAction$Outbound
      | FlagToChannelAction$Outbound
      | QuarantineUserAction$Outbound
      | UserCommunicationDisabledAction$Outbound
    >
    | null
    | undefined;
  enabled?: boolean | null | undefined;
  exempt_roles?: Array<string> | null | undefined;
  exempt_channels?: Array<string> | null | undefined;
  trigger_type: 1;
  trigger_metadata?: MLSpamTriggerMetadata$Outbound | null | undefined;
};

/** @internal */
export const MLSpamUpsertRequest$outboundSchema: z.ZodType<
  MLSpamUpsertRequest$Outbound,
  z.ZodTypeDef,
  MLSpamUpsertRequest
> = z.object({
  name: z.string(),
  eventType: z.literal(1).default(1 as const),
  actions: z.nullable(
    z.array(
      z.union([
        BlockMessageAction$outboundSchema,
        FlagToChannelAction$outboundSchema,
        QuarantineUserAction$outboundSchema,
        UserCommunicationDisabledAction$outboundSchema,
      ]),
    ),
  ).optional(),
  enabled: z.nullable(z.boolean()).optional(),
  exemptRoles: z.nullable(z.array(z.string())).optional(),
  exemptChannels: z.nullable(z.array(z.string())).optional(),
  triggerType: z.literal(1).default(1 as const),
  triggerMetadata: z.nullable(MLSpamTriggerMetadata$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    eventType: "event_type",
    exemptRoles: "exempt_roles",
    exemptChannels: "exempt_channels",
    triggerType: "trigger_type",
    triggerMetadata: "trigger_metadata",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MLSpamUpsertRequest$ {
  /** @deprecated use `MLSpamUpsertRequest$inboundSchema` instead. */
  export const inboundSchema = MLSpamUpsertRequest$inboundSchema;
  /** @deprecated use `MLSpamUpsertRequest$outboundSchema` instead. */
  export const outboundSchema = MLSpamUpsertRequest$outboundSchema;
  /** @deprecated use `MLSpamUpsertRequest$Outbound` instead. */
  export type Outbound = MLSpamUpsertRequest$Outbound;
}