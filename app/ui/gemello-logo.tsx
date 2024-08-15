import { lusitana } from "@/app/ui/fonts";
import { GlobeAltIcon } from "@heroicons/react/16/solid";
export default function GemelloLogo() {
    return (
        <div
            className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
        >
            <GlobeAltIcon className="h-12 w-12" />
            <p className="text-[36px]">
                JobBoard
            </p>
        </div>
    )
}