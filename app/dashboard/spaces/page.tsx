import Link from 'next/link';
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Gemello | Spaces"
}

interface Job {
    id: number;
    attributes: {
        title: string;
        owner: string;
        description: { type: string; children: { text: string }[] }[];
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

// async function getJobs() {
//     const res = await fetch('http://localhost:1337/api/jobs?populate=*');
//     const data = await res.json();
//     return data.data;
// }

export default async function JobPage() {
    // const jobs = await getJobs();


    return (
        <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-4/5">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                <h1>This is the All Spaces Space</h1>
                {/* {jobs.map((job: Job) => (
                    <Link key={job.id} href={`/dashboard/spaces/${job.id}`} className="group">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                            <div className="p-6">
                                <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
                                    <span className="text-gray-900 hover:text-purple-700">{job.attributes.title}</span>
                                </h2>
                                <div className="flex items-center text-gray-700">
                                    <div className="ml-2">
                                        <p className="text-sm font-semibold text-gray-900">{job.attributes.owner}</p>
                                        <p className="text-sm text-gray-600">{job.attributes.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))} */}
            </div>


        </section>
    );
}
