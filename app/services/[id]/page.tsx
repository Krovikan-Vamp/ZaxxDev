'use client';
import { reactIconFromName } from '@/lib/constants';
import React, { cache } from 'react';
import * as constants from '@/lib/constants';
import { createClient } from '@/lib/supabase/client';
import { Database } from '@/lib/supabase/types';
import ServiceLoadingSkeleton from '@/components/loading/service';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

const ServicesPage = ({ params }: { id: string; }) => {
    const [loading, setLoading] = React.useState(true);
    const [article, setArticle] = React.useState({});
    const [deployedWithIcons, setDeployedWithIcons] = React.useState<IconComponent[]>([]);
    const [builtWithIcons, setBuiltWithIcons] = React.useState<IconComponent[]>([]);

    type IconComponent = {
        name: string;
        icon: React.FC<any>;
    };

    const fetchData = cache(async () => {
        const supabase = createClient();
        const { data, error } = await supabase.from('services').select('*').eq('id', params.id).maybeSingle();
        if (error) {
            console.error(error);
        }

        // console.log('data:', data)
        return data;
    });

    React.useEffect(() => {
        const loadData = async () => {
            const response = await fetchData();
            setArticle(response);

            console.log('article:', response);

            // Create an array of icon components
            const deployedIconComponents = response.deployed_with_icons.map(name => {
                return { "name": name, "icon": reactIconFromName(name) };
            });
            setDeployedWithIcons(deployedIconComponents);

            const builtIconComponents = response.built_with_icons.map(name => {
                return { "name": name, "icon": reactIconFromName(name) };
            });
            setBuiltWithIcons(builtIconComponents);

            setLoading(false);
        };

        loadData();
    }, []);

    if (loading) {
        return <ServiceLoadingSkeleton />;
    }

    return (
        <section className="min-h-screen">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="sm:text-3xl text-2xl font-medium title-font mb-2 md:w-2/5">
                    <h2>{article.title}</h2>
                    <h3 className='mt-8 text-xl'>Deployed With:</h3>
                    <div className="flex flex-row flex-wrap">
                        {deployedWithIcons.map((Icon, index) => (
                            <div data-tip={Icon.name} className="tooltip tooltip-bottom mr-4 capitalize">
                                <Icon.icon key={index} className="inline-block w-6 h-6" />
                            </div>
                        ))}
                    </div>
                    <h3 className='mt-8 text-xl'>Built With:</h3>
                    <div className="flex flex-row flex-wrap">
                        {builtWithIcons.map((Icon, index) => (
                            <div data-tip={Icon.name} className="tooltip tooltip-bottom mr-4 capitalize">
                                <Icon.icon key={index} className="inline-block w-6 h-6" />
                            </div>
                        ))}
                    </div>
                </div>
                <main className="md:w-3/5 md:pl-6">
                    <article className="prose">{article.body_content}</article>
                    <div className="flex md:mt-4 mt-6">
                        <Link href={`/services/${params.id}/edit`} className="inline-flex btn btn-ghost"><FaEdit /></Link>
                        <a className="btn-secondary btn btn-primary inline-flex items-center ml-4">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24" >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default ServicesPage;