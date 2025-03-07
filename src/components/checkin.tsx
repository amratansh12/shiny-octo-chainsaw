import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Calendar1Icon, GroupIcon, HouseIcon, UsersIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Booking = {
  hotel: {
    id: number;
    name: string;
    location: string;
    pricePerNight: number;
  };
  date: {
    from: Date;
    to: Date;
  };
  adults: number;
};

export const Checkin = () => {
  const [booking, setBooking] = useState<Booking>();

  useEffect(() => {
    setBooking(JSON.parse(localStorage.getItem("booking")!));
  }, []);

  if (!booking) {
    return null;
  }

  return (
    <div className="flex flex-col max-w-3xl p-4 mx-auto mt-4">
      <h1 className="text-3xl font-semibold">Check-in Details</h1>
      <div className="flex flex-col gap-2 bg-accent shadow-sm p-4 mt-2">
        <h1 className="text-xl font-semibold flex items-center gap-2">
          <HouseIcon size={20} className="text-rose-400" />
          {booking.hotel.name} - {booking.hotel.location}
        </h1>
        <h2 className="font-medium text-lg flex items-center gap-2">
          <Calendar1Icon size={20} className="text-rose-400" />
          Dates: {format(booking.date.from, "LLL dd, y")} -{" "}
          {format(booking.date.to, "LLL dd, y")}
        </h2>
        <h2 className="font-medium text-lg flex items-center gap-2">
          <UsersIcon size={20} className="text-rose-400" />
          Adults: {booking.adults}
        </h2>
      </div>

      <div className="flex flex-col mt-8 space-y-8">
        <h1 className="text-2xl font-medium underline">Aadhaar Details</h1>

        {new Array(booking.adults).fill(0).map((_, index) => (
          <div className="flex flex-col" key={index}>
            <p className="text-md">Enter Aadhaar for member {index}</p>
            <Input key={index} placeholder="Enter Aadhaar Number" />
            <Button className="w-fit mt-2">
              <GroupIcon size={18} className="mr-2" />
              Add Aadhaar
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
