import { Hooks } from "./types.js";
import { AuthHeaderHook } from "./auth.js";

export function initHooks(hooks: Hooks) {
  hooks.registerBeforeRequestHook(new AuthHeaderHook());
}
