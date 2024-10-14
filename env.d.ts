/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly VITE_APP_URL: string
    readonly VITE_API_URL: string
}
declare const __BUILD_HASH__: string;
interface ImportMeta {
    readonly env: ImportMetaEnv
}

