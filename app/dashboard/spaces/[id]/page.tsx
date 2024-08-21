import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import React from 'react';
import Image from 'next/image';


interface Job {
    id: number;
    attributes: {
        title: string;
        owner: string;
        description: BlocksContent;
        email: string;
        area: number;
        image: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
    };
}

// Fetch job details based on the ID
async function getJob(id: string): Promise<Job> {
    const res = await fetch(`http://localhost:1337/api/jobs/${id}?populate=*`);
    const data = await res.json();
    return data.data;
}

async function getJobData(id: string){
    const res = await fetch(`http://localhost:1337/api/jobs/${id}?populate=*`);
    const data = await res.json();
    return data.data;
}

export default async function JobDetailPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const job = await getJob(id);
    const jobdata = await getJobData(id);

    return (
        <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-4/5">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">{job.attributes.title}</h1>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Owner: {job.attributes.owner}</h2>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Description:</h2>
                    <BlocksRenderer content={jobdata.attributes.description} />
                    <p className="text-lg font-semibold text-gray-900 mb-4">Area: {job.attributes.area.toLocaleString()} sq feet</p>
                    <p className="text-lg text-gray-700 mb-4">Email: {job.attributes.email}</p>
                    {job.attributes.image.data && (
                        <Image
                            src={`http://localhost:1337${job.attributes.image.data.attributes.url}`}
                            alt={`Image for ${job.attributes.title}`}
                            width={500}
                            height={300}
                            quality={75}
                            className="rounded-lg"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}


