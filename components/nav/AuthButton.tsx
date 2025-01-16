import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import {motion} from 'framer-motion';

export default async function AuthButton() {
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

  return user ? (
    <div 
    className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <button className="btn btn-secondary btn-sm">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="btn btn-secondary btn-sm"
    >
      Login
    </Link>
  );
}
