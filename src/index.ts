import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import {
  GEMINI_CLI_API,
  streamSimpleGoogleGeminiCli,
} from "./gemini-cli-provider";
import { geminiOAuthOverride } from "./gemini-oauth";
import { GEMINI_CLI_MODELS } from "./models";

export default function (pi: ExtensionAPI) {
  pi.registerProvider("google-gemini-cli", {
    name: "Google Cloud Code Assist (Gemini CLI)",
    api: GEMINI_CLI_API,
    baseUrl: "https://cloudcode-pa.googleapis.com",
    oauth: geminiOAuthOverride,
    streamSimple: streamSimpleGoogleGeminiCli,
    models: GEMINI_CLI_MODELS,
  });
}
