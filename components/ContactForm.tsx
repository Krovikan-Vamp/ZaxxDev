import React from 'react';
import TextArea from './input/TextArea';
import { SubmitButton } from '@/app/contact/submit-button';
import { processContactFormSubmission } from '@/lib/actions';

const ContactForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex-1 flex flex-col w-full px-8 sm:max-w-lg justify-center gap-2 bg-base-300 card py-8">
                <h1 className='text-2xl font-bold'>Contact Us</h1>
                <hr className='mb-6' />
                <form className="flex flex-col space-y-4">
                    <label htmlFor="message" className="text-md -mb-12">
                        Message
                    </label>
                    <TextArea
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
};

export default ContactForm;