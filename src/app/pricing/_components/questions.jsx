'use client';
import { useState } from 'react';

const Questions = () => {
    const [open, setOpen] = useState(false);
    let btn = '+';
    if (open) { btn = '-'; }
    
    return (
        <div className='w-full py-8 border-t-2 border-[#787878]'>
            <div className="flex flex-row items-center justify-between gap-20">
                <h3 className="flex items-center font-medium text-3xl leading-10 tracking-tighter">How Does Roooby CRM Compare To The Competition?</h3>
                <button
                    className=" flex justify-center items-center text-4xl pb-1"
                    onClick={() => setOpen((prev) => !prev)}
                >{btn}</button>
            </div>
            {open && <div className="pt-4 flex flex-row items-start">
                <p className="font-normal text-lg leading-7">Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.</p>
            </div>}
        </div>
    );
};
export default Questions;