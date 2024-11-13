/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { webhooksMessagesDelete } from "../funcs/webhooksMessagesDelete.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class DiscordWebhooksMessages extends ClientSDK {
  async delete(
    request: operations.DeleteWebhookMessageRequest,
    security?: operations.DeleteWebhookMessageSecurity | undefined,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(webhooksMessagesDelete(
      this,
      request,
      security,
      options,
    ));
  }
}