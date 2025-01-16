import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function processContactFormSubmission(formData: FormData) {
    'use server';
    const message = formData.get('message')?.toString();
    console.log(message);
    const supabase = createClient();

    // Get user information from Supabase
    const { data: { user }, } = await supabase.auth.getUser();
    if (!user) redirect('/auth/signin') // Redirect to sign-in if not authenticated

        
    // Insert the message into the database
    const { error } = await supabase.from('contact_messages').insert([
        {
            user_id: user.id,
            message,
        },
    ]);


    if (error) {
        console.error(error);
        return { success: false, error: 'Your message couldn\'t be sent' };
    }

    console.log(`sent message "${message}" from ${user.id}`);

    return redirect('/thanks');
}

export const signInWithUsernamePassword = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/contact");
};

export const signInWithGithub = async () => {
    "use server";
    const supabase = createClient();
    const origin = headers().get(`origin`);
    console.log(origin);
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
            'redirectTo': `${origin}/auth/callback?next=/contact`
        }
    });

    if (data.url) redirect(data.url); // Login was successful
    if (error) return redirect("/login?message=Could not authenticate user"); // Error present in signin method ^

    let sessionToken = await supabase.auth.getUser();
    if (!sessionToken) return redirect(`/login?message=${encodeURIComponent(`Could not get session token following sign in.`)}`);

    return null;
};

export const signInWithApple = async () => {
    "use server";
    const supabase = await createClient();
    const origin = await headers().get(`origin`);
    console.log(origin);
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'apple',
        options: {
            'redirectTo': `${origin}/auth/callback?next=/contact`
        }
    });

    if (data.url) redirect(data.url); // Login was successful
    if (error) return redirect("/login?message=Could not authenticate user"); // Error present in signin method ^

    let sessionToken = await supabase.auth.getUser();
    if (!sessionToken) return redirect(`/login?message=${encodeURIComponent(`Could not get session token following sign in.`)}`);

    return null;
};

export const signInWithGoogle = async () => {
    "use server";
    const supabase = createClient();
    const origin = headers().get(`origin`);
    console.log(origin);
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            'redirectTo': `${origin}/auth/callback?next=/contact`
        }
    });

    if (data.url) redirect(data.url); // Login was successful
    if (error) return redirect("/login?message=Could not authenticate user"); // Error present in signin method ^

    let sessionToken = await supabase.auth.getUser();
    if (!sessionToken) return redirect(`/login?message=${encodeURIComponent(`Could not get session token following sign in.`)}`);

    return null;
};

export const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${origin}/auth/callback`,
        },
    });

    if (error) {
        return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
};