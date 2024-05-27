import Link from 'next/link';

const NoImgArticle = ({title, id}) => {
    console.log(id);
    return (
        <div className="flex flex-col gap-4 items-start justify-between">
            <div className="w-full h-[1px] bg-[#787878]"></div>
            <Link href={`blog/${id}`}>
            <h2 className="font-bold text-2xl hover:text-[#787878]">{title}</h2>
            </Link>
            <div className="w-full flex flex-row items-center justify-between">
                <p className="font-medium text-base">11 Aug 2023,<span className="text-[#787878]"> by Joshua Nash</span></p>
                <p className="font-bold text-sm tracking-wider text-[#787878]">PRODUCT</p>
            </div>
        </div>

    );
};
export default NoImgArticle;