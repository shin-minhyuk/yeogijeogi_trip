/// <reference types="vite/client" />

interface ImportMetaEnvApiKey {
  readonly VITE_API_KEY: string;
  readonly VITE_KORSERVICE_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
