import { useState, useEffect } from 'react';

// Returns the current minutes and seconds left from the initial duration
const useCountdownTimer = (initialDurationSeconds: number, onTimerEnd: () => void) => {
  const [timeLeft, setTimeLeft] = useState(initialDurationSeconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimerEnd();
      return;
    }

    // Set up the interval to decrement the timer every second
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up the interval when the component unmounts or timeLeft changes
    return () => clearInterval(timer);
  }, [timeLeft, onTimerEnd]);

  // Format the time left into minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  return { 
      minutes: String(minutes).padStart(2, '0'), 
      seconds: String(seconds).padStart(2, '0'), 
      isTimerActive: timeLeft > 0 
  };
};

export default useCountdownTimer;