import data from "@/../public/fehrist.json"

import Bookv2 from "@/components/Bookv2"

export default function AlFehristTusi() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Bookv2 data={data} />
        </div>
    )
}
