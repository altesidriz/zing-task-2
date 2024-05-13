const Banner = () => {
  return (
    <div className='m-auto w-screen h-auto bg-[#004050]'>
            <div className='relative overflow-hidden pt-2 m-auto max-w-[1140px] h-[468px]'>
                <div className="absolute right-0 top-0 h-full w-[452px] bg-[#FFE377] z-10"></div>
                <div className="absolute right-[-180px] top-36 h-[768px] w-[768px] bg-[#00CC61] z-20 rounded-full"></div>
                <div className="p-10 absolute left-0 top-0 h-full w-full bg-none z-30 flex flex-row items-center justify-around">
                    <div className="w-2/3 flex flex-col items-start justify-center text-white border-red-800 border-8">
                        <h1 className="text-6xl font-bold tracking-tighter leading-relaxed">Ready to supercharge your business?</h1>
                        <p className="w-10/12 font-medium text-lg leading-7">Ask about Roooby products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help.</p>
                    </div>
                    <div className="w-1/3">
                        fdsdf
                    </div>
                </div>
            </div>
        </div >
  );
};
export default Banner;