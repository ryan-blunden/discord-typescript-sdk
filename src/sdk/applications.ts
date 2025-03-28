/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { applicationsBulkSetCommands } from "../funcs/applicationsBulkSetCommands.js";
import { applicationsConsumeEntitlement } from "../funcs/applicationsConsumeEntitlement.js";
import { applicationsCreateEntitlement } from "../funcs/applicationsCreateEntitlement.js";
import { applicationsCreateGuildCommand } from "../funcs/applicationsCreateGuildCommand.js";
import { applicationsDeleteCommand } from "../funcs/applicationsDeleteCommand.js";
import { applicationsDeleteEntitlement } from "../funcs/applicationsDeleteEntitlement.js";
import { applicationsDeleteUserRoleConnection } from "../funcs/applicationsDeleteUserRoleConnection.js";
import { applicationsGet } from "../funcs/applicationsGet.js";
import { applicationsGetActivityInstance } from "../funcs/applicationsGetActivityInstance.js";
import { applicationsGetCommand } from "../funcs/applicationsGetCommand.js";
import { applicationsGetEmoji } from "../funcs/applicationsGetEmoji.js";
import { applicationsGetEntitlement } from "../funcs/applicationsGetEntitlement.js";
import { applicationsGetEntitlements } from "../funcs/applicationsGetEntitlements.js";
import { applicationsGetMe } from "../funcs/applicationsGetMe.js";
import { applicationsGetRoleConnectionsMetadata } from "../funcs/applicationsGetRoleConnectionsMetadata.js";
import { applicationsListCommands } from "../funcs/applicationsListCommands.js";
import { applicationsListEmojis } from "../funcs/applicationsListEmojis.js";
import { applicationsSetGuildCommandPermissions } from "../funcs/applicationsSetGuildCommandPermissions.js";
import { applicationsUpdate } from "../funcs/applicationsUpdate.js";
import { applicationsUpdateEmoji } from "../funcs/applicationsUpdateEmoji.js";
import { applicationsUpdateRoleConnectionsMetadata } from "../funcs/applicationsUpdateRoleConnectionsMetadata.js";
import { applicationsUpdateSelf } from "../funcs/applicationsUpdateSelf.js";
import { applicationsUploadAttachment } from "../funcs/applicationsUploadAttachment.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Commands } from "./commands.js";
import { DiscordGuilds } from "./discordguilds.js";
import { Emojis } from "./emojis.js";

export class Applications extends ClientSDK {
  private _guilds?: DiscordGuilds;
  get guilds(): DiscordGuilds {
    return (this._guilds ??= new DiscordGuilds(this._options));
  }

  private _commands?: Commands;
  get commands(): Commands {
    return (this._commands ??= new Commands(this._options));
  }

  private _emojis?: Emojis;
  get emojis(): Emojis {
    return (this._emojis ??= new Emojis(this._options));
  }

  async getMe(
    options?: RequestOptions,
  ): Promise<components.PrivateApplicationResponse> {
    return unwrapAsync(applicationsGetMe(
      this,
      options,
    ));
  }

  async updateSelf(
    request: components.ApplicationFormPartial,
    options?: RequestOptions,
  ): Promise<components.PrivateApplicationResponse> {
    return unwrapAsync(applicationsUpdateSelf(
      this,
      request,
      options,
    ));
  }

  async setGuildCommandPermissions(
    security: operations.SetGuildApplicationCommandPermissionsSecurity,
    request: operations.SetGuildApplicationCommandPermissionsRequest,
    options?: RequestOptions,
  ): Promise<components.CommandPermissionsResponse> {
    return unwrapAsync(applicationsSetGuildCommandPermissions(
      this,
      security,
      request,
      options,
    ));
  }

  async deleteUserRoleConnection(
    request: operations.DeleteApplicationUserRoleConnectionRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(applicationsDeleteUserRoleConnection(
      this,
      request,
      options,
    ));
  }

  async getRoleConnectionsMetadata(
    request: operations.GetApplicationRoleConnectionsMetadataRequest,
    options?: RequestOptions,
  ): Promise<Array<components.ApplicationRoleConnectionsMetadataItemResponse>> {
    return unwrapAsync(applicationsGetRoleConnectionsMetadata(
      this,
      request,
      options,
    ));
  }

  async updateRoleConnectionsMetadata(
    request: operations.UpdateApplicationRoleConnectionsMetadataRequest,
    options?: RequestOptions,
  ): Promise<Array<components.ApplicationRoleConnectionsMetadataItemResponse>> {
    return unwrapAsync(applicationsUpdateRoleConnectionsMetadata(
      this,
      request,
      options,
    ));
  }

  async consumeEntitlement(
    security: operations.ConsumeEntitlementSecurity,
    request: operations.ConsumeEntitlementRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(applicationsConsumeEntitlement(
      this,
      security,
      request,
      options,
    ));
  }

