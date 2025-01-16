import { SubmitButton } from "./submit-button";
import { FaApple, FaGithub, FaGoogle } from "react-icons/fa";
import { signInWithGithub, signInWithApple, signInWithGoogle, signInWithUsernamePassword, signUp } from "@/lib/actions";

export default function Login({ searchParams, }: { searchParams: { message: string; }; }) {


    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex-1 flex flex-col w-full px-8 sm:max-w-lg justify-center gap-2 bg-base-300 card py-8">
                <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground ">
                    <h2 className="text-2xl font-bold">Login</h2>
                    <hr className="mb-6" />
                    <label className="text-md" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        name="email"
                        placeholder="you@example.com"
                        required
                    />
                    <label className="text-md" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        required
                    />
                    <SubmitButton
                        formAction={signInWithUsernamePassword}
                        className="btn btn-primary text-md hover:scale-110 mb-3"
                    >
                        Sign In
                    </SubmitButton>
                    <SubmitButton
                        formAction={signUp}
                        className="btn bg-base-200 text-md mb-2 hover:scale-110"
                    >
                        Sign Up
                    </SubmitButton>
                    {searchParams?.message && (
                        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                            {searchParams.message}
                        </p>
                    )}
                </form>
                <h2 className="text-2xl font-bold">Provider Sign In</h2>
                <hr className="mb-4" />
                <form>
                    <div className="flex flex-row flex-wrap justify-evenly transition-all">
                        <SubmitButton className="btn border-2 border-base-100 hover:scale-110" formAction={signInWithGithub}><FaGithub size={20} /></SubmitButton>
                        <SubmitButton className="btn border-2 border-base-100 hover:scale-110" formAction={signInWithGoogle}><FaGoogle size={20} /></SubmitButton>
                        <div className="tooltip" data-tip="Coming soon!"><SubmitButton className="btn-disabled btn border-2 border-base-100" formAction={signInWithApple}><FaApple size={20} /></SubmitButton></div>
                    </div>
                </form>
            </div>
        </div>
    );
}
