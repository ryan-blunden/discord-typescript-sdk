/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SoundboardPatchRequestPartial = {
  name?: string | undefined;
  volume?: number | null | undefined;
  emojiId?: string | null | undefined;
  emojiName?: string | null | undefined;
};

/** @internal */
export const SoundboardPatchRequestPartial$inboundSchema: z.ZodType<
  SoundboardPatchRequestPartial,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  volume: z.nullable(z.number()).optional(),
  emoji_id: z.nullable(z.string()).optional(),
  emoji_name: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "emoji_id": "emojiId",
    "emoji_name": "emojiName",
  });
});

/** @internal */
export type SoundboardPatchRequestPartial$Outbound = {
  name?: string | undefined;
  volume?: number | null | undefined;
  emoji_id?: string | null | undefined;
  emoji_name?: string | null | undefined;
};

/** @internal */
export const SoundboardPatchRequestPartial$outboundSchema: z.ZodType<
  SoundboardPatchRequestPartial$Outbound,
  z.ZodTypeDef,
  SoundboardPatchRequestPartial
> = z.object({
  name: z.string().optional(),
  volume: z.nullable(z.number()).optional(),
  emojiId: z.nullable(z.string()).optional(),
  emojiName: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    emojiId: "emoji_id",
    emojiName: "emoji_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SoundboardPatchRequestPartial$ {
  /** @deprecated use `SoundboardPatchRequestPartial$inboundSchema` instead. */
  export const inboundSchema = SoundboardPatchRequestPartial$inboundSchema;
  /** @deprecated use `SoundboardPatchRequestPartial$outboundSchema` instead. */
  export const outboundSchema = SoundboardPatchRequestPartial$outboundSchema;
  /** @deprecated use `SoundboardPatchRequestPartial$Outbound` instead. */
  export type Outbound = SoundboardPatchRequestPartial$Outbound;
}

export function soundboardPatchRequestPartialToJSON(
  soundboardPatchRequestPartial: SoundboardPatchRequestPartial,
): string {
  return JSON.stringify(
    SoundboardPatchRequestPartial$outboundSchema.parse(
      soundboardPatchRequestPartial,
    ),
  );
}

export function soundboardPatchRequestPartialFromJSON(
  jsonString: string,
): SafeParseResult<SoundboardPatchRequestPartial, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SoundboardPatchRequestPartial$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SoundboardPatchRequestPartial' from JSON`,
  );
}
