'use client';
import React, { useEffect, useState } from 'react';
import { cache } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useForm } from 'react-hook-form';
import TextArea from '@/components/input/TextArea';
import ServiceLoadingSkeleton from '@/components/loading/service';

const ServicesForm = ({ params }) => {
    const id = params.id;
    const { register, handleSubmit, setValue } = useForm();
    const [loading, setLoading] = useState(true);

    // Fetch the article from Supabase using the dynamic route `id`
    useEffect(() => {
        if (id) {
            const fetchArticle = cache(async () => {
                const supabase = createClient();
                const { data, error } = await supabase.from('services').select('*').eq('id', id).maybeSingle();

                if (error) {
                    console.error('Error fetching data:', error);
                }

                setLoading(false);
            });

            fetchArticle();
        } else if (id === null) {
            // Populate the form with `data` if available
            setValue('title', data.title || '');
            setValue('content', data.content || '');
            setValue('deployedWith', data.deployed_with_icons?.join(', ') || '');
            setValue('builtWith', data.built_with_icons?.join(', ') || '');
            setValue('shortDescription', data.short_description || '');

            setLoading(false);
        }
            setLoading(false);
    }, [id, setValue]);

    const handleFormSubmit = async (formData) => {
        setLoading(true);
        console.log(formData);
        const supabase = createClient();
        const userSession = await supabase.auth.getSession();

        let userId = userSession.data.session.user.id;

        if (!id) {
            const response = await supabase
                .from('services')
                .insert({
                    title: formData.title,
                    body_content: formData.message,
                    deployed_with_icons: formData.deployedWith.split(',').map((icon: string) => icon.trim()),
                    built_with_icons: formData.builtWith.split(',').map((icon: string) => icon.trim()),
                    user_id: userId,
                    short_description: formData.shortDescription
                });
        } else {
            const response = await supabase
                .from('services')
                .update({
                    title: formData.title,
                    body_content: formData.message,
                    deployed_with_icons: formData.deployedWith.split(',').map((icon: string) => icon.trim()),
                    built_with_icons: formData.builtWith.split(',').map((icon: string) => icon.trim()),
                    user_id: userId,
                    short_description: formData.shortDescription
                })
                .eq('id', id);
            if (response.error) {
                console.error('Error updating article:', response.error);
            }
        }

        setLoading(false);
    };

    if (loading) {
        return <ServiceLoadingSkeleton />;
    }

    return (
        <section className="min-h-screen">
            <form className="container px-5 py-24 mx-auto flex flex-wrap" onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="font-medium title-font mb-2 md:w-2/5">
                    <label htmlFor="title" className="block mb-2">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="bg-base-300 w-full border rounded p-2"
                    />

                    <h3 className="mt-6">Deployed With:</h3>
                    <input
                        type="text"
                        id="deployedWith"
                        name="deployedWith"
                        className="bg-base-300 w-full border rounded p-2 mb-4"
                        placeholder="Comma-separated values"
                    />

                    <h3 className="mt-4">Built With:</h3>
                    <input
                        type="text"
                        id="builtWith"
                        name="builtWith"
                        className="bg-base-300 w-full border rounded p-2"
                        placeholder="Comma-separated values"
                    />
                </div>

                <main className="md:w-3/5 md:pl-6">
                    <label htmlFor="message" className="block mb-2">Article Content</label>
                    <textarea
                        id="message"
                        placeholder="Article content goes here..."
                        className="textarea w-full h-48 bg-base-300"
                    />
                    <label htmlFor="shortDescription" className="block mb-2">Short Description</label>
                    <textarea
                        id="shortDescription"
                        placeholder="Short description goes here..."
                        className="textarea w-full h-48 bg-base-300"
                    />
                    <div className="flex md:mt-4 mt-6">
                        <button type="submit" className="inline-flex btn btn-primary">Update Article</button>
                    </div>
                </main>
            </form>
        </section>
    );
};

export default ServicesForm;
