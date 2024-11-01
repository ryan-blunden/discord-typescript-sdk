/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  RoleSelectDefaultValue,
  RoleSelectDefaultValue$inboundSchema,
  RoleSelectDefaultValue$Outbound,
  RoleSelectDefaultValue$outboundSchema,
} from "./roleselectdefaultvalue.js";
import {
  UserSelectDefaultValue,
  UserSelectDefaultValue$inboundSchema,
  UserSelectDefaultValue$Outbound,
  UserSelectDefaultValue$outboundSchema,
} from "./userselectdefaultvalue.js";

export type MentionableSelectDefaultValues =
  | RoleSelectDefaultValue
  | UserSelectDefaultValue;

export type MentionableSelect = {
  type?: 1 | undefined;
  customId: string;
  placeholder?: string | null | undefined;
  minValues?: number | null | undefined;
  maxValues?: number | null | undefined;
  disabled?: boolean | null | undefined;
  defaultValues?:
    | Array<RoleSelectDefaultValue | UserSelectDefaultValue>
    | null
    | undefined;
};

/** @internal */
export const MentionableSelectDefaultValues$inboundSchema: z.ZodType<
  MentionableSelectDefaultValues,
  z.ZodTypeDef,
  unknown
> = z.union([
  RoleSelectDefaultValue$inboundSchema,
  UserSelectDefaultValue$inboundSchema,
]);

/** @internal */
export type MentionableSelectDefaultValues$Outbound =
  | RoleSelectDefaultValue$Outbound
  | UserSelectDefaultValue$Outbound;

/** @internal */
export const MentionableSelectDefaultValues$outboundSchema: z.ZodType<
  MentionableSelectDefaultValues$Outbound,
  z.ZodTypeDef,
  MentionableSelectDefaultValues
> = z.union([
  RoleSelectDefaultValue$outboundSchema,
  UserSelectDefaultValue$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MentionableSelectDefaultValues$ {
  /** @deprecated use `MentionableSelectDefaultValues$inboundSchema` instead. */
  export const inboundSchema = MentionableSelectDefaultValues$inboundSchema;
  /** @deprecated use `MentionableSelectDefaultValues$outboundSchema` instead. */
  export const outboundSchema = MentionableSelectDefaultValues$outboundSchema;
  /** @deprecated use `MentionableSelectDefaultValues$Outbound` instead. */
  export type Outbound = MentionableSelectDefaultValues$Outbound;
}

/** @internal */
export const MentionableSelect$inboundSchema: z.ZodType<
  MentionableSelect,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(1).optional(),
  custom_id: z.string(),
  placeholder: z.nullable(z.string()).optional(),
  min_values: z.nullable(z.number().int()).optional(),
  max_values: z.nullable(z.number().int()).optional(),
  disabled: z.nullable(z.boolean()).optional(),
  default_values: z.nullable(
    z.array(
      z.union([
        RoleSelectDefaultValue$inboundSchema,
        UserSelectDefaultValue$inboundSchema,
      ]),
    ),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "custom_id": "customId",
    "min_values": "minValues",
    "max_values": "maxValues",
    "default_values": "defaultValues",
  });
});

/** @internal */
export type MentionableSelect$Outbound = {
  type: 1;
  custom_id: string;
  placeholder?: string | null | undefined;
  min_values?: number | null | undefined;
  max_values?: number | null | undefined;
  disabled?: boolean | null | undefined;
  default_values?:
    | Array<RoleSelectDefaultValue$Outbound | UserSelectDefaultValue$Outbound>
    | null
    | undefined;
};

/** @internal */
export const MentionableSelect$outboundSchema: z.ZodType<
  MentionableSelect$Outbound,
  z.ZodTypeDef,
  MentionableSelect
> = z.object({
  type: z.literal(1).default(1 as const),
  customId: z.string(),
  placeholder: z.nullable(z.string()).optional(),
  minValues: z.nullable(z.number().int()).optional(),
  maxValues: z.nullable(z.number().int()).optional(),
  disabled: z.nullable(z.boolean()).optional(),
  defaultValues: z.nullable(
    z.array(
      z.union([
        RoleSelectDefaultValue$outboundSchema,
        UserSelectDefaultValue$outboundSchema,
      ]),
    ),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    customId: "custom_id",
    minValues: "min_values",
    maxValues: "max_values",
    defaultValues: "default_values",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MentionableSelect$ {
  /** @deprecated use `MentionableSelect$inboundSchema` instead. */
  export const inboundSchema = MentionableSelect$inboundSchema;
  /** @deprecated use `MentionableSelect$outboundSchema` instead. */
  export const outboundSchema = MentionableSelect$outboundSchema;
  /** @deprecated use `MentionableSelect$Outbound` instead. */
  export type Outbound = MentionableSelect$Outbound;
}
