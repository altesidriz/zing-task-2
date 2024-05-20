'use client';
import { useState } from 'react';
import Article from './_components/article';
import Image from 'next/image';

const Blog = () => {
    let style = '';
    const [all, setAll] = useState(false);
    if (all) { style = 'border-green-600 border-b-2'; }
    return (
        <div className='m-auto w-screen h-auto bg-[#F4F4F4]'>
            <div className="pt-12 m-auto max-w-[1140px] h-auto flex flex-col items-center justify-between">
                <h1 className="w-1/2 font-bold text-6xl leading-[72px] tracking-tight self-start">News and insights <span className="text-[#787878]">from our experts</span></h1>
                <ul className="w-1/2 flex flex-row gap-4 items-center self-start">
                    <li className={`pb-4 ${style} cursor-pointer hover:text-[#DCDCDC]`}
                        onClick={() => (setAll((prev) => (!prev)))}>
                        All Articles
                    </li>
                    <li className="pb-4 cursor-pointer hover:text-[#DCDCDC]">Sales</li>
                    <li className="pb-4 cursor-pointer hover:text-[#DCDCDC]">Marketing</li>
                    <li className="pb-4 cursor-pointer hover:text-[#DCDCDC]">Service</li>
                    <li className="pb-4 cursor-pointer hover:text-[#DCDCDC]">Product</li>
                    <li className="pb-4 cursor-pointer hover:text-[#DCDCDC]">News</li>
                </ul>
            </div>
            {/* FIRST ARTICLE SECTION*/}
            <div className='m-auto w-screen h-auto bg-white'>
                <section className="m-auto pt-4 max-w-[1140px] h-auto flex flex-row items-center justify-between gap-4">
                    <div className="w-full h-96 py-4 flex flex-col items-start justify-between flex-1 gap-2 border-[#787878] border-y-2">
                        <div className=" flex flex-col gap-2">
                            <span className="font-bold text-sm tracking-wider text-[#787878]">SERVICE</span>
                            <h2 className="font-bold text-4xl leading-[50px] tracking-tight">The 2024 State of Marketing & Trends Report: Data from 1400+ Global Marketers</h2>
                        </div>
                        <p className="font-medium text-base">05 Sep 2024,<span className="text-[#787878]"> by Maxwell Iskiev</span></p>
                    </div>
                    <div className="relative flex-1 h-96">
                        <Image src="/articleImages/image1.png" alt="art1" fill className="object-cover" />
                    </div>
                </section>
            </div>
            {/* SECOND ARTICLES SECTION */}
            <div className='m-auto w-screen h-auto bg-white'>
                <div className="m-auto pt-8 max-w-[1140px] h-auto flex flex-row items-center justify-between gap-y-28 flex-wrap">
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </div>
            </div>
        </div>
    );
};
export default Blog;