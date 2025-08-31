'use client';

import { useState, useEffect } from 'react';

export default function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date to November 1st, 2025
    const launchDate = new Date('2025-11-01T00:00:00');
    
    // Calculate initial time difference
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Launch has arrived!
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    };
    
    // Calculate immediately on mount
    calculateTimeLeft();
    
    // Set up interval for updates
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">🚀 Launching November 2025!</h2>
        <p className="text-purple-100">Get ready for the complete CaseGrid experience</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center">
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-bold">{timeLeft.days}</div>
            <div className="text-sm text-purple-100">Days</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="text-sm text-purple-100">Hours</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="text-sm text-purple-100">Minutes</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="text-sm text-purple-100">Seconds</div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-sm text-purple-100 mb-3">
          🎉 Early access features coming soon:
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-xs">
          <span className="bg-white/20 px-2 py-1 rounded-full">Advanced Search</span>
          <span className="bg-white/20 px-2 py-1 rounded-full">PDF Annotations</span>
          <span className="bg-white/20 px-2 py-1 rounded-full">Mobile App</span>
          <span className="bg-white/20 px-2 py-1 rounded-full">API Access</span>
        </div>
      </div>
    </div>
  );
}
