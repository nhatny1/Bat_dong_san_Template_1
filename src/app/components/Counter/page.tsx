import { useEffect, useState } from "react";

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 50));

    const counter = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <div className="relative flex items-center justify-center h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-42 lg:w-42">
      <span className="text-5xl sm:text-6xl md:text-7xl text-brown-500">
        {count}
      </span>
      <span className="absolute text-xl sm:text-xl md:text-2xl text-white">
        {label}
      </span>
    </div>
  );
};

export default Counter;
