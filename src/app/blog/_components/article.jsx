import Image from 'next/image';

const Article = async ({width, title}) => {
    return (
        <div className={`w-[${width}] h-auto flex flex-col gap-4`}>
            <span className="font-bold text-sm tracking-wider text-[#787878]">NEWS</span>
            <div className="w-full h-[1px] bg-[#787878]"></div>
            <div className="relative w-full h-[241px]">
                <Image src="/articleImages/Image2.png" alt="art" fill className="object-cover"/>
            </div>
            <h3 className="font-bold text-2xl leading-8 tracking-tight">{title}</h3>
            <p className="font-medium text-base">29 Jun 2024,<span className="text-[#787878]"> by Joshua Nash</span></p>
        </div>

    );
};
export default Article;