import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

export const Search = () => {
  return (
    <div className="max-w-2xl mx-4 md:mx-auto py-16">
      <h1 className="text-2xl font-semibold">Search Hotels</h1>
      <div className="relative">
        <Input placeholder="Search famous hotels..." className="mt-4" />
        <SearchIcon
          size={20}
          className="absolute top-2 right-2 text-muted-foreground"
        />
      </div>
    </div>
  );
};
