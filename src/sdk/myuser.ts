/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { myUserUpdate } from "../funcs/myUserUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class MyUser extends ClientSDK {
  async update(
    request: components.BotAccountPatchRequest,
    options?: RequestOptions,
  ): Promise<components.UserPIIResponse> {
    return unwrapAsync(myUserUpdate(
      this,
      request,
      options,
    ));
  }
}
