import Image from 'next/image';

const ServiceCard = ({ imageUrl, title, date, createdBy }) => {
  return (
    <div className='w-full h-[500px] flex flex-col items-start justify-around gap-8'>
      {/* UPPERCASE TAILWIND BUG IS NOT WORKING */}
      <h4 className="text-sm text-[#787878] tracking-[1.4px]">SERVICE</h4>
      <div className='w-full h-[1px] bg-black bg-opacity-50'></div>
      <div className='relative w-full h-[439px] border-black border-4'>
        <Image src={imageUrl} alt={date} fill className='object-cover' />
      </div>
      <h2 className='font-bold text-3xl tracking-tight leading-10 w-full'>{title}</h2>
      <p><span className="text-base font-medium">{date},</span><span> by {createdBy}</span></p>
    </div>
  );
};
export default ServiceCard;