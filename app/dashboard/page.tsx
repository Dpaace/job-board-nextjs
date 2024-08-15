import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Gemello | Dashboard"
}


export default async function Page() {
    return(
        <h1>
            Nav to be included in the left side.
            <br />
            Dashboard Home Page
        </h1>
    )
}