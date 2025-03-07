/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
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
  MentionSpamTriggerMetadata,
  MentionSpamTriggerMetadata$inboundSchema,
  MentionSpamTriggerMetadata$Outbound,
  MentionSpamTriggerMetadata$outboundSchema,
} from "./mentionspamtriggermetadata.js";
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

export type MentionSpamUpsertRequestPartialActions =
  | BlockMessageAction
  | FlagToChannelAction
  | QuarantineUserAction
  | UserCommunicationDisabledAction;

export type MentionSpamUpsertRequestPartial = {
  name?: string | undefined;
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
  triggerMetadata?: MentionSpamTriggerMetadata | null | undefined;
};

/** @internal */
export const MentionSpamUpsertRequestPartialActions$inboundSchema: z.ZodType<
  MentionSpamUpsertRequestPartialActions,
  z.ZodTypeDef,
  unknown
> = z.union([
  BlockMessageAction$inboundSchema,
  FlagToChannelAction$inboundSchema,
  QuarantineUserAction$inboundSchema,
  UserCommunicationDisabledAction$inboundSchema,
]);

/** @internal */
export type MentionSpamUpsertRequestPartialActions$Outbound =
  | BlockMessageAction$Outbound
  | FlagToChannelAction$Outbound
  | QuarantineUserAction$Outbound
  | UserCommunicationDisabledAction$Outbound;

/** @internal */
export const MentionSpamUpsertRequestPartialActions$outboundSchema: z.ZodType<
  MentionSpamUpsertRequestPartialActions$Outbound,
  z.ZodTypeDef,
  MentionSpamUpsertRequestPartialActions
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
export namespace MentionSpamUpsertRequestPartialActions$ {
  /** @deprecated use `MentionSpamUpsertRequestPartialActions$inboundSchema` instead. */
  export const inboundSchema =
    MentionSpamUpsertRequestPartialActions$inboundSchema;
  /** @deprecated use `MentionSpamUpsertRequestPartialActions$outboundSchema` instead. */
  export const outboundSchema =
    MentionSpamUpsertRequestPartialActions$outboundSchema;
  /** @deprecated use `MentionSpamUpsertRequestPartialActions$Outbound` instead. */
  export type Outbound = MentionSpamUpsertRequestPartialActions$Outbound;
}

export function mentionSpamUpsertRequestPartialActionsToJSON(
  mentionSpamUpsertRequestPartialActions:
    MentionSpamUpsertRequestPartialActions,
): string {
  return JSON.stringify(
    MentionSpamUpsertRequestPartialActions$outboundSchema.parse(
      mentionSpamUpsertRequestPartialActions,
    ),
  );
}

export function mentionSpamUpsertRequestPartialActionsFromJSON(
  jsonString: string,
): SafeParseResult<MentionSpamUpsertRequestPartialActions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      MentionSpamUpsertRequestPartialActions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MentionSpamUpsertRequestPartialActions' from JSON`,
  );
}

/** @internal */
export const MentionSpamUpsertRequestPartial$inboundSchema: z.ZodType<
  MentionSpamUpsertRequestPartial,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
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
  trigger_metadata: z.nullable(MentionSpamTriggerMetadata$inboundSchema)
    .optional(),
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
export type MentionSpamUpsertRequestPartial$Outbound = {
  name?: string | undefined;
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
  trigger_metadata?: MentionSpamTriggerMetadata$Outbound | null | undefined;
};

/** @internal */
export const MentionSpamUpsertRequestPartial$outboundSchema: z.ZodType<
  MentionSpamUpsertRequestPartial$Outbound,
  z.ZodTypeDef,
  MentionSpamUpsertRequestPartial
> = z.object({
  name: z.string().optional(),
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
  triggerMetadata: z.nullable(MentionSpamTriggerMetadata$outboundSchema)
    .optional(),
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
export namespace MentionSpamUpsertRequestPartial$ {
  /** @deprecated use `MentionSpamUpsertRequestPartial$inboundSchema` instead. */
  export const inboundSchema = MentionSpamUpsertRequestPartial$inboundSchema;
  /** @deprecated use `MentionSpamUpsertRequestPartial$outboundSchema` instead. */
  export const outboundSchema = MentionSpamUpsertRequestPartial$outboundSchema;
  /** @deprecated use `MentionSpamUpsertRequestPartial$Outbound` instead. */
  export type Outbound = MentionSpamUpsertRequestPartial$Outbound;
}

export function mentionSpamUpsertRequestPartialToJSON(
  mentionSpamUpsertRequestPartial: MentionSpamUpsertRequestPartial,
): string {
  return JSON.stringify(
    MentionSpamUpsertRequestPartial$outboundSchema.parse(
      mentionSpamUpsertRequestPartial,
    ),
  );
}

export function mentionSpamUpsertRequestPartialFromJSON(
  jsonString: string,
): SafeParseResult<MentionSpamUpsertRequestPartial, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MentionSpamUpsertRequestPartial$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MentionSpamUpsertRequestPartial' from JSON`,
  );
}
