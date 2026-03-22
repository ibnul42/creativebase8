"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: string; // ISO date string
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-6 text-center justify-center backdrop-blur-2xl bg-white/50 text-black px-4 py-1">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label}>
          <p className="text-3xl font-bold">{value}</p>
          <p className="capitalize text-sm font-bold">{label}</p>
        </div>
      ))}
    </div>
  );
}
