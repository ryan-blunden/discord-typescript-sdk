/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { DiscordCore } from "../core.js";
import { encodeFormQuery, encodeJSON, encodeSimple } from "../lib/encodings.js";
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

export function webhooksUpdateMessageJson(
  client: DiscordCore,
  request: operations.UpdateWebhookMessageJsonRequest,
  security?: operations.UpdateWebhookMessageJsonSecurity | undefined,
  options?: RequestOptions,
): APIPromise<
  Result<
    components.MessageResponse,
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
    request,
    security,
    options,
  ));
}

async function $do(
  client: DiscordCore,
  request: operations.UpdateWebhookMessageJsonRequest,
  security?: operations.UpdateWebhookMessageJsonSecurity | undefined,
  options?: RequestOptions,
): Promise<
  [
    Result<
      components.MessageResponse,
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
      operations.UpdateWebhookMessageJsonRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.IncomingWebhookUpdateRequestPartial, {
    explode: true,
  });

  const pathParams = {
    message_id: encodeSimple("message_id", payload.message_id, {
      explode: false,
      charEncoding: "percent",
    }),
    webhook_id: encodeSimple("webhook_id", payload.webhook_id, {
      explode: false,
      charEncoding: "percent",
    }),
    webhook_token: encodeSimple("webhook_token", payload.webhook_token, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/webhooks/{webhook_id}/{webhook_token}/messages/{message_id}",
  )(pathParams);

  const query = encodeFormQuery({
    "thread_id": payload.thread_id,
    "with_components": payload.with_components,
  });

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
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "update_webhook_message_json",
    oAuth2Scopes: [],

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
    query: query,
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
    components.MessageResponse,
    | errors.ErrorResponse
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, components.MessageResponse$inboundSchema),
    M.jsonErr("4XX", errors.ErrorResponse$inboundSchema),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
