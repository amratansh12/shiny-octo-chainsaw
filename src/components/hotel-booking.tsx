import axios from "axios";
import { HouseIcon, IndianRupee, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

type Hotel = {
  id: number;
  name: string;
  location: string;
  pricePerNight: number;
};

export const HotelBooking = () => {
  const params = useParams();
  const [hotel, setHotel] = useState<Hotel>();

  useEffect(() => {
    const fetchHotel = async () => {
      const url = import.meta.env.VITE_BACKEND_URI;
      const response = await axios.get(`${url}/hotels/${params.hotelId}`);
      setHotel(response.data);
    };

    fetchHotel();
  }, [params]);

  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 className="text-3xl font-semibold">Enter details</h1>
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
    </div>
  );
};
