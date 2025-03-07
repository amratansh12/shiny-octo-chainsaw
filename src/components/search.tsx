import { useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { MapPin, SearchIcon } from "lucide-react";

// Components
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
      <div className="max-w-2xl md:mx-auto">
        <h1 className="text-2xl font-semibold">Search Hotels</h1>
        <div className="flex items-center justify-center mt-4">
          <Input
            placeholder="Hotels in Mussoorie, Nainital..."
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
          <div
            className="flex flex-col gap-2 bg-accent p-4 rounded-md shadow-sm relative"
            key={index}
          >
            <h2 className="font-medium text-xl">{hotel.name}</h2>
            <div className="flex items-center justify-center w-fit">
              <MapPin size={20} className="text-rose-400 mr-1" />
              <p>{hotel.location}</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Link className="flex-1" to={`/hotel/${hotel.id}`}>
                <Button className="w-full" size="sm">
                  Book now
                </Button>
              </Link>
              <p className="bg-primary-foreground border w-fit px-2 py-1 rounded-md">
                Rs. {hotel.pricePerNight} per night per adult
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
