import CardStarter from './_components/cardStarter';
import CardProfessional from './_components/cardProfessional';
import CardEnterprise from './_components/cardEnterprise';

const Pricing = () => {
  return (
    <div className='m-auto w-screen h-auto bg-[#F4F4F4]'>
      <div className="py-12 m-auto max-w-[1140px] h-auto flex flex-col items-center justify-around gap-10">
        {/*Heaader */}
        <div className="w-full h-auto flex flex-row items-end justify-between">
          <div className="flex flex-col w-2/3">
            <h1 className="text-6xl leading-[74px] text-black font-bold">Choose your right plan</h1>
            <h1 className="text-6xl leading-[74px] text-[#787878] font-bold">for your business</h1>
          </div>
          <div className="w-1/3 font-normal text-lg leading-7">
            <p>Built with love for growing businesses. Check out the Roooby CRM pricing grid below. Switch between plans at any time.</p>
          </div>
        </div>
        {/* Plan Card(s) */}
        <div className="flex flex-row items-center justify-between gap-8">
          <CardStarter />
          <CardProfessional />
          <CardEnterprise />
        </div>
        {/* Pricing Footer */}
        <div className='w-full p-10 flex items-center justify-center gap-14 border-t-[#787878] border-2'>
          <h3 className="font-bold text-3xl leading-10 tracking-tighter">Need help choosing the right plan?</h3>
          <button className='bg-white p-4 felx items-center justify-center text-sm text-black rounded-lg  border-[#DCDCDC] border-2'>Contact sales</button>
          <button className='bg-[#150050] p-4 felx items-center justify-center text-sm text-white rounded-lg'>Compare plans</button>
        </div>
      </div>
    </div>
  );
};
export default Pricing;