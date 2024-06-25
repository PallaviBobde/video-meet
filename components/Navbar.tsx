import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full border-b  border-[#ddd] bg-[#2D3250] p-2  lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/video-meet.svg"
          width={32}
          height={32}
          alt="VidMeet logo"
          className="max-sm:size-10"
        />
        <p className="text-[20px] font-bold text-white max-sm:hidden">
          VidMeet
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
