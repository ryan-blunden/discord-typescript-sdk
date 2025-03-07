/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteGuildStickerRequest = {
  guildId: string;
  stickerId: string;
};

/** @internal */
export const DeleteGuildStickerRequest$inboundSchema: z.ZodType<
  DeleteGuildStickerRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  sticker_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "sticker_id": "stickerId",
  });
});

/** @internal */
export type DeleteGuildStickerRequest$Outbound = {
  guild_id: string;
  sticker_id: string;
};

/** @internal */
export const DeleteGuildStickerRequest$outboundSchema: z.ZodType<
  DeleteGuildStickerRequest$Outbound,
  z.ZodTypeDef,
  DeleteGuildStickerRequest
> = z.object({
  guildId: z.string(),
  stickerId: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    stickerId: "sticker_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteGuildStickerRequest$ {
  /** @deprecated use `DeleteGuildStickerRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteGuildStickerRequest$inboundSchema;
  /** @deprecated use `DeleteGuildStickerRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteGuildStickerRequest$outboundSchema;
  /** @deprecated use `DeleteGuildStickerRequest$Outbound` instead. */
  export type Outbound = DeleteGuildStickerRequest$Outbound;
}

export function deleteGuildStickerRequestToJSON(
  deleteGuildStickerRequest: DeleteGuildStickerRequest,
): string {
  return JSON.stringify(
    DeleteGuildStickerRequest$outboundSchema.parse(deleteGuildStickerRequest),
  );
}

export function deleteGuildStickerRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteGuildStickerRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteGuildStickerRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteGuildStickerRequest' from JSON`,
  );
}
