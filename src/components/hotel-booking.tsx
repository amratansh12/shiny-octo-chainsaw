import axios from "axios";
import { ArrowRight, HouseIcon, IndianRupee, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { DatePicker } from "./date-picker";
import { Input } from "./ui/input";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { Button } from "./ui/button";

type Hotel = {
  id: number;
  name: string;
  location: string;
  pricePerNight: number;
};

export const HotelBooking = () => {
  const params = useParams();
  const [hotel, setHotel] = useState<Hotel>();
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });
  const [adults, setAdults] = useState(2);

  useEffect(() => {
    const fetchHotel = async () => {
      const url = import.meta.env.VITE_BACKEND_URI;
      const response = await axios.get(`${url}/hotels/${params.hotelId}`);
      setHotel(response.data);
    };

    fetchHotel();
  }, [params]);

  const handleClick = () => {
    localStorage.setItem("booking", JSON.stringify({ hotel, date, adults }));
  };

  return (
    <div className="flex flex-col gap-2 p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mt-4">Booking Details</h1>
      <div className="flex flex-col gap-2 bg-accent shadow-sm p-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <HouseIcon size={18} className="text-rose-400" />
          Hotel: {hotel?.name}
        </h2>
        <p className="text-lg font-medium flex items-center gap-2">
          <MapPin size={18} className="text-red-400" />
          Location: {hotel?.location}
        </p>
        <p className="text-lg font-medium flex items-center gap-2">
          <IndianRupee size={18} className="text-rose-400" />
          Price per night: Rs. {hotel?.pricePerNight} per adult
        </p>
      </div>

      <div className="flex items-center justify-center mt-4">
        <div className="flex-1">
          <span>Select dates:</span>
          <DatePicker className="w-full" date={date} setDate={setDate} />
        </div>
        <div className="flex-1">
          <span>Enter number of adults:</span>
          <Input
            placeholder="Number of adults"
            className="w-full"
            value={adults}
            type="number"
            onChange={(e) => setAdults(parseInt(e.target.value))}
          />
        </div>
      </div>

      <Link to={`/hotel/${params.hotelId}/check-in`}>
        <Button className="w-full mt-8" onClick={handleClick}>
          Continue web check-in
          <ArrowRight />
        </Button>
      </Link>
    </div>
  );
};
