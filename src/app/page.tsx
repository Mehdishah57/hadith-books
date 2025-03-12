import Link from "next/link"

export default function Home() {
  const links = [
    { label: "Al-Fehrist By Shaykh Tusi", model: "gpt-4o-mini", link: "/al-fehrist-tusi" },
    { label: "Al-Muqanna By Shaykh Sadooq", model: "gpt-4o", link: "/al-muqanna" },
    { label: "Al-Istibsar By Shaykh Tusi",  model: "gemini-2.0-flash", link: "/al-istibsar/v1" }
  ]

  return (
    <div className="w-full h-screen overflow-hidden flex gap-4 flex-wrap justify-center items-center">
      {links.map(link => <Link href={link.link} key={link.label} className="flex flex-col p-2 rounded-md transition-all duration-150 hover:scale-105">
        <div className="text-xl text-gray-700">
          {link.label}
        </div>
        <div className="text-gray-400 italic">
          {link.model}
        </div>
      </Link>)}
    </div>
  );
}
