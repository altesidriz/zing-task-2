import Article from './_components/article';
import Image from 'next/image';
import NoImgArticle from './_components/noImgArticle';
import Link from 'next/link';
import getImage from '@/lib/getImage';

const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) {
        throw new Error('Something went wrong');
    }
    return res.json();
};

const Blog = async () => {
    const posts = await getData();
    const firstPost = posts.shift();
    const secondPosts = posts.splice(0, 6);
    const thirdPost = posts.shift();
    const fourthPosts = posts.splice(0, 3);
    const fifthPosts = posts.splice(0, 3);

    return (
        <div className='m-auto w-screen h-auto bg-[#F4F4F4]'>
            <div className="pt-12 m-auto max-w-[1140px] h-auto flex flex-col items-center justify-around gap-5">
                <h1 className="w-1/2 font-bold text-6xl leading-[72px] tracking-tight self-start">News and insights <span className="text-[#787878]">from our experts</span></h1>
                <ul className="w-1/2 flex flex-row gap-4 items-center self-start">
                    <li className="pb-4 cursor-pointer hover:text-[#DCDCDC]">All Articles</li>
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
                            <Link href={`blog/${firstPost.id}`} className='hover:text-opacity-10'>
                                <h2 className="font-bold text-4xl leading-[50px] tracking-tight hover:text-[#787878]">{firstPost.title}</h2>
                            </Link>
                        </div>
                        <p className="font-medium text-base">05 Sep 2024,<span className="text-[#787878]"> by Maxwell Iskiev</span></p>
                    </div>
                    <div className="relative flex-1 h-96">
                        <Link href={`blog/${firstPost.id}`}>
                            <Image src={getImage(firstPost.id)} alt="art1" fill className="object-cover hover:opacity-80" />
                        </Link>
                    </div>
                </section>
            </div>
            {/* SECOND ARTICLES SECTION */}
            <div className='m-auto w-screen h-auto bg-white'>
                <div className="m-auto pt-8 max-w-[1140px] h-auto flex flex-row items-center justify-between gap-y-28 flex-wrap">
                    {secondPosts.map(data => (
                        <Article width="300px" key={data.id} title={data.title} id={data.id} />
                    ))}
                </div>
            </div>
            {/* THIRD ARTICLE SECTION */}
            <div className='m-auto w-screen h-auto bg-white'>
                <div className="m-auto pt-12 max-w-[1140px] h-[500px] flex flex-row items-center justify-between gap-28 flex-wrap">
                    <div className="flex-1">
                        <span className="font-bold text-sm tracking-wider text-[#787878]">NEWS</span>
                        <div className="w-full h-auto flex flex-col gap-4">
                            <div className="w-full h-[1px] bg-[#787878]"></div>
                            <div className="relative w-full h-[241px]">
                                <Link href={`blog/${thirdPost.id}`}>
                                    <Image src={getImage(thirdPost.id)} alt="art" fill className="object-cover hover:opacity-50" />
                                </Link>
                            </div>
                            <Link href={`blog/${thirdPost.id}`}>
                                <h3 className="font-bold text-2xl leading-8 tracking-tight hover:text-[#787878]">{thirdPost.title}</h3>
                            </Link>
                            <p className="font-medium text-base">29 Jun 2024,<span className="text-[#787878]"> by Joshua Nash</span></p>
                        </div>
                    </div>
                    <div className='h-auto flex-1 flex flex-col justify-around gap-4'>
                        {fourthPosts.map(data => (
                            <NoImgArticle key={data.id} title={data.title} id={data.id}/>
                        ))}
                    </div>
                </div>
            </div>
            {/* SECOND ARTICLES SECTION */}
            <div className='m-auto w-screen h-auto bg-white'>
                <div className="m-auto py-8 max-w-[1140px] h-auto flex flex-row items-center justify-between gap-y-28 flex-wrap">
                    {fifthPosts.map(data => (
                        <Article key={data.id} width="300px" title={data.title} id={data.id}/>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Blog;