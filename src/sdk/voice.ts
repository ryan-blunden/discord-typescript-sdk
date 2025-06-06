/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { voiceGetCurrentUserState } from "../funcs/voiceGetCurrentUserState.js";
import { voiceGetUserState } from "../funcs/voiceGetUserState.js";
import { voiceListRegions } from "../funcs/voiceListRegions.js";
import { voiceUpdateCurrentUserState } from "../funcs/voiceUpdateCurrentUserState.js";
import { voiceUpdateUserState } from "../funcs/voiceUpdateUserState.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Voice extends ClientSDK {
  /**
   * Returns the current user's voice state in the guild.
   */
  async getCurrentUserState(
    request: operations.GetSelfVoiceStateRequest,
    options?: RequestOptions,
  ): Promise<components.VoiceStateResponse> {
    return unwrapAsync(voiceGetCurrentUserState(
      this,
      request,
      options,
    ));
  }

  /**
   * Updates the current user's voice state. Returns 204 No Content on success. Fires a Voice State Update Gateway event.
   */
  async updateCurrentUserState(
    request: operations.UpdateSelfVoiceStateRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(voiceUpdateCurrentUserState(
      this,
      request,
      options,
    ));
  }

  /**
   * Returns the specified user's voice state in the guild.
   */
  async getUserState(
    request: operations.GetVoiceStateRequest,
    options?: RequestOptions,
  ): Promise<components.VoiceStateResponse> {
    return unwrapAsync(voiceGetUserState(
      this,
      request,
      options,
    ));
  }

  /**
   * Updates another user's voice state. Fires a Voice State Update Gateway event.
   */
  async updateUserState(
    request: operations.UpdateVoiceStateRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(voiceUpdateUserState(
      this,
      request,
      options,
    ));
  }

  /**
   * Returns an array of voice region objects that can be used when setting a voice or stage channel's rtc_region.
   */
  async listRegions(
    options?: RequestOptions,
  ): Promise<Array<components.VoiceRegionResponse>> {
    return unwrapAsync(voiceListRegions(
      this,
      options,
    ));
  }
}
