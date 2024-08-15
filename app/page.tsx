import Image from "next/image";
import Link from "next/link";
import Categories from "./dashboard/categories/page";

export default function Home() {
  return (
    <div>
      Integration with Headless CMS
      <br />

      <Link
        href="/dashboard">
        Goto Dashboard
      </Link>
    </div>
  );
}
