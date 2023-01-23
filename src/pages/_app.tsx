// クライアント側
import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

// add `withTRPC()`-HOC here
export default trpc.withTRPC(MyApp);