  async createGuildCommand(
    security: operations.CreateGuildApplicationCommandSecurity,
    request: operations.CreateGuildApplicationCommandRequest,
    options?: RequestOptions,
  ): Promise<components.ApplicationCommandResponse> {
    return unwrapAsync(applicationsCreateGuildCommand(
      this,
      security,
      request,
      options,
    ));
  }

  async getActivityInstance(
    request: operations.ApplicationsGetActivityInstanceRequest,
    options?: RequestOptions,
  ): Promise<components.EmbeddedActivityInstance> {
    return unwrapAsync(applicationsGetActivityInstance(
      this,
      request,
      options,
    ));
  }

  async getEntitlement(
    security: operations.GetEntitlementSecurity,
    request: operations.GetEntitlementRequest,
    options?: RequestOptions,
  ): Promise<components.EntitlementResponse> {
    return unwrapAsync(applicationsGetEntitlement(
      this,
      security,
      request,
      options,
    ));
  }

  async deleteEntitlement(
    security: operations.DeleteEntitlementSecurity,
    request: operations.DeleteEntitlementRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(applicationsDeleteEntitlement(
      this,
      security,
      request,
      options,
    ));
  }

  async getEntitlements(
    security: operations.GetEntitlementsSecurity,
    request: operations.GetEntitlementsRequest,
    options?: RequestOptions,
  ): Promise<Array<components.EntitlementResponse | null>> {
    return unwrapAsync(applicationsGetEntitlements(
      this,
      security,
      request,
      options,
    ));
  }

  async createEntitlement(
    request: operations.CreateEntitlementRequest,
    options?: RequestOptions,
  ): Promise<components.EntitlementResponse> {
    return unwrapAsync(applicationsCreateEntitlement(
      this,
      request,
      options,
    ));
  }

  async uploadAttachment(
    security: operations.UploadApplicationAttachmentSecurity,
    request: operations.UploadApplicationAttachmentRequest,
    options?: RequestOptions,
  ): Promise<components.ActivitiesAttachmentResponse> {
    return unwrapAsync(applicationsUploadAttachment(
      this,
      security,
      request,
      options,
    ));
  }

  async getCommand(
    security: operations.GetApplicationCommandSecurity,
    request: operations.GetApplicationCommandRequest,
    options?: RequestOptions,
  ): Promise<components.ApplicationCommandResponse> {
    return unwrapAsync(applicationsGetCommand(
      this,
      security,
      request,
      options,
    ));
  }

  async deleteCommand(
    security: operations.DeleteApplicationCommandSecurity,
    request: operations.DeleteApplicationCommandRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(applicationsDeleteCommand(
      this,
      security,
      request,
      options,
    ));
  }

  async listCommands(
    security: operations.ListApplicationCommandsSecurity,
    request: operations.ListApplicationCommandsRequest,
    options?: RequestOptions,
  ): Promise<Array<components.ApplicationCommandResponse>> {
    return unwrapAsync(applicationsListCommands(
      this,
      security,
      request,
      options,
    ));
  }

  async bulkSetCommands(
    security: operations.BulkSetApplicationCommandsSecurity,
    request: operations.BulkSetApplicationCommandsRequest,
    options?: RequestOptions,
  ): Promise<Array<components.ApplicationCommandResponse>> {
    return unwrapAsync(applicationsBulkSetCommands(
      this,
      security,
      request,
      options,
    ));
  }

  async getEmoji(
    request: operations.GetApplicationEmojiRequest,
    options?: RequestOptions,
  ): Promise<components.EmojiResponse> {
    return unwrapAsync(applicationsGetEmoji(
      this,
      request,
      options,
    ));
  }

  async updateEmoji(
    request: operations.UpdateApplicationEmojiRequest,
    options?: RequestOptions,
  ): Promise<components.EmojiResponse> {
    return unwrapAsync(applicationsUpdateEmoji(
      this,
      request,
      options,
    ));
  }

  async listEmojis(
    request: operations.ListApplicationEmojisRequest,
    options?: RequestOptions,
  ): Promise<components.ListApplicationEmojisResponse> {
    return unwrapAsync(applicationsListEmojis(
      this,
      request,
      options,
    ));
  }

  async get(
    request: operations.GetApplicationRequest,
    options?: RequestOptions,
  ): Promise<components.PrivateApplicationResponse> {
    return unwrapAsync(applicationsGet(
      this,
      request,
      options,
    ));
  }

  async update(
    request: operations.UpdateApplicationRequest,
    options?: RequestOptions,
  ): Promise<components.PrivateApplicationResponse> {
    return unwrapAsync(applicationsUpdate(
      this,
      request,
      options,
    ));
  }
}
