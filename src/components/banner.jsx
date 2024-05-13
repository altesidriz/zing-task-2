const Banner = () => {
    return (
        <div className='m-auto w-screen h-auto bg-[#004050]'>
            <div className='relative overflow-hidden m-auto max-w-[1140px] h-[450px]'>
                <div className="absolute right-0 top-0 h-full w-[452px] bg-[#FFE377] z-10"></div>
                <div className="absolute right-[-180px] top-32 h-[778px] w-[778px] bg-[#00CC61] z-20 rounded-full"></div>
                <div className="py-10 absolute left-0 top-0 h-full w-full bg-none z-30 flex flex-row items-center justify-start">
                    <div className="w-[773px] flex flex-col items-start justify-start text-white">
                        <h1 className="w-10/12 text-6xl font-bold tracking-tighter leading-relaxed">Ready to supercharge your business?</h1>
                        <p className="w-9/12 font-medium text-lg leading-7">Ask about Roooby products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help.</p>
                    </div>
                    <div className="w-1/3 flex flex-col items-center justify-center gap-2 pr-16">
                        <button className="w-48 h-16 flex flex-row items-center justify-around bg-white rounded-xl">
                            <span>Try for Free</span>
                            <span>&gt;</span>
                        </button>
                        <p className="font-medium text-sm text-white">Full access. No credit card required.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};
export default Banner;