import Image from "next/image";

const Description = () => {
  return (
    <div className='m-auto w-screen h-auto bg-[#150050]'>
      <div className="p-5 py-10 m-auto max-w-[1440px] h-auto flex flex-col gap-6 items-center">
        {/* TEXT */}
        <div className="w-[1200px] h-48 flex flex-row items-center justify-center text-white">
            <h3 className="w-1/2 font-bold text-5xl">Here&apos;s how Roooby can benefit your business</h3>
            <p className="pt-20 w-96 text-sm">Build more meaningful and lasting relationships — better understand their needs, identify new opportunities to help, address any problems faster.</p>
        </div>
        {/* CARDS */}
        <div className="flex flex-row gap-3 justify-center items-center">
            <div className="py-8 px-5 w-[374px] h-[439px] flex flex-col gap-3 rounded-xl justify-around bg-yellow-300">
                <Image src="/card-icons/Face.png" alt="face-icon" width={63} height={72}/>
                <div className="h-[1px] w-full bg-black"></div>
                <p className=" w-44 font-bold text-xl tracking-[0.38px]">Lead customers to happiness</p>
                <p className="font-normal text-base leading-7">Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
            </div>
            <div className="py-8 px-5 w-[374px] h-[439px] flex flex-col gap-3 rounded-xl justify-around bg-[#1E0A57] text-white">
                <Image src="/card-icons/Laptop.png" alt="face-icon" width={63} height={72}/>
                <div className="h-[1px] w-full bg-white"></div>
                <p className=" w-44 font-bold text-xl tracking-[0.38px]">Lead customers to happiness</p>
                <p className="font-normal text-base leading-7">Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
            </div>
            <div className="py-8 px-5 w-[374px] h-[439px] flex flex-col gap-3 rounded-xl justify-around bg-[#1E0A57] text-white">
                <Image src="/card-icons/Wond.png" alt="face-icon" width={63} height={72}/>
                <div className="h-[1px] w-full bg-white"></div>
                <p className=" w-44 font-bold text-xl tracking-[0.38px]">Lead customers to happiness</p>
                <p className="font-normal text-base leading-7">Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Description;