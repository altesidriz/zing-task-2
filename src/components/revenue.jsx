import RevenueCard from "@/ui/revenueCard";
import revenueData from "@/api/sericeRevenue";

const Revenue = () => {
    return (
        <div className='m-auto w-screen h-auto bg-[#FFFFFF] pt-20'>
            <div className='pt-2 m-auto max-w-[1140px] h-auto flex flex-col justify-start items-start gap-4'>
                <h1 className="font-bold text-5xl text-[#3B3A40] leading-[48px] tracking-tight">Real-life results and revenue</h1>
                <p className="pb-8 font-normal leading-7 text-lg text-[#3B3A40]">See how companies like yours have smashed their sales success goals</p>
                {revenueData.map((rev) => (
                    <RevenueCard key={rev.name}
                        data={rev.data}
                        type={rev.type}
                        desc={rev.desc}
                        portrait={rev.portrait}
                        name={rev.name}
                        job={rev.job}
                    />
                ))}
            </div>
        </div >
    );
};
export default Revenue;