import getImage from "@/lib/getImage";
import getMoreBlog from "@/lib/getMoreBlog";
import Image from "next/image";

import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  return res.json();
};

const SingleBlog = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className='m-auto w-screen h-auto bg-[#F4F4F4]'>
      <div className="pt-12 m-auto max-w-[1140px] h-auto flex flex-col items-center justify-around gap-5">
        <div className="w-5/6 h-auto flex flex-col items-center justify-around gap-5">
          <span className="uppercase text-sm font-bold text-[#787878] tracking-wider self-start">service</span>
          <div className="w-full h-[1px] bg-[#787878]"></div>
          <h1 className="capitalize font-bold text-5xl leading-10 tracking-tight">{data.title}</h1>
          <p className="font-medium text-base self-start">29 Jun 2024,<span className="text-[#787878]"> by Joshua Nash</span></p>
        </div>
        <div className="relative w-full h-[500px]">
          <Image src={getImage(data.id)} alt="art" fill className="object-cover" />
        </div>
      </div>
      <div className='m-auto w-screen h-auto bg-white'>
        <div className="pt-12 m-auto max-w-[750px] h-auto flex flex-col items-start justify-around gap-8">
          <p className="capitalize font-medium text-2xl leading-8 tracking-tight">The Psychology of Short-Form Content: Why We Love Bite-Sized Videos. The Psychology of Short-Form Content: Why We Love Bite-Sized Videos. The Psychology of Short-Form Content: Why We Love Bite-Sized Videos</p>
          <h1 className="capitalize font-bold text-5xl tracking-tight">{data.title}</h1>
          <p className="font-normal text-lg leading-7">{getMoreBlog(data.id)}</p>
          <div className="w-full h-[1px] bg-[#787878]"></div>
          <p className="font-medium text-2xl leading-7">&quot; {data.body} &quot;</p>
          <span className="font-medium text-base text-[#787878] self-start"> Maxwell Iskiev</span>
          <div className="w-full h-[1px] bg-[#787878]"></div>

          <div className="relative w-full h-[400px]">
            <Image src={getImage(data.id)} alt="art" fill className="object-cover" />
          </div>
          <h1 className="capitalize font-bold text-5xl tracking-tight">{data.title}</h1>
          <p className="font-medium text-2xl leading-7">&quot; {data.body} &quot;</p>
          <h1 className="capitalize font-bold text-3xl leading-10 tracking-tight">1. {data.title}</h1>
          <p className="font-normal text-lg leading-7">{getMoreBlog(data.id)}</p>
          <div className="w-full h-auto flex flex-col gap-5">
          <div className="w-full h-[1px] bg-[#787878]"></div>
          <div className="w-full h-auto flex items-center justify-between">
            {/* LEFT */}
            <div className="flex w-64 h-auto items-center justify-start gap-5">
              <div className="relative w-20 h-20 rounded-full">
                <Image src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                fill
                className="object-cover rounded-full"
                alt="portrait"
                />
              </div>
              <div className="flex flex-col items-start justify-between gap-2">
                <span className="font-bold text-base">Mia Gonzalez</span>
                <span className="text-sm">UI Designer</span>
              </div>
            </div>
            {/* RIGHT */}
            <div className="flex w-64 h-auto items-center justify-end gap-5">
            <FaFacebook size={30} color="#3B5998"/>
            <AiFillTwitterCircle size={30} color="#55ACEE"/>
            <FaLinkedin size={30} color="#0976B4"/>
            <AiOutlineLink size={30} />
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#787878]"></div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default SingleBlog;