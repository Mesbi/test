import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return <Link href="/" classname="flex items-center space-x-2">
        <Image src=".\tecaluga-logo.svg" alt="Logo" width={260} height={160} />
        <span className="hidden sm:inline-block font-extrabold text-3xl text-gray-700">

        </span>
    </Link>
}