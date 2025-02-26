/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { DiscordCore } from "../core.js";
import { appendForm, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { resolveSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

export function applicationsUploadAttachment(
  client: DiscordCore,
  security: operations.UploadApplicationAttachmentSecurity,
  request: operations.UploadApplicationAttachmentRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    components.ActivitiesAttachmentResponse,
    | errors.ErrorResponse
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    security,
    request,
    options,
  ));
}

async function $do(
  client: DiscordCore,
  security: operations.UploadApplicationAttachmentSecurity,
  request: operations.UploadApplicationAttachmentRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      components.ActivitiesAttachmentResponse,
      | errors.ErrorResponse
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.UploadApplicationAttachmentRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = new FormData();

  appendForm(body, "file", payload.RequestBody.file);

  const pathParams = {
    application_id: encodeSimple("application_id", payload.application_id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/applications/{application_id}/attachment")(
    pathParams,
  );

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const requestSecurity = resolveSecurity(
    [
      {
        fieldName: "Authorization",
        type: "apiKey:header",
        value: security?.botToken,
      },
    ],
  );

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "upload_application_attachment",
    oAuth2Scopes: [
      "activities.invites.write",
      "activities.read",
      "activities.write",
      "applications.builds.read",
      "applications.builds.upload",
      "applications.commands",
      "applications.commands.permissions.update",
      "applications.commands.update",
      "applications.entitlements",
      "applications.store.update",
      "bot",
      "connections",
      "dm_channels.read",
      "email",
      "gdm.join",
      "guilds",
      "guilds.join",
      "guilds.members.read",
      "identify",
      "messages.read",
      "openid",
      "relationships.read",
      "role_connections.write",
      "rpc",
      "rpc.activities.write",
      "rpc.notifications.read",
      "rpc.screenshare.read",
      "rpc.screenshare.write",
      "rpc.video.read",
      "rpc.video.write",
      "rpc.voice.read",
      "rpc.voice.write",
      "voice",
      "webhook.incoming",
    ],

    resolvedSecurity: requestSecurity,

    securitySource: security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    components.ActivitiesAttachmentResponse,
    | errors.ErrorResponse
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, components.ActivitiesAttachmentResponse$inboundSchema),
    M.jsonErr("4XX", errors.ErrorResponse$inboundSchema),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
