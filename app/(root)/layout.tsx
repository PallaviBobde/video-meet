import { ReactNode } from 'react';

import StreamVideoProvider from '@/providers/StreamClientProvider';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="bg-[#424769]">
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
