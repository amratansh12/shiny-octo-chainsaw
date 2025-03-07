import { Link } from "react-router";
import { Button } from "./ui/button";
import { Search as SearchIcon } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="bg-primary flex items-center justify-between px-12 py-4">
      <Link to="/">
        <h1 className="text-white text-2xl font-bold">Xipper</h1>
      </Link>
      <Link to="/search">
        <Button variant="secondary">
          <SearchIcon size={4} />
          Search
        </Button>
      </Link>
    </div>
  );
};
