/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { scheduledEventsCreate } from "../funcs/scheduledEventsCreate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ScheduledEvents extends ClientSDK {
  async create(
    request: operations.CreateGuildScheduledEventRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateGuildScheduledEventResponseBody> {
    return unwrapAsync(scheduledEventsCreate(
      this,
      request,
      options,
    ));
  }
}