import { Link } from "react-router";
import { Button } from "./ui/button";

export const Home = () => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center px-4 md:px-32 py-32">
      <h1 className="text-3xl font-semibold">Welcome to Xipper</h1>
      <p className="text-2xl font-medium text-muted-foreground">
        Your one stop solution for hotel bookings!
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Link to="/signup">
          <Button>Signup</Button>
        </Link>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/search">
          <Button variant="outline">Search Hotels</Button>
        </Link>
      </div>
    </div>
  );
};
