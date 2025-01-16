'use client';
import React from 'react';
import { createClient } from '@/lib/supabase/client';
import { cache } from 'react';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

const ServicesPage = () => {
    const [loading, setLoading] = React.useState(true);
    const [services, setServices] = React.useState([]);

    const fetchData = cache(async () => {
        const supabase = createClient();
        const { data, error } = await supabase.from('services').select('*');
        if (error) {
            console.error(error);
        }

        return data;
    });

    React.useEffect(() => {
        const loadData = async () => {
            const response = await fetchData();
            setServices(response);
            setLoading(false);
        };

        loadData();
    }, []);

    if (loading) {
        return <div className='skeleton h-32 w-32'></div>;
    }


    return (
        <div className='flex flex-row flex-wrap md:px-16 lg:px-36'>
            <Link href="/services/add" className="btn btn-ghost"><FaPlus /></Link>
            {services.map((service) => {
                console.log(service)
                return (<>

                    <div className="card bg-base-200 w-96 shadow-xl mr-4 md:h-38 lg:h-56 xl:h-72">
                        <div className="card-body">
                            <h2 className="card-title">{service.title}</h2>
                            <p className=' leading-relaxed'>{service.short_description}</p>
                            
                            <div className="card-actions justify-end">
                                <Link href={`/services/${service.id}`} className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </>);
            })}
        </div>
    );
};

export default ServicesPage;