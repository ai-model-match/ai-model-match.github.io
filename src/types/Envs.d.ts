export {};

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
    readonly glob: (
      pattern: string,
      options?: { eager?: boolean; import?: string }
    ) => Record<string, unknown>;
  }
}
