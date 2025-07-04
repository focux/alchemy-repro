import type { apiWorker } from '../../alchemy.run.ts';

export type WorkerEnv = typeof apiWorker.Env;

declare module 'cloudflare:workers' {
	namespace Cloudflare {
		export interface Env extends WorkerEnv {}
	}
}
