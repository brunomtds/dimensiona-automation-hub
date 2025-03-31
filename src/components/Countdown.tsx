
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
  className?: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, className }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flex justify-center gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="bg-white border border-gray-200 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
          <span className="text-2xl font-bold">{timeLeft.days}</span>
        </div>
        <span className="text-sm mt-1">Dias</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white border border-gray-200 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
          <span className="text-2xl font-bold">{timeLeft.hours}</span>
        </div>
        <span className="text-sm mt-1">Horas</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white border border-gray-200 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
          <span className="text-2xl font-bold">{timeLeft.minutes}</span>
        </div>
        <span className="text-sm mt-1">Min</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white border border-gray-200 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
          <span className="text-2xl font-bold">{timeLeft.seconds}</span>
        </div>
        <span className="text-sm mt-1">Seg</span>
      </div>
    </div>
  );
};

export default Countdown;
