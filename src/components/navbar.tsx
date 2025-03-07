import { Link } from "react-router";
import { Button } from "./ui/button";
import { House } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="bg-primary flex items-center justify-between px-12 py-4">
      <Link to="/">
        <h1 className="text-white text-2xl font-bold">Xipper</h1>
      </Link>
      <Link to="/">
        <Button variant="secondary" size="sm">
          <House size={2} />
          Home
        </Button>
      </Link>
    </div>
  );
};
