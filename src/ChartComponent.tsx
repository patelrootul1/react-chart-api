import React, { useState, useEffect } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import './ChartComponent.css';

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
}

const ChartComponent: React.FC = () => {
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    // Fetch user data from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data: UserData[]) => {
        // Check if data is fetched correctly
        console.log(data); // Make sure data is not empty and has the expected structure
        const limitedData = data.slice(0, 3);
        setUserData(limitedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <div className="chart-container">
        {userData.length > 0 ? (
          <VictoryChart width={300} height={200} theme={VictoryTheme.material}>
            <VictoryAxis tickFormat={userData.map((user) => user.name)} />
            <VictoryAxis dependentAxis />
            <VictoryBar data={userData} x="name" y="id" barWidth={20} />
          </VictoryChart>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      {/* Other content here */}
    </div>
  );
};

export default ChartComponent;
