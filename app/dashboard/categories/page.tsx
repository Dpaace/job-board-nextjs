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

async function getCategories() {
    const res = await fetch('http://localhost:1337/api/categories');
    const data = await res.json();
    return data.data;
}

export default async function CategoriesPage() {
    const categories = await getCategories();
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Categories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((category: Category) => (
                    <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">

                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2 text-center">{category.attributes.name}</h2>
                            <p className="text-gray-500 text-sm text-center">Created: {new Date(category.attributes.createdAt).toLocaleDateString()}</p>
                            <p className="text-gray-500 text-sm text-center">Updated: {new Date(category.attributes.updatedAt).toLocaleDateString()}</p>
                            <p className="text-gray-500 text-sm text-center">Published: {new Date(category.attributes.publishedAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
