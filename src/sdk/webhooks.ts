/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { webhooksDelete } from "../funcs/webhooksDelete.js";
import { webhooksDeleteByToken } from "../funcs/webhooksDeleteByToken.js";
import { webhooksExecuteSlackWebhook } from "../funcs/webhooksExecuteSlackWebhook.js";
import { webhooksGet } from "../funcs/webhooksGet.js";
import { webhooksGetByToken } from "../funcs/webhooksGetByToken.js";
import { webhooksGetMessage } from "../funcs/webhooksGetMessage.js";
import { webhooksGetOriginalMessage } from "../funcs/webhooksGetOriginalMessage.js";
import { webhooksUpdate } from "../funcs/webhooksUpdate.js";
import { webhooksUpdateByToken } from "../funcs/webhooksUpdateByToken.js";
import { webhooksUpdateOriginalMessageForm } from "../funcs/webhooksUpdateOriginalMessageForm.js";
import { webhooksUpdateOriginalMessageJson } from "../funcs/webhooksUpdateOriginalMessageJson.js";
import { webhooksUpdateOriginalMessageMultipart } from "../funcs/webhooksUpdateOriginalMessageMultipart.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { DiscordMessages } from "./discordmessages.js";
import { Github } from "./github.js";

export class Webhooks extends ClientSDK {
  private _messages?: DiscordMessages;
  get messages(): DiscordMessages {
    return (this._messages ??= new DiscordMessages(this._options));
  }

  private _github?: Github;
  get github(): Github {
    return (this._github ??= new Github(this._options));
  }

  async getOriginalMessage(
    request: operations.GetOriginalWebhookMessageRequest,
    security?: operations.GetOriginalWebhookMessageSecurity | undefined,
    options?: RequestOptions,
  ): Promise<components.MessageResponse> {
    return unwrapAsync(webhooksGetOriginalMessage(
      this,
      request,
      security,
      options,
    ));
  }

  async updateOriginalMessageForm(
    request: operations.UpdateOriginalWebhookMessageFormRequest,
    security?: operations.UpdateOriginalWebhookMessageFormSecurity | undefined,
    options?: RequestOptions,
  ): Promise<components.MessageResponse> {
    return unwrapAsync(webhooksUpdateOriginalMessageForm(
      this,
      request,
      security,
      options,
    ));
  }

  async updateOriginalMessageMultipart(
    request: operations.UpdateOriginalWebhookMessageMultipartRequest,
    security?:
      | operations.UpdateOriginalWebhookMessageMultipartSecurity
      | undefined,
    options?: RequestOptions,
  ): Promise<components.MessageResponse> {
    return unwrapAsync(webhooksUpdateOriginalMessageMultipart(
      this,
      request,
      security,
      options,
    ));
  }

  async updateOriginalMessageJson(
    request: operations.UpdateOriginalWebhookMessageJsonRequest,
    security?: operations.UpdateOriginalWebhookMessageJsonSecurity | undefined,
    options?: RequestOptions,
  ): Promise<components.MessageResponse> {
    return unwrapAsync(webhooksUpdateOriginalMessageJson(
      this,
      request,
      security,
      options,
    ));
  }

  async getMessage(
    request: operations.GetWebhookMessageRequest,
    security?: operations.GetWebhookMessageSecurity | undefined,
    options?: RequestOptions,
  ): Promise<components.MessageResponse> {
    return unwrapAsync(webhooksGetMessage(
      this,
      request,
      security,
      options,
    ));
  }

  async executeSlackWebhook(
    request: operations.ExecuteSlackCompatibleWebhookRequest,
    security?: operations.ExecuteSlackCompatibleWebhookSecurity | undefined,
    options?: RequestOptions,
  ): Promise<string> {
    return unwrapAsync(webhooksExecuteSlackWebhook(
      this,
      request,
      security,
      options,
    ));
  }

  async getByToken(
    request: operations.GetWebhookByTokenRequest,
    security?: operations.GetWebhookByTokenSecurity | undefined,
    options?: RequestOptions,
  ): Promise<operations.GetWebhookByTokenResponseBody> {
    return unwrapAsync(webhooksGetByToken(
      this,
      request,
      security,
      options,
    ));
  }

  async deleteByToken(
    request: operations.DeleteWebhookByTokenRequest,
    security?: operations.DeleteWebhookByTokenSecurity | undefined,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(webhooksDeleteByToken(
      this,
      request,
      security,
      options,
    ));
  }

  async updateByToken(
    request: operations.UpdateWebhookByTokenRequest,
    security?: operations.UpdateWebhookByTokenSecurity | undefined,
    options?: RequestOptions,
  ): Promise<operations.UpdateWebhookByTokenResponseBody> {
    return unwrapAsync(webhooksUpdateByToken(
      this,
      request,
      security,
      options,
    ));
  }

  async get(
    request: operations.GetWebhookRequest,
    options?: RequestOptions,
  ): Promise<operations.GetWebhookResponseBody> {
    return unwrapAsync(webhooksGet(
      this,
      request,
      options,
    ));
  }

  async delete(
    request: operations.DeleteWebhookRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(webhooksDelete(
      this,
      request,
      options,
    ));
  }

  async update(
    request: operations.UpdateWebhookRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateWebhookResponseBody> {
    return unwrapAsync(webhooksUpdate(
      this,
      request,
      options,
    ));
  }
}
