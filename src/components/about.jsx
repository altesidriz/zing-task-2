import Image from 'next/image';
import { FcCheckmark } from 'react-icons/fc';
import { MdAccountBalanceWallet } from "react-icons/md";

const About = () => {
    return (
        <div className='m-auto w-screen h-auto bg-white pt-3'>
            <div className="pt-5 m-auto max-w-[1140px] h-auto flex flex-row gap-6 justify-center items-end border-t-4 border-[#404040]">
                {/* TEXT */}
                <div className="w-[487px] flex flex-col">
                    <span className="p-2 w-max bg-[#FFE377] text-sm tracking-wider rounded-md text-[#404040]">SALES</span>
                    <h2 className="font-bold text-5xl text-black tracking-[-0.67px] leading-[58px] pb-6">Increase company revenue up to 65%</h2>
                    <p className="font-normal text-lg leading-7 pb-4">Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging. </p>
                    <div className="flex gap-4 py-2">
                        <span><FcCheckmark size={20} /></span>
                        <p>Close more deals with single-page contact management</p>
                    </div>
                    <div className="flex gap-4 py-2">
                        <span><FcCheckmark size={20} /></span>
                        <p>Enjoy one-click calling, call scripts and voicemail automation</p>
                    </div>
                    <div className="flex gap-4 py-2">
                        <span><FcCheckmark size={20} /></span>
                        <p>Track stages and milestones of your deals to keep the sales process on track</p>
                    </div>
                </div>
                {/* IMAGE */}
                <div className='relative flex w-[555px] h-[555px] bg-[#150050] items-center justify-center rounded-xl'>
                    <Image src="/card-icons/Image.jpg" alt="/" width={420} height={459} className='rounded-xl' />
                    <div className="absolute top-20 right-10 p-8 w-[272px] h-[156px] bg-white rounded-xl z-10 flex flex-col items-start">
                        <div className='w-full pb-2 flex items-center justify-between'>
                            <span className='font-black text-2xl'>$1,096.30</span>
                            <MdAccountBalanceWallet color='#00CC61' size={24} />
                        </div>
                        <span className='text-[#787878] font-medium text-sm pb-6'>Daily average income</span>
                        <div className='flex flex-row w-[208px] items-center gap-4'>
                            <div className='w-[167px] h-1'>
                                <div className='bg-[#DCDCDC] w-full h-1 overflow-hidden rounded-sm'>
                                    <div className='w-[65%] h-1 bg-[#00CC61]'></div>
                                </div>
                            </div>
                            <span className='text-[#404040] font-medium text-xs'>65%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;