import React from 'react';
import AuthButton from './AuthButton';
import { LogoButton } from './LogoButton';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { NavLinks } from '@/lib/constants';
import { NavLink } from '@/lib/types';
import { HorizontalNavButtons } from './NavButtons';

export const TopNavbar = async () => {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const signOut = async () => {
        "use server";

        const supabase = await createClient();
        await supabase.auth.signOut();
        return redirect("/login");
    };

    return (
        <>
            <div id="navbar" className="navbar bg-base-300 z-10 fixed top-0 left-0 right-0 transition-transform duration-300">
                {/* NAV BEGINNING */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <ul className="">
                                    {NavLinks.map((link: NavLink) =>
                                        (<li key={link.href}><Link href={link.href} className={`${!link.active ? `disabled` : ``} btn btn-ghost`}>{link.linkText}</Link></li>)
                                    )}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <LogoButton />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-x-4">
                        <HorizontalNavButtons />
                    </ul>
                </div>
                <div className="navbar-end">
                    <AuthButton />
                </div>
            </div>

            <script dangerouslySetInnerHTML={{
                __html: `
                    let lastScrollTop = 0;
                    const navbar = document.getElementById('navbar');
                    const navbarHeight = navbar.offsetHeight;

                    window.addEventListener('scroll', function() {
                        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        if (scrollTop > lastScrollTop) {
                            // Scrolling down
                            if (scrollTop > navbarHeight) {
                                navbar.style.transform = 'translateY(-100%)';
                            }
                        } else if (scrollTop < lastScrollTop) {
                            // Scrolling up
                            navbar.style.transform = 'translateY(0)';
                        }
                        lastScrollTop = scrollTop;
                    });
                `
            }} />
        </>
    );
};
