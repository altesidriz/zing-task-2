import Image from 'next/image';
import { FcCheckmark } from 'react-icons/fc';

const About3 = () => {
    return (
        <div className='m-auto w-screen h-auto bg-white pt-32'>
            <div className="pt-12 pb-12 m-auto max-w-[1140px] h-auto flex flex-row gap-24 justify-center items-end border-t-2 border-[#787878]">
                {/* TEXT */}
                <div className="w-[487px] flex flex-col">
                    <span className="p-2 w-max bg-[#FFE377] text-sm tracking-wider rounded-md text-[#404040]">SERVICE</span>
                    <h2 className="font-bold text-5xl text-black tracking-[-0.67px] leading-[58px] pb-6">Help Desk Software</h2>
                    <p className="font-normal text-lg leading-7 pb-4">Great customer support separates decent companies from excellent companies. A positive customer support experience is a crucially important piece of the customer journey.</p>
                    <div className="flex gap-4 py-2">
                        <span><FcCheckmark size={20} /></span>
                        <p>Resolve every issue in the shortest possible time with powerful ticketing features</p>
                    </div>
                    <div className="flex gap-4 py-2">
                        <span><FcCheckmark size={20} /></span>
                        <p>Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)</p>
                    </div>
                    <div className="flex gap-4 py-2">
                        <span><FcCheckmark size={20} /></span>
                        <p>Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard</p>
                    </div>
                </div>
                {/* IMAGE */}
                <div className='flex w-[555px] h-[555px] bg-[#F4F4F4] items-center justify-around rounded-xl'>
                    <div className='px-[24px] pt-[30px] w-[420px] h-[459px] bg-white rounded-xl'>
                        <div className='w-full h-24 pl-6 bg-[#004050] rounded-xl text-white flex flex-col justify-center items-start gap-4'>
                            <h3 className='font-bold text-lg'>Lead Discovered</h3>
                            <div className='w-[175px] h-2 bg-[#295F6C] rounded-xl'></div>
                        </div>
                        <div className='w-[372px] h-border'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About3;