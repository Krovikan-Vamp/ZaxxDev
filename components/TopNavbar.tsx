import React from 'react';
import AuthButton from './AuthButton';
import {LogoButton} from './LogoButton';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export const TopNavbar = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <div className="navbar bg-base-100 z-10">
      <div className="navbar-start">
        {user &&
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/kobargo">Dashboard</Link></li>
              <li><a>Ticketing</a></li>
              <li>
                <a>Logs</a>
                <ul className="p-2">
                  <li><Link href={`/kobargo/logs`}>All</Link></li>
                  <li><a>GPTicketSolver</a></li>
                  <li><a>InfraPEEK Meraki Sync</a></li>
                </ul>
              </li>
            </ul>
          </div>
        }
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <LogoButton />
      </div>
      <div className="navbar-center hidden lg:flex">
        {user &&
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/kobargo">Dashboard</Link></li>
            <li><a>Ticketing</a></li>
            <li>
              <details>
                <summary>Logs</summary>
                <ul className="p-2 z-10">
                  <li><a href="/kobargo/logs">All</a></li>
                  <li><a>GPTicketSolver</a></li>
                  <li><a>InfraPEEK Meraki Sync</a></li>
                </ul>
              </details>
            </li>
          </ul>
        }
      </div>
      <div className="navbar-end">
        <AuthButton />
      </div>
    </div>
  );
};