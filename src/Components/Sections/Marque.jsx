import { Separator } from "@heroui/react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  const marqueeData = [
    {
      id: 1,
      label: "Apps Built Today",
      value: "1,204",
    },
    {
      id: 2,
      label: "Active Builders",
      value: "50,382",
    },
    {
      id: 3,
      label: "Avg Rating",
      value: "4.9 / 5",
    },
    {
      id: 4,
      label: "Countries",
      value: "132",
    },
    {
      id: 5,
      label: "Avg Deploy Time",
      value: "58s",
    },
    {
      id: 6,
      label: "Uptime SLA",
      value: "99.98%",
    },
    {
      id: 7,
      label: "Lines Generated",
      value: "100%",
    },
  ];
  return (
    <div className=" bg-black border-t-2 border-gray-700/50 py-5">
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {marqueeData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-around gap-5 px-10 text-white text-center border-r-2 border-white/50"
          >
            <h1 className="text-lg font-bold text-gray-400">{item.label}</h1>
            <p className="gradientText text-center flex items-center justify-center text-lg font-bold">
              {item.value}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Marque;
