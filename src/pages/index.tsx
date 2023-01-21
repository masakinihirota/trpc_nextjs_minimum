// クライアント側
import { trpc } from '../utils/trpc';

export default function IndexPage() {
  // サーバーに送る情報
  // 今回は「名前」
  const hello = trpc.hello.useQuery({ text: '[名前]' });
  // サーバーからデータが帰ってくるまでLoadingを表示する。
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
      {/*            ^^^ 型がstring */}
    </div>
  );
}

