"use client";
import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/router";
import Link from "next/link";

const supabase = createClient();

export default function Login({ searchParams }) {
  const router = useRouter();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (searchParams?.message) {
      setMessage(searchParams.message);
    }
  }, [searchParams]);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        router.push("/protected");
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [router]);

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      {message && (
        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
          {message}
        </p>
      )}

      <Auth
        supabaseClient={supabase}
        providers={["github"]}
        redirectTo={`${window.location.origin}/auth/callback`}
      />
    </div>
  );
}
