import BookViewer from "@/components/BookViewer"

import data from "@/../public/data.json"

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <BookViewer data={data} />
    </div>
  );
}
