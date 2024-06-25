'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-orange-1 px-4 py-6 flex flex-col justify-center w-full xl:max-w-[270px] min-h-[260px] rounded-[10px] cursor-pointer items-center',
        className,
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism mb-5 rounded-[60px] p-4">
        <Image src={img} alt="meeting" width={40} height={40} />
      </div>

      <div className="align-center flex flex-col justify-center text-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
