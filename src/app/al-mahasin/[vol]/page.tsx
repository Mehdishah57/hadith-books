import volume1 from "@/../public/mahasin1.json"
import volume2 from "@/../public/mahasin2.json"

import Bookv2, { PageData } from "@/components/Bookv2"

export default async function AlMahasin({
    params,
  }: {
    params: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
    const vol = (await params).vol
    let data: PageData[] = [];

    if(vol === "v1") data = volume1
    else data = volume2

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Bookv2 data={data} />
        </div>
    )
}
