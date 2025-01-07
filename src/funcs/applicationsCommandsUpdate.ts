/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { DiscordCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
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
import { Result } from "../types/fp.js";

export async function applicationsCommandsUpdate(
  client: DiscordCore,
  security: operations.UpdateApplicationCommandSecurity,
  request: operations.UpdateApplicationCommandRequest,
  options?: RequestOptions,
): Promise<
  Result<
    components.ApplicationCommandResponse,
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
  const parsed = safeParse(
    request,
    (value) =>
      operations.UpdateApplicationCommandRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON(
    "body",
    payload.ApplicationCommandPatchRequestPartial,
    { explode: true },
  );

  const pathParams = {
    application_id: encodeSimple("application_id", payload.application_id, {
      explode: false,
      charEncoding: "percent",
    }),
    command_id: encodeSimple("command_id", payload.command_id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/applications/{application_id}/commands/{command_id}",
  )(pathParams);

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
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
    operationID: "update_application_command",
    oAuth2Scopes: ["applications.commands.update"],

    resolvedSecurity: requestSecurity,

    securitySource: security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "PATCH",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    components.ApplicationCommandResponse,
    | errors.ErrorResponse
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, components.ApplicationCommandResponse$inboundSchema),
    M.jsonErr("4XX", errors.ErrorResponse$inboundSchema),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
