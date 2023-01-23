// サーバー側
// 動的型チェック
import { z } from 'zod';
import { procedure, router } from '../trpc';

// メインのルーター
// ルーティングの設定を行う。
// クライアントからアクセスするAPIエンドポイントの設定を行う。
// 今回はhelloだけだが、複数のAPIエンドポイントの設定を書くことが出来る。
export const appRouter = router({
  // APIエンドポイント
  // http://localhost:3000/api/trpc/hello
  // プロシージャ関数の設定
  // プロシージャの設定によりクライアントからアクセスが可能となる。
  // 行いたい動作をここに登録
  // 今回はクライアント側から「名前」を受け取って
  // サーバー側でデータを加工してクライアント側に返します。
  // 受け取る際にデータの型チェックを行います。（動的型チェック）
  hello: procedure
    .input(
      z.object({
        text: z.string()
      }),
    )
    // 正常なデータと判断したら
    // 入力データを加工してクライアント側に返します。
    // queryの引数はresolver関数をとります。
    // resolver関数の戻り値をクライアントに返します。
    .query(({ input }) => {
      // 戻す中身の確認
      console.log({input});
      return {
        greeting: `hello ${input.text}`,
      };
    }),
});

// ルーターの型をクライアントでも使えるように "export type" をしています。
export type AppRouter = typeof appRouter;
