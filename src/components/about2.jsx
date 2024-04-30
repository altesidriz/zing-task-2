import { FcCheckmark } from 'react-icons/fc';

const About2 = () => {
    return (
        <div className='m-auto w-screen h-auto bg-white pt-32'>
            <div className="pt-12 m-auto max-w-[1140px] h-auto flex flex-row-reverse gap-24 justify-center items-end border-t-2 border-[#787878]">
                {/* TEXT */}
                <div className="w-[487px] flex flex-col">
                    <span className="p-2 w-max bg-[#FFE377] text-sm tracking-wider rounded-md text-[#404040]">Marketing</span>
                    <h2 className="font-bold text-5xl text-black tracking-[-0.67px] leading-[58px] pb-6">Marketing</h2>
                    <p className="font-normal text-lg leading-7 pb-4">Market like the most successful companies in the world with Agile CRM&apos;s marketing automation software. </p>
                    <div className="flex gap-4 py-2">
                        <span><FcCheckmark size={20} /></span>
                        <p>Marketing workflows with an easy drag-and-drop designer</p>
                    </div>
                    <div className="flex gap-4 py-2">
                        <span><FcCheckmark size={20} /></span>
                        <p>Use our templates to create high converting, mobile responsive landing pages</p>
                    </div>
                    <div className="flex gap-4 py-2">
                        <span><FcCheckmark size={20} /></span>
                        <p>Integrate social media easily into your marketing campaigns & contact views</p>
                    </div>
                </div>
                {/* IMAGE */}
                <div className='flex w-[555px] h-[555px] bg-about-image bg-cover items-end justify-around rounded-xl text-white'>
                    <div className='mb-4 w-[457px] h-[80px] bg-[#150050] rounded-xl flex flex-row items-center justify-around'>
                        <span className='font-bold text-lg tracking-tighter'>Automate your sales & marketing</span>
                        <button className='bg-[#00CC61] font-bold text-lg tracking-tighter p-4 rounded-xl'>Start Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About2;