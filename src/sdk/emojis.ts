/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { applicationsEmojisGet } from "../funcs/applicationsEmojisGet.js";
import { applicationsEmojisList } from "../funcs/applicationsEmojisList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Emojis extends ClientSDK {
  async get(
    request: operations.GetApplicationEmojiRequest,
    options?: RequestOptions,
  ): Promise<components.EmojiResponse> {
    return unwrapAsync(applicationsEmojisGet(
      this,
      request,
      options,
    ));
  }

  async list(
    request: operations.ListApplicationEmojisRequest,
    options?: RequestOptions,
  ): Promise<components.ListApplicationEmojisResponse> {
    return unwrapAsync(applicationsEmojisList(
      this,
      request,
      options,
    ));
  }
}
