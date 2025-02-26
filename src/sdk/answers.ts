/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { answersGetVoters } from "../funcs/answersGetVoters.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Answers extends ClientSDK {
  async getVoters(
    request: operations.GetAnswerVotersRequest,
    options?: RequestOptions,
  ): Promise<components.PollAnswerDetailsResponse> {
    return unwrapAsync(answersGetVoters(
      this,
      request,
      options,
    ));
  }
}
