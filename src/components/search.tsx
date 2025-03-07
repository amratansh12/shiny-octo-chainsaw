import { useState } from "react";
import axios from "axios";
import { SearchIcon } from "lucide-react";

// Components
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { HotelCard } from "./hotel-card";

type Hotel = {
  id: number;
  name: string;
  location: string;
  pricePerNight: number;
};

export const Search = () => {
  const [search, setSearch] = useState("");
  const [hotels, setHotels] = useState<Hotel[]>([]);

  const handleSearch = async () => {
    const url = import.meta.env.VITE_BACKEND_URI;
    if (!url) {
      return console.error("Backend URL not found");
    }

    const response = await axios.get(`${url}/hotels`);
    const filteredHotels = response.data.filter((hotel: Hotel) => {
      return hotel.location.toLowerCase().includes(search.toLowerCase());
    });
    setHotels(filteredHotels);
    console.log(hotels);
  };

  return (
    <div className="px-4 md:px-16 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold">Search Hotels</h1>
        <div className="flex items-center justify-center mt-4">
          <Input
            placeholder="Hotels in Manali, Goa..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-r-none"
          />
          <Button size="icon" className="rounded-l-none" onClick={handleSearch}>
            <SearchIcon size={20} className="text-white" />
          </Button>
        </div>
      </div>

      {/* Hotels listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-8">
        {hotels.map((hotel, index) => (
          <HotelCard hotel={hotel} index={index} />
        ))}
      </div>
    </div>
  );
};
