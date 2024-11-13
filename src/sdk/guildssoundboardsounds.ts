/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildsSoundboardSoundsList } from "../funcs/guildsSoundboardSoundsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class GuildsSoundboardSounds extends ClientSDK {
  async list(
    request: operations.ListGuildSoundboardSoundsRequest,
    options?: RequestOptions,
  ): Promise<components.ListGuildSoundboardSoundsResponse> {
    return unwrapAsync(guildsSoundboardSoundsList(
      this,
      request,
      options,
    ));
  }
}