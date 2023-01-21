// バックエンド側
import { z } from 'zod';
import { procedure, router } from '../trpc';

// メインルーター
export const appRouter = router({
  // プロシージャ
  // 行いたい動作をここに登録
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
