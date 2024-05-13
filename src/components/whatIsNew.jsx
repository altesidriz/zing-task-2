import ServiceCard from '@/ui/serviceCard';
import Link from 'next/link';
import serviceData from '@/api/serviceCardData';

const WhatIsNew = () => {
  return (
    <div className='m-auto w-screen h-[1000px] bg-[#FFFFFF] pt-32'>
            <div className="pt-2 m-auto max-w-[1140px] h-auto flex flex-col justify-center items-center">
               <div className="pb-12 w-full flex flex-row items-end justify-between">
                <h1 className="font-bold text-6xl">What&apos;s new at Roooby?</h1>
                <Link href="#" className="hover:underline">See all <span className="text-[#00CC61]">&gt;</span></Link>
               </div>
               <div className="flex flex-row items-start justify-around gap-20">
                {serviceData.map((data, index) => (
                    <ServiceCard key={index} 
                    imageUrl={data.imageUrl} 
                    title={data.title} 
                    date={data.date} 
                    createdBy={data.createdBy}/>
                ))}
               </div>
            </div>
        </div>
  );
};
export default WhatIsNew;