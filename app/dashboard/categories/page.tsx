import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Gemello | Categories"
}

interface Category {
    id: number;
    attributes: {
        name: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}


export default async function CategoriesPage() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Categories</h1>
        </div>
    );
}
