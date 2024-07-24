import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between font-medium items-center">
        <span className="text-gray-500">Birthdays</span>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="">
          <Image
            src="https://images.pexels.com/photos/27101095/pexels-photo-27101095/free-photo-of-river-in-barren-canyon-in-the-usa.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Bruce wayne</span>
        </div>
        <div className="flex gap-3 justify-end">
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMING BIRTHDAYS */}
      <div className="p-4 bg-slate-100 rounded-lg items-center flex gap-4">
        <Image src="/gift.png" alt="" width={24} height={24} />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">
            See other 13 people who have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
