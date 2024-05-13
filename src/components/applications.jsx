import Image from "next/image";
import Link from "next/link";

const Applications = () => {
    return (
        <div className='m-auto w-screen h-auto bg-[#F4F4F4] pt-32'>
            <div className="pt-2 pb-12 m-auto max-w-[1140px] h-auto flex flex-col gap-8 justify-center items-center">
                <h1 className="text-5xl tracking-tight text-black font-bold">Over 300+ integrations</h1>
                <p className="text-lg leading-7 text-[#3B3A40]">Expand the capabilities of <b>Roooby</b> with hundreds of apps and integrations</p>
                <div className="flex flex-row items-center justify-center gap-2 flex-wrap w-[1140px] h-[248px]">
                    <Image src="/logos/Icon.png" alt="icon" width={120} height={120}/>
                    <Image src="/logos/Hubspot.png" alt="icon" width={288} height={120}/>
                    <Image src="/logos/Zoom.png" alt="icon" width={288} height={120}/>
                    <Image src="/logos/GVideo.png" alt="icon" width={120} height={120}/>
                    <Image src="/logos/Zendesk.png" alt="icon" width={288} height={120}/>
                    <Image src="/logos/Intercom.png" alt="icon" width={372} height={120}/>
                    <Image src="/logos/Book.png" alt="icon" width={120} height={120}/>
                    <Image src="/logos/Star.png" alt="icon" width={120} height={120}/>
                    <Image src="/logos/Asana.png" alt="icon" width={372} height={120}/>
                    <Image src="/logos/TWork.png" alt="icon" width={120} height={120}/>
                </div>
                <Link href="#" className="text-2xl font-medium tracking-tight">See all apps and extentions &gt;</Link>
            </div>
        </div>
    );
};
export default Applications;