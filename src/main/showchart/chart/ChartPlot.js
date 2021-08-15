import React from 'react';
import teamSize from './calTeamSize.js';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import './ChartPlot.css';

function ChartPlot() {
  const chartData = []
  for (const [key, value] of teamSize) {
    if (value <= 15){
      chartData.push({team: key, size: value})
    }
  }
  chartData.sort((firstItem, secondItem) => secondItem.size - firstItem.size);

  return (
    <div className="chartpaper">
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={15} />
          <BarSeries
            valueField="size"
            argumentField="team"
            color="#c63f17"
          />
          <Title text="Team with less than 15 players" />
        </Chart>
      </Paper>
    </div>
  );
}

export default ChartPlot;


