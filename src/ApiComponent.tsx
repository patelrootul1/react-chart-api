import React, { useState, useEffect } from 'react';

const ApiComponent: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Replace this with your API endpoint URL
    const apiUrl = 'https://api.example.com/data';
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>API Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiComponent;
