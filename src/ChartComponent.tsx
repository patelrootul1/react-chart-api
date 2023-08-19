import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import './ChartComponent.css';

const ChartComponent: React.FC = () => {
    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 },
      ];
    
      return (
        <div className="container">
        <div className="chart-container">
          <h2>Bar Chart</h2>
          <VictoryChart width={300} height={200} theme={VictoryTheme.material}>
            <VictoryAxis tickFormat={['Q1', 'Q2', 'Q3', 'Q4']} />
            <VictoryAxis dependentAxis />
            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>
        </div>
        </div>
      );
    };

export default ChartComponent;
