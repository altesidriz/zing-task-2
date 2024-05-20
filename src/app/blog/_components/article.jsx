import Image from 'next/image';

const Article = () => {
    return (
        <div className="w-[350px] h-auto flex flex-col gap-4">
            <span className="font-bold text-sm tracking-wider text-[#787878]">NEWS</span>
            <div className="w-full h-[1px] bg-[#787878]"></div>
            <div className="relative w-full h-[241px]">
                <Image src="/articleImages/Image2.png" alt="art" fill className="object-cover"/>
            </div>
            <h3 className="font-bold text-2xl leading-8 tracking-tight">Learn from My Mistakes: 7 Digital Course Pitfalls to Skip</h3>
            <p className="font-medium text-base">29 Jun 2024,<span className="text-[#787878]"> by Joshua Nash</span></p>
        </div>

    );
};
export default Article;