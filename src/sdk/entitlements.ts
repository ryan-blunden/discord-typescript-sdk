/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { entitlementsCreate } from "../funcs/entitlementsCreate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Entitlements extends ClientSDK {
  async create(
    request: operations.CreateEntitlementRequest,
    options?: RequestOptions,
  ): Promise<components.EntitlementResponse> {
    return unwrapAsync(entitlementsCreate(
      this,
      request,
      options,
    ));
  }
}
