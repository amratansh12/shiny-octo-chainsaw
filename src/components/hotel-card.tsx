import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

type Hotel = {
  id: number;
  name: string;
  location: string;
  pricePerNight: number;
};

export const HotelCard = ({
  hotel,
  index,
}: {
  hotel: Hotel;
  index: number;
}) => {
  return (
    <div className="flex items-center justify-center bg-accent rounded-md shadow-sm">
      <div className="w-1/3 h-full bg-accent-foreground/50 rounded-l-md" />
      <div className="flex-1 flex flex-col gap-2 p-4" key={index}>
        <h2 className="font-medium text-xl">{hotel.name}</h2>
        <div className="flex items-center justify-center w-fit">
          <MapPin size={20} className="text-rose-400 mr-1" />
          <p>{hotel.location}</p>
        </div>
        <p>
          This is a beautiful hotel located in {hotel.location}. It is a perfect
          place to relax and enjoy your vacation. The hotel has all the
          amenities you need to make your stay comfortable.
        </p>
        <div className="flex items-center justify-between">
          <p className="bg-primary-foreground border w-fit px-2 py-1 rounded-md font-semibold">
            Rs. {hotel.pricePerNight} per night per adult
          </p>
          <p>
            Rating: <span className="text-rose-400 font-medium">4.5/5</span>
          </p>
        </div>

        <Link className="flex-1" to={`/hotel/${hotel.id}`}>
          <Button className="w-full" size="sm">
            Book now
          </Button>
        </Link>
      </div>
    </div>
  );
};
