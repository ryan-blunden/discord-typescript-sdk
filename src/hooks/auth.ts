import { BeforeRequestContext, BeforeRequestHook } from "./types";

export class AuthHeaderHook implements BeforeRequestHook {
  beforeRequest(hookCtx: BeforeRequestContext, request: Request): Request {
    if (hookCtx.oAuth2Scopes && hookCtx.oAuth2Scopes.length > 0) {
      return request;
    }

    const authToken = request.headers.get("Authorization");
    if (authToken && authToken.indexOf("Bot") < 0) {
      request.headers.set("Authorization", `Bot ${authToken}`);
    }
    return request;
  }
}