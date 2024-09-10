import { Metadata } from "next"
import Link from "next/link";
import NewIndexPage from "../ui/gemello/newindex";

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

            {/* <Gemello /> */}
            <NewIndexPage />
        </div>


    );
}



