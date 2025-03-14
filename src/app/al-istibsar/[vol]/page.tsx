import volume1 from "@/../public/istibsar1.json"
import volume2 from "@/../public/istibsar2.json"
import volume3 from "@/../public/istibsar3.json"
import volume4 from "@/../public/istibsar4.json"

import Bookv2, { PageData } from "@/components/Bookv2"

export default async function AlIstibsar({
    params,
  }: {
    params: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
    const vol = (await params).vol
    let data: PageData[] = [];

    if(vol === "v1") data = volume1
    else if(vol === "v2") data = volume2
    else if(vol === "v3") data = volume3
    else data = volume4

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Bookv2 data={data} />
        </div>
    )
}
