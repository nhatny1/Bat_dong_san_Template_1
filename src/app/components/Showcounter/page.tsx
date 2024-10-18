"use client";
import Counter from "../Counter/page";

export default function Showcounter() {
  return (
    <div className="flex justify-center items-center bg-nhay-nhay my-9">
      <div className="flex justify-center grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-8 lg:gap-10">
        <Counter end={120} label="Square Areas" />
        <Counter end={13} label="Bedrooms" />
        <Counter end={11} label="Bathrooms" />
        <Counter end={15} label="Rooms" />
        <Counter end={12} label="Parking" />
        <Counter end={17} label="Floor" />
      </div>
    </div>
  );
}
