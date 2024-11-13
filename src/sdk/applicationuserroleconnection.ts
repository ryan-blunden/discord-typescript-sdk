/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { applicationUserRoleConnectionUpdate } from "../funcs/applicationUserRoleConnectionUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ApplicationUserRoleConnection extends ClientSDK {
  async update(
    request: operations.UpdateApplicationUserRoleConnectionRequest,
    options?: RequestOptions,
  ): Promise<components.ApplicationUserRoleConnectionResponse> {
    return unwrapAsync(applicationUserRoleConnectionUpdate(
      this,
      request,
      options,
    ));
  }
}