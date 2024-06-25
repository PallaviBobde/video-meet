import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[10px] bg-hero bg-cover">
        <div className="flex h-full flex-col items-center justify-center max-md:px-5 max-md:py-8 lg:p-11">
          <div className="flex flex-col gap-2 text-center">
            <p className=" text-[14px] font-medium text-white">{date}</p>
            <h1 className="text-4xl font-bold lg:text-7xl">{time}</h1>
          </div>
          <h2 className="glassmorphism max-w-[400px] rounded p-2 text-center text-base font-normal mt-2">
            Focus on being productive instead of busy.
          </h2>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
