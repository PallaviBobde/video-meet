import { SignIn } from '@clerk/nextjs';

export default function SiginInPage() {
  return (
    <main
      className="flex h-screen w-full items-center justify-center "
      style={{background: "linear-gradient(to right, #6190e8, #a7bfe8)",}}
    >
      <SignIn />
    </main>
  );
}
