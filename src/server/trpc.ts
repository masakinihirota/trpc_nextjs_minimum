import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

// ルーターのベース
// プロシージャのヘルパー
export const router = t.router;
export const procedure = t.procedure;
