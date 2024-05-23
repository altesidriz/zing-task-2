import NavLink from './navLink/navLink';

const Links = () => {
    const links = [
        {
            title: 'Product',
            path: '/product'
        },
        {
            title: 'Pricing',
            path: '/pricing'
        },
        {
            title: 'Company',
            path: '/company'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
    ];

    return (
        <div className="hidden md:flex items-center gap-5">
            {links.map((link => (
                <NavLink item={link} key={link.title} />
            )))}
        </div>
    );
};
export default Links;