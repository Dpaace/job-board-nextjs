import Link from 'next/link';
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Gemello | Jobs"
}

interface Job {
    id: number;
    attributes: {
        vacancy: string;
        recruiter: string;
        description: { type: string; children: { text: string }[] }[];
        email: string;
        salary: number;
        image: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
    };
}

async function getJobs() {
    const res = await fetch('http://localhost:1337/api/jobs?populate=*');
    const data = await res.json();
    return data.data;
}

export default async function JobPage() {
    const jobs = await getJobs();
    const MAX_LENGTH = 250;

    return (
        <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-4/5">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {jobs.map((job: Job) => (
                    <Link key={job.id} href={`/dashboard/jobs/${job.id}`} className="group">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                            <div className="p-6">
                                <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
                                    <span className="text-gray-900 hover:text-purple-700">{job.attributes.vacancy}</span>
                                </h2>
                                <div className="flex items-center text-gray-700">
                                    <div className="ml-2">
                                        <p className="text-sm font-semibold text-gray-900">{job.attributes.recruiter}</p>
                                        <p className="text-sm text-gray-600">{job.attributes.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
                <Link href="/" className="px-3 py-2 text-indigo-500 border border-indigo-500 border-solid hover:text-black md:w-auto">
                    Home
                </Link>
            </div>
        </section>
    );
}
