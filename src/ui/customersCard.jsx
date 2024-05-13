import Image from "next/image";

const CustomersCard = ({
    portrait,
    name,
    job,
    desc
}) => {
    return (
        <div className='w-96 h-[400px] flex flex-col items-between justify-between gap-10'>
            <span className="h-full w-full font-bold text-6xl text-[#00CC61]">&ldquo;</span>
            <div className="w-full h-[1px] bg-[#3B3A40]"></div>
            <p className="w-5/6">{desc}</p>
            <div className="flex flex-row items-start justify-start gap-2">
                <div className="relative w-12 h-12 rounded-full">
                    <Image src={portrait} alt="portrait" width={48} height={48} className="object-cover rounded-3xl" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-base">{name}</span>
                    <span className="font-normal text-base">{job}</span>
                </div>
            </div>
        </div>
    );
};
export default CustomersCard;