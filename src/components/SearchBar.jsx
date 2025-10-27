export default function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="flex gap-3 w-full">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full bg-[#1A1F25] text-white border border-gray-600 
                   focus:border-[#35C2FF] focus:ring-1 focus:ring-[#35C2FF]
                   outline-none p-3 rounded-lg text-sm placeholder:text-gray-500"
      />

      <button
        onClick={onSearch}
        className="px-5 bg-[#35C2FF] hover:bg-[#1FA9E6] text-black font-medium rounded-lg
                   transition-all duration-200 active:scale-95"
      >
        Search
      </button>
    </div>
  );
}
