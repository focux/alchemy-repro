/// <reference types="@types/node" />

import alchemy from "alchemy";
import { Vite, Worker } from "alchemy/cloudflare";

const app = await alchemy("my-alchemy-app");

export const apiWorker = await Worker("api", {
  name: "api-worker",
  entrypoint: "./src/index.ts",
  cwd: "packages/backend",
});

export const webWorker = await Vite("website", {
  main: "worker/index.ts",
  command: "bun run build",
  cwd: "packages/web",
});

console.log({
  apiUrl: apiWorker.url,
  webUrl: webWorker.url,
});

await app.finalize();
