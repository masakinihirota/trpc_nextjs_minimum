// クライアント側
// データを取得するため
import { httpBatchLink, loggerLink, httpLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '../server/routers/_app';

// Next.js用
// your typesafe tRPC hooks
export const trpc = createTRPCNext<AppRouter>({
  config() {
    // APIエンドポイント
    // ローカルホストのポート3000/api/trpcに設定
    // これにsrc\server\routers\_app.tsで設定した
    // プロシージャ関数を合わせてアクセスする
    // 今回の例
    // http://localhost:3000/api/trpc/hello
    const url = `http://localhost:3000/api/trpc`;
    return {
      // ルーターを設定
      links: [
        // ログがブラウザのコンソールに表示される
        loggerLink(),
        // リンクの設定
        // リンクは必ず一つ設定する必要があります。
        // 1つの場合それを終端リンクと呼びます。
        // httpBatchLinkは複数のリンク設定をしてそれらを一つにまとめます。
        httpLink({
          url,
        }),
      ],
    };
  },
});
