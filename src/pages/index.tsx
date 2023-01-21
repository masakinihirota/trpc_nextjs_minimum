// クライアント側
import { trpc } from '../utils/trpc';

const IndexPage = () => {
  // サーバーに送る情報
  // 今回は「名前」
  const hello = trpc.hello.useQuery({ text: '[名前]' });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
      {/*            ^^^ 型がstring */}
    </div>
  );
};

export default IndexPage;
