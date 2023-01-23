// クライアント側
import { trpc } from '../utils/trpc';

// tRPC処理のスタート地点
export default function IndexPage() {
  // サーバーに送る情報
  // 今回は「名前」
  // tRPCでサーバー側の関数を実行している。
  // helloがプロシージャ関数
  // AutoComplication機能によりhelloが自動補完候補に出てくる。
  const hello = trpc.hello.useQuery({ text: '[名前]' });
  //            ^^^^^ "trpc."入力後、helloが補完候補に出てくる。
  // useQueryにカーソルを当てるとuseQueryの引数に設定するオブジェクトの情報が表示されます。
  // useQueryの引数に間違った情報を入れるとエラーになります。
  //  例えば'[名前]'の部分を数値にするとエラーになります。

  // hello.statusに通信のステータスが入ります。
  // この中にloadingやerrorなどが保存されています。
  // これはTanstack Queryの機能です。
  console.log(hello.status);

  // サーバーからデータが帰ってくるまでLoadingを表示する。
  if (!hello.data) {
    // hello.dataにフェッチしてきたデータが入ります。
    // これはTanstack Queryの機能です。
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* 型を共有している自動補完
      ”hello.”と入力するしその後ろで補完を表示させると
      helloが持つメソッドが表示されます */}
      <p>{hello.data.greeting}</p>
      {/*            ^^^ 型がstring */}
    </div>
  );
}

