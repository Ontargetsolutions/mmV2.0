/**
 * Space Pie Chart
 */
import React from 'react';
import { Pie } from 'react-chartjs-2';

// chart congig
import ChartConfig from 'constants/chart-config';

const options = {
   legend: {
      display: false,
      labels: {
         fontColor: ChartConfig.legendFontColor
      }
   }
};

const SpacePieChart = ({ labels, datasets, width, height }) => {
   const data = {
      labels,
      datasets
   };
   return (
      <Pie height={height} width={width} data={data} options={options} />
   );
}

export default SpacePieChart;
