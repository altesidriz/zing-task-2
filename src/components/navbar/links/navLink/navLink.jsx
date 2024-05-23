'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const normalStyle = 'font-medium text-sm py-2';
const activeStyle = 'font-medium text-sm border-white border-b-2 py-2';

const NavLink = ({ item }) => {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <Link href={item.path}
         className={`${normalStyle} ${pathName===item.path && activeStyle}`}>
            {item.title}
        </Link>
    );
};
export default NavLink;