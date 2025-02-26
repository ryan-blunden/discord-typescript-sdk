/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { DiscordCore } from "../core.js";
import { appendForm, encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
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

export function channelsMessagesUpdateMultipart(
  client: DiscordCore,
  request: operations.UpdateMessageMultipartRequest,
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
    options,
  ));
}

async function $do(
  client: DiscordCore,
  request: operations.UpdateMessageMultipartRequest,
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
      operations.UpdateMessageMultipartRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = new FormData();

  if (payload.RequestBody.allowed_mentions !== undefined) {
    appendForm(
      body,
      "allowed_mentions",
      encodeJSON("allowed_mentions", payload.RequestBody.allowed_mentions, {
        explode: true,
      }),
    );
  }
  if (payload.RequestBody.attachments !== undefined) {
    appendForm(
      body,
      "attachments",
      encodeJSON("attachments", payload.RequestBody.attachments, {
        explode: true,
      }),
    );
  }
  if (payload.RequestBody.components !== undefined) {
    appendForm(
      body,
      "components",
      encodeJSON("components", payload.RequestBody.components, {
        explode: true,
      }),
    );
  }
  if (payload.RequestBody.content !== undefined) {
    appendForm(body, "content", payload.RequestBody.content);
  }
  if (payload.RequestBody.embeds !== undefined) {
    appendForm(
      body,
      "embeds",
      encodeJSON("embeds", payload.RequestBody.embeds, { explode: true }),
    );
  }
  if (payload.RequestBody["files[0]"] !== undefined) {
    appendForm(body, "files[0]", payload.RequestBody["files[0]"]);
  }
  if (payload.RequestBody["files[1]"] !== undefined) {
    appendForm(body, "files[1]", payload.RequestBody["files[1]"]);
  }
  if (payload.RequestBody["files[2]"] !== undefined) {
    appendForm(body, "files[2]", payload.RequestBody["files[2]"]);
  }
  if (payload.RequestBody["files[3]"] !== undefined) {
    appendForm(body, "files[3]", payload.RequestBody["files[3]"]);
  }
  if (payload.RequestBody["files[4]"] !== undefined) {
    appendForm(body, "files[4]", payload.RequestBody["files[4]"]);
  }
  if (payload.RequestBody["files[5]"] !== undefined) {
    appendForm(body, "files[5]", payload.RequestBody["files[5]"]);
  }
  if (payload.RequestBody["files[6]"] !== undefined) {
    appendForm(body, "files[6]", payload.RequestBody["files[6]"]);
  }
  if (payload.RequestBody["files[7]"] !== undefined) {
    appendForm(body, "files[7]", payload.RequestBody["files[7]"]);
  }
  if (payload.RequestBody["files[8]"] !== undefined) {
    appendForm(body, "files[8]", payload.RequestBody["files[8]"]);
  }
  if (payload.RequestBody["files[9]"] !== undefined) {
    appendForm(body, "files[9]", payload.RequestBody["files[9]"]);
  }
  if (payload.RequestBody.flags !== undefined) {
    appendForm(body, "flags", payload.RequestBody.flags);
  }
  if (payload.RequestBody.sticker_ids !== undefined) {
    appendForm(body, "sticker_ids", payload.RequestBody.sticker_ids);
  }

  const pathParams = {
    channel_id: encodeSimple("channel_id", payload.channel_id, {
      explode: false,
      charEncoding: "percent",
    }),
    message_id: encodeSimple("message_id", payload.message_id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/channels/{channel_id}/messages/{message_id}")(
    pathParams,
  );

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.botToken);
  const securityInput = secConfig == null ? {} : { botToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "update_message_multipart",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.botToken,
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
