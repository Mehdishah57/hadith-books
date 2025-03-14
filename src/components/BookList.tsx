"use client"

import { useAppSelector } from "@/lib/hooks"
import Link from "next/link"

const BookList = () => {
    const { bookSearch } = useAppSelector(state => state.app)

    const links = [
        { label: "Al-Fehrist By Shaykh Tusi", model: "gpt-4o-mini", link: "/al-fehrist-tusi" },
        { label: "Al-Muqanna By Shaykh Sadooq", model: "gpt-4o", link: "/al-muqanna" },
        { label: "Al-Istibsar Volume 1 By Shaykh Tusi",  model: "gemini-2.0-flash", link: "/al-istibsar/v1" },
        // { label: "Al-Istibsar Volume 2 By Shaykh Tusi",  model: "gemini-2.0-flash", link: "/al-istibsar/v2" },
        // { label: "Al-Istibsar Volume 3 By Shaykh Tusi",  model: "gemini-2.0-flash", link: "/al-istibsar/v3" },
        // { label: "Al-Istibsar Volume 4 By Shaykh Tusi",  model: "gemini-2.0-flash", link: "/al-istibsar/v4" }
        { label: "Al-Mahasin Volume 1 By Al-Barqi",  model: "gemini-2.0-flash", link: "/al-mahasin/v1" },
        { label: "Al-Mahasin Volume 2 By Al-Barqi",  model: "gemini-2.0-flash", link: "/al-mahasin/v2" },
        { label: "Rijal Al-Nijashi",  model: "gemini-2.0-flash", link: "/rijal-nijashi" },
        { label: "Ikhtyar Marifat Rijal - Rijal Kashi Volume 1",  model: "gemini-2.0-flash", link: "/rijal-kashi/v1" },
        { label: "Ikhtyar Marifat Rijal - Rijal Kashi Volume 2",  model: "gemini-2.0-flash", link: "/rijal-kashi/v2" },
    ]

    return (
        <div className="flex gap-4 flex-wrap justify-center items-center mt-8 px-2">
            {links
            .filter(link => !bookSearch || (link.label?.toLowerCase().includes(bookSearch?.toLowerCase()) || link.model?.toLowerCase().includes(bookSearch?.toLowerCase())))
            .map(link => <Link href={link.link} key={link.label} className="flex flex-col p-2 rounded-md transition-all duration-150 hover:scale-105">
                <div className="text-xl text-gray-700">
                    {link.label}
                </div>
                <div className="text-gray-400 italic">
                    {link.model}
                </div>
            </Link>)}
        </div>
    )
}

export default BookList
