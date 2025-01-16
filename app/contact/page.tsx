import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { SubmitButton } from './submit-button';
import { processContactFormSubmission } from '@/lib/actions';
import TextArea from '@/components/input/TextArea';


export default async function ContactPage() {
    const supabase = createClient();
    const { data: { user }, } = await supabase.auth.getUser();
    if (!user) redirect('/login'); // Redirect to sign-in if not authenticated

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex-1 flex flex-col w-full px-8 sm:max-w-lg justify-center gap-2 bg-base-300 card py-8">
                <h1 className='text-2xl font-bold'>Contact Us</h1>
                <hr className='mb-4' />
                <p className='mb-4'>Please include your name, email, and a brief message. We will get back to you as soon as possible.</p>
                <form className="flex flex-col space-y-4">
                    <label htmlFor="message" className="text-md -mb-12">
                        Message
                    </label>
                    <TextArea
                        inputClassName='h-32'
                        className="w-full"
                    />
                    <SubmitButton
                        formAction={processContactFormSubmission}
                        className="btn btn-primary text-md hover:scale-110"
                    >
                        Send Message
                    </SubmitButton>
                </form>
            </div>
        </div>
    );
}
