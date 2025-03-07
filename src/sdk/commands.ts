/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { applicationsCommandsUpdate } from "../funcs/applicationsCommandsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Commands extends ClientSDK {
  async update(
    security: operations.UpdateApplicationCommandSecurity,
    request: operations.UpdateApplicationCommandRequest,
    options?: RequestOptions,
  ): Promise<components.ApplicationCommandResponse> {
    return unwrapAsync(applicationsCommandsUpdate(
      this,
      security,
      request,
      options,
    ));
  }
}
