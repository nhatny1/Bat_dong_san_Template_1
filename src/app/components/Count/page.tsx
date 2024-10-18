"use client";
import Counter from "../Counter/page";

export default function Showcounter() {
  return (
    <div className="flex justify-center items-center my-9">
      <div className="flex justify-center grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-8 lg:gap-10">
        <Counter end={412} label="Square Areas" />
        <Counter end={312} label="Car Parking" />
        <Counter end={713} label="Apartments" />
        <Counter end={520} label="Rooms" />
      </div>
    </div>
  );
}
