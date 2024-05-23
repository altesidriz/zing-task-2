import Link from "next/link";
import { ImSad } from "react-icons/im";
const NotFound = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-11 text-[#150050]'>
      <h1 className="font-bold text-6xl">Opps something went wrong</h1>
      <ImSad size={100} />
      <h2 className="font-bold text-6xl">404 Page Not Found!</h2>
      <p className="w-full flex items-center justify-center gap-8 font-medium text-xl">Let&apos;s try again
        <span className="flex items-center justify-center p-4 bg-[#150050] text-white rounded-lg">
          <Link href='/'>Go Home</Link>
        </span>
      </p>
    </div>
  );
};
export default NotFound;