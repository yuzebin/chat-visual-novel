export const SITE_TITLE = "ClickPrompt";
export const SITE_URL = "https://www.chatvisualnovel.com/";
export const SITE_LOCALE_COOKIE = "CLICKPROMPT_LOCALE";
export const SITE_USER_COOKIE = "CLICKPROMPT_USER";
export const GITHUB_URL =
  "https://github.com/prompt-engineering/chat-visual-novel";
export const CP_GITHUB_ASSETS = `${GITHUB_URL}/tree/master/src/assets/`;
export const SITE_INTERNAL_HEADER_URL = "$$$x-url";
export const SITE_INTERNAL_HEADER_PATHNAME = "$$$x-pathname";
export const SITE_INTERNAL_HEADER_LOCALE = "$$$x-locale";
export const CHAT_COMPLETION_URL = env("OPENAI_COMPLETION_URL");
export const CHAT_COMPLETION_CONFIG = {
  model: env("OPENAI_COMPLETION_MODEL"),
  temperature: 0.5,
  max_tokens: 150,
};
