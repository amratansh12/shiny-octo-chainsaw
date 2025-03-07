import { Routes, Route } from "react-router";

// Components
import { Home } from "./components/home";
import { Login } from "./components/login";
import { Navbar } from "./components/navbar";
import { Signup } from "./components/signup";
import { Search } from "./components/search";
import { Checkin } from "./components/checkin";
import { HotelBooking } from "./components/hotel-booking";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/hotel/:hotelId" element={<HotelBooking />} />
        <Route path="/hotel/:hotelId/check-in" element={<Checkin />} />
      </Routes>
    </>
  );
};

export default App;
