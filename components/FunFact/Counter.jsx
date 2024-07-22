import React, { useState, useEffect } from 'react';
import CountUp from "react-countup";

export default function Counter({ number, suffix }) {
  const [startCounting, setStartCounting] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('counter-section'); 
    if (element) {
      const elementPosition = element.getBoundingClientRect();
      if (elementPosition.top < window.innerHeight && elementPosition.bottom >= 0) {
        setStartCounting(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
        return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div id="counter-section">
      {startCounting && (
        <>
          <CountUp duration={2} className="counter" end={number} />
          <span>{suffix}</span>
        </>
      )}
    </div>
  );
}
