/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { invitesResolve } from "../funcs/invitesResolve.js";
import { invitesRevoke } from "../funcs/invitesRevoke.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Invites extends ClientSDK {
  async resolve(
    request: operations.InviteResolveRequest,
    security?: operations.InviteResolveSecurity | undefined,
    options?: RequestOptions,
  ): Promise<operations.InviteResolveResponseBody> {
    return unwrapAsync(invitesResolve(
      this,
      request,
      security,
      options,
    ));
  }

  async revoke(
    request: operations.InviteRevokeRequest,
    options?: RequestOptions,
  ): Promise<operations.InviteRevokeResponseBody> {
    return unwrapAsync(invitesRevoke(
      this,
      request,
      options,
    ));
  }
}