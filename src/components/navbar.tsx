import { Link } from "react-router";
import { Button } from "./ui/button";
import { HouseIcon } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="bg-primary flex items-center justify-between px-12 py-4">
      <Link to="/">
        <h1 className="text-white text-2xl font-bold">Xipper</h1>
      </Link>
      <Link to="/">
        <Button variant="secondary" size="sm">
          <HouseIcon size={4} />
          Home
        </Button>
      </Link>
    </div>
  );
};
