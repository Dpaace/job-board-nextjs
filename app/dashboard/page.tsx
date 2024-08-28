import { Metadata } from "next"
import Link from "next/link";
import Gemello from "../ui/gemello/gemello";

export const metadata: Metadata = {
    title: "Gemello | Dashboard"
}


// interface Gemello {
//     id: number;
//     attributes: {
//         title: string;
//         owner: string;
//         createdAt: string;
//         updatedAt: string;
//         publishedAt: string;
//     };
// }

// async function getGemello() {
//     const res = await fetch('http://localhost:1337/api/gemellos?populate=*');
//     const data = await res.json();
//     return data.data;
// }


export default async function Page() {

    // const gemello = await getGemello();
    // console.log("Gemello Data", gemello);
    return (

        <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl">
                Dashboard Home Page
            </h1>

            {/* <div className="flex flex-col w-full h-svh items-center">
                {gemello.map((content: Gemello) => (
                    <div key={content.id} className="flex flex-col items-center w-4/5 h-full bg-green-500 rounded-md my-5">
                        <div className="flex items-center gap-10">
                            <h1 className="font-bold text-3xl">{content.attributes.title}</h1>
                            <h2 className="font-medium text-2xl">By: {content.attributes.owner}</h2>
                        </div>
                        <p>Gemello WebGL Below:</p>
                    </div>
                ))}
            </div> */}

            <Gemello />

            <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
                <Link href="/" className="px-3 py-2 text-indigo-500 border border-indigo-500 border-solid hover:text-black md:w-auto">
                    Home
                </Link>
            </div>
        </div>


    );
}



