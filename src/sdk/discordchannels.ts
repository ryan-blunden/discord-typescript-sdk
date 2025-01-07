/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildsChannelsBulkUpdate } from "../funcs/guildsChannelsBulkUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class DiscordChannels extends ClientSDK {
  async bulkUpdate(
    request: operations.BulkUpdateGuildChannelsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(guildsChannelsBulkUpdate(
      this,
      request,
      options,
    ));
  }
}
