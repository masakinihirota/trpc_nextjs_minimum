// サーバー側
import { initTRPC } from '@trpc/server';

// createメソッドで、
// tRPCインスタンスの初期化
const t = initTRPC.create();

// ルーターのベース
export const router = t.router;
// プロシージャのヘルパー
export const procedure = t.procedure;
