import Image from "next/image";

const RevenueCard = ({
    data,
    type,
    desc,
    portrait,
    name,
    job
}) => {
    return (
        <>
            <div className="w-full h-[1px] bg-[#3B3A40]"></div>

            <div className='py-8 w-full h-auto flex flex-row items-start justify-around gap-7'>
                <div className="w-1/3 h-auto flex flex-col items-start justify-start">
                    <h1 className="font-bold text-6xl leading-loose tracking-tighter">{data}</h1>
                    <span className="font-bold text-xl">{type}</span>
                </div>
                <div className="w-2/3 flex flex-col items-start justify-start gap-4">
                    <p className="font-medium text-3xl leading-10 tracking-tight">{desc}</p>
                    <div className="flex flex-row items-start justify-start gap-2">
                        <div className="relative w-12 h-12 rounded-xl">
                            <Image src={portrait} alt="portrait" width={48} height={48} className="object-cover rounded-3xl" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-base">{name}</span>
                            <span className="font-normal text-base">{job}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default RevenueCard;