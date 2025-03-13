import SearchBar from "@/components/SearchBar"
import BookList from "@/components/BookList"

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <SearchBar />
      <BookList />
    </div>
  );
}
