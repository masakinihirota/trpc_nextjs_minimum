// サーバー側
// 動的型チェック
import { z } from 'zod';
import { procedure, router } from '../trpc';

// メインルーター
export const appRouter = router({
  // プロシージャ
  // 行いたい動作をここに登録
  // 今回はクライアント側から「名前」を受け取って
  // データを加工して返します。
  // 受け取る際にデータの型チェックを行います。
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    // 正常なデータと判断したら
    // 入力データを加工してクライアント側に
    // 返します。
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
