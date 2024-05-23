const Contact = () => {
    return (
        <div className='m-auto w-screen h-auto bg-[#F4F4F4]'>
            <div className="pt-12 m-auto max-w-[1140px] h-auto flex flex-col items-start justify-between gap-10">
                <h1 className="w-1/2 font-bold text-6xl leading-normal tracking-tight">Get in touch with our lovely team</h1>
                <div className="w-full h-auto flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-full h-[600px] flex-1">
                        <p className="font-bold text-lg">Rooby Techologies</p>
                        <p className="text-lg text-[#787878]">Plovdiv, Bulgaria, bul Vasil Levski 96</p>
                        <iframe className="object-cover border-[#787878] border-2 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.424543280382!2d24.740869476432536!3d42.162599647553286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd18de452a06b%3A0x838e93baa43989e5!2z0KHQtdCy0LXRgNC10L0sINGD0LsuIOKAntCS0LDRgdC40Lsg0JvQtdCy0YHQutC44oCcIDk2LCA0MDAzINCf0LvQvtCy0LTQuNCy!5e0!3m2!1sbg!2sbg!4v1716278234703!5m2!1sbg!2sbg"
                            width="500"
                            height="350"
                            allowFullScreen="false"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <div className="pt-4 flex w-full h-auto items-start justify-between">
                                <div className="h-full pl-4 flex flex-col items-start justify-between border-l-2 border-[#787878]">
                                    <span className="font-bold text-lg">General</span>
                                    <span className="text-[#787878] font-medium text-lg">hello@me.com</span>
                                </div>
                                <div className="h-full pl-4 flex flex-col items-start justify-between border-l-2 border-[#787878]">
                                    <span className="font-bold text-lg">Support</span>
                                    <span className="text-[#787878] font-medium text-lg">support@me.com</span>
                                </div>
                            </div>
                    </div>
                    <form action="#" className="ml-32 flex flex-col flex-1 items-start justify-center h-[600px] gap-8">
                        <input type="text" name="name" placeholder="Your Name" className="pl-4 w-full h-16 bg-white" />
                        <input type="text" name="email" placeholder="Your Email" className="pl-4 w-full h-16 bg-white" />
                        <input type="textarea" name="message" placeholder="Your Message" className="pl-4 w-full h-32 bg-white" />
                        <button className="p-4 self-start bg-green-600 text-white text-lg font-bold"> Send message   &gt;</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Contact;
