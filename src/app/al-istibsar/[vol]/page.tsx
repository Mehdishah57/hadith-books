import volume1 from "@/../public/istibsar1.json"

import Bookv2, { PageData } from "@/components/Bookv2"

export default async function AlIstibsar({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
    const vol = (await searchParams).vol
    let data: PageData[] = [];

    if(vol === "v1") data = volume1
    else data = volume1

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Bookv2 data={data} />
        </div>
    )
}
