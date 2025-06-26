import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const countDownDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, expired: false });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center  -ml-8">
      {timeLeft.expired ? (
        <div className="text-3xl font-bold text-white bg-red-600 px-6 py-3 rounded-lg">
          EXPIRED
        </div>
      ) : (
        <div className="flex items-center gap-3 bg-teal-600 text-center  px-2 py-2 rounded-sm ">
          <TimeBlock value={timeLeft.days} label="Days" />
          <Colon />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <Colon />
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          <Colon />
          <TimeBlock value={timeLeft.seconds} label="Seconds" />
        </div>
      )}
    </div>
  );
};

const TimeBlock = ({ value, label }) => (
  <div className="flex flex-col items-center justify-start min-w-[60px]">
    <div className="text-xs  text-white font-bold">{label}</div>
    <div className="text-3xl font-semibold text-black">{String(value).padStart(2, '0')}</div>
  </div>
);

const Colon = () => <div className="text-xl font-bold text-red-500">:</div>;

export default CountdownTimer;
