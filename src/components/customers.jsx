import Link from "next/link";
import customersData from "@/api/serviceCustomers";
import CustomersCard from "@/ui/customersCard";

const Customers = () => {
    return (
        <div className='m-auto w-screen h-[800px] bg-[#F4F4F4] pt-32'>
            <div className="pt-2 m-auto max-w-[1140px] h-auto flex flex-col justify-center items-center gap-y-8">
                <div className="pb-12 w-full flex flex-row items-end justify-between">
                    <h1 className="max-w-xl font-bold text-5xl">We love our Customers and They love us too</h1>
                    <Link href="#" className="hover:underline">See all <span className="text-[#00CC61]">&gt;</span></Link>
                </div>
                <div className="w-full h-[500px] gap-16 flex flex-row items-start justify-around">
                    {customersData.map((customer) => (
                        <CustomersCard
                            key={customer.name}
                            portrait={customer.portrait}
                            name={customer.name}
                            job={customer.job}
                            desc={customer.desc}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Customers;