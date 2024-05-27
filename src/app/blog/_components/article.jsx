import Image from 'next/image';
import Link from 'next/link';
import getImage from '@/lib/getImage';

const Article = async ({ width, title, id }) => {
    return (
        <div className={`w-[${width}] h-[450px] flex flex-col items-start gap-4`}>
            <span className="font-bold text-sm tracking-wider text-[#787878]">NEWS</span>
            <div className="w-full h-[1px] bg-[#787878]"></div>
            <div className="relative w-full h-[241px]">
                <Link href={`blog/${id}`}>
                <Image src={getImage(id)} alt="art" fill className="object-cover hover:opacity-80" />
                </Link>
            </div>
            <Link href={`blog/${id}`}>
            <h3 className="font-bold text-2xl leading-8 tracking-tight hover:text-[#787878]">{title}</h3>
            </Link>

            <p className="font-medium text-base mt-auto">29 Jun 2024,<span className="text-[#787878]"> by Joshua Nash</span></p>
        </div>
    );
};
export default Article;