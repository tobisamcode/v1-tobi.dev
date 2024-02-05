// src/components/PercentageLoader.tsx
import React, { useState, useEffect } from 'react';
import './PercentageLoader.scss'; // Import the styles

const PercentageLoader: React.FC = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => (prevPercentage < 100 ? prevPercentage + 1 : 100));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-bar font-sans" style={{ width: `${percentage}%` }}></div>
      <p>{percentage}%</p>
    </div>
  );
};

export default PercentageLoader;
