import Link from "next/link";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='m-auto w-screen h-auto bg-[#FFFFFF]'>
            <div className="pt-12 m-auto max-w-[1140px] h-auto flex flex-col items-center justify-between">
                {/* Upper part */}
                <div className="pb-12 flex flex-row w-full h-auto justify-between text-xs">
                    {/* ROOBY LOGO */}
                    <div className="flex flex-col w-[263px] gap-10">
                        <span className="font-bold text-2xl leading-6">Roooby</span>
                        <span className="font-medium text-xs leading-6">We built an elegant solution.
                            Our team created a fully integrated sales and marketing solution for SMBs
                        </span>
                        <div className="flex flex-row items-center justify-start gap-4">
                            <AiFillTwitterCircle size={25} color="#55ACEE" />
                            <FaFacebook size={25} color="#3B5998" />
                            <FaLinkedin size={25} color="#0976B4" />
                        </div>
                    </div>
                    {/* COMPAANY */}
                    <div className="flex flex-col leading-10">
                        <span className="font-bold text-base">Company</span>
                        <Link href="#">About</Link>
                        <Link href="#">Pricing</Link>
                        <Link href="#">Jobs</Link>
                        <Link href="#">Blog</Link>
                        <Link href="#">Careers</Link>
                    </div>
                    {/* PRODUCTS */}
                    <div className="flex flex-col leading-10">
                        <span className="font-bold text-base">Products</span>
                        <Link href="#">Sales software</Link>
                        <Link href="#">Features</Link>
                        <Link href="#">Privacy</Link>
                        <Link href="#">Marketplace</Link>
                        <Link href="#">Status</Link>
                        <Link href="#">API</Link>
                    </div>
                    {/* DISCOVER */}
                    <div className="flex flex-col leading-10">
                        <span className="font-bold text-base">Discover</span>
                        <Link href="#">Partner Program</Link>
                        <Link href="#">Get our newsletter</Link>
                        <Link href="#">Sales Pipeline</Link>
                        <Link href="#">What is CRM?</Link>
                        <Link href="#">CRM Comparison</Link>
                        <Link href="#">Resources</Link>
                    </div>
                    {/* HELP CENTER */}
                    <div className="flex flex-col leading-10">
                        <span className="font-bold text-base">Help Center</span>
                        <Link href="#">Community</Link>
                        <Link href="#">Knowledge Base</Link>
                        <Link href="#">Academy</Link>
                        <Link href="#">Support</Link>
                    </div>
                </div>
                {/* Down part */}
                <div className="py-8 w-full h-auto flex flex-row items-center justify-between border-t-[1px] border-[#] text-xs">
                    <span>&copy; Copyright 2024</span>
                    <div className=" w-1/3 flex flex-row justify-around">
                        <Link href="#">Terms of Service</Link>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Cookies</Link>
                    </div>
                    <button className="flex flex-row items-center gap-1">
                        <TbWorld />
                        <span>English</span>
                        <MdKeyboardArrowDown />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Footer;