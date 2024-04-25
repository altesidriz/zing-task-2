import Image from "next/image";

const Hero = () => {
    return (
        <div className='relative pt-9 px-7 md:px-36 flex flex-col h-auto justify-center items-start bg-[#DCDCDC]'>
            <div className="absolute top-[36px] left-[820px] w-[595px] h-[482px] overflow-visible border-8 border-black rounded-3xl">
                <Image src="/hero-img.png" alt="/" fill className="object-cover rounded-3xl" />
            </div>
            <div className="flex flex-col gap-6">
                <span className="w-[639px] font-bold text-[64px] text-[#150050] leading-[74px]">Bringing companies and customers together, anywhere</span>
                <p className="w-[478px] text-lg font-light leading-7">An awesome & powerfull tools for your business, increase business revenue with enterprise-grade links built to acquire and engage customers.</p>
                <div className="mt-8 p-1 w-[457px] h-16 bg-white flex gap-1 rounded-md">
                    <input type="email" name="email" id="email" placeholder="Enter your email" className="pl-3 h-full w-2/3 rounded-md focus:outline-blue-950" />
                    <button className="p-2 w-1/3 h-full font-bold text-lg tracking-[-0.25] text-white bg-[#150050] rounded-md">Try for Free</button>
                </div>
                <span className="text-sm font-normal text-[#404040] mt-[-15px]">Full access. No credit card required.</span>
            </div>
            <div className="w-full h-56 flex flex-row justify-between items-center gap-3">
                <div className="inline-block w-[300px] h-10">
                    <span className="text-base font-medium tracking-tighter h-6 w-[520px] flex-grow text-nowrap">Trusted by 1,000+ customers</span>
                </div>
                <div className="inline-block w-[136px] h-10">
                    <Image src='/Google.png' width={136} height={18} alt="/" className="object-contain h-auto w-24" />
                </div>
                <div className="inline-block w-[136px] h-10">
                    <Image src='/Atlassian.png' width={136} height={18} alt="/" className="object-contain h-auto w-24" />
                </div>
                <div className="inline-block w-[136px] h-10">
                    <Image src='/Canon.png' width={136} height={18} alt="/" className="object-contain h-auto w-24" />
                </div>
                <div className="inline-block w-[136px] h-10">
                    <Image src='/Walmart.png' width={136} height={18} alt="/" className="object-contain h-auto w-24" />
                </div>
                <div className="inline-block w-[136px] h-10">
                    <Image src='/Amazon.png' width={136} height={18} alt="/" className="object-contain h-auto w-24" />
                </div>
            </div>
        </div>
    );
};
export default Hero;