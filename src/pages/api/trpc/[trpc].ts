// 通常は触らないファイル。
// API ハンドラ（アダプタとも呼ばれる）は、バックエンドへのHTTPリクエストとtRPC間の接着剤として機能します。
//API ハンドラはサーバ内のルートに配置され、そのルートとそのサブルートへのすべてのリクエストを処理します。
// サーバーからリクエストを受け取り、createContext関数を使ってコンテキストを生成し、リクエストとコンテキストをルーター内のプロシージャに送ります。
// CORSを有効にする場合など特殊ケースに使用する。
// また、プロシージャ内でエラーが発生したときに実行されるコールバック関数であるonErrorなど色々なオプションの引数をとることができます。

import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/routers/_app';

// tRPCのHTTPレスポンスハンドラ
// @see https://trpc.io/docs/api-handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
  //
  onError({ error }) {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      // バグ報告
      console.error('Something went wrong', error);
    }
  },

});
