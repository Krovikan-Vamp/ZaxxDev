'use client';
import { motion } from 'framer-motion';
import * as constants from '@/lib/constants';
import Link from 'next/link';
import { NavLink } from '@/lib/types';

export function HorizontalNavButtons() {
    const NavLinks = constants.NavLinks;

    const linksHtml = NavLinks.map((link: NavLink, index: number) => {
        return (<motion.li
            transition={{delay: index * 0.0625, duration: .25}}
            animate={{ x:  0, opacity: 1 }}
            initial={{ x: 20, opacity: 0 }}
            
            key={link.href}>
            <Link href={link.href}
                className={`${!link.active ? `disabled` : ``} btn btn-ghost btn-sm mx-4`}>
                {link.linkText}
            </Link>
        </motion.li>);
    });

    return linksHtml;
}

const NavButtons = () => {
  return (
    <div>NavButtons</div>
  )
}

export default NavButtons