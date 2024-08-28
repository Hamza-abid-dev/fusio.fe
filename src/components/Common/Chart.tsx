import React from 'react';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LineHighlightPlot, LinePlot } from '@mui/x-charts/LineChart';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { AllSeriesType } from '@mui/x-charts/models';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { ChartsAxisHighlight } from '@mui/x-charts/ChartsAxisHighlight';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import alphabetStock from './GOOGL.json';

// Define the type for the data structure in alphabetStock
interface AlphabetStockEntry {
  date: string;
  high: number;
  low: number;
  open: number;
  close: number;
  volume: number;
}

const Chart: React.FC = () => {
  // Ensure the data conforms to the expected type
  const series: AllSeriesType[] = [
    {
      type: 'line',
      yAxisId: 'price',
      color: '#18749D',
      label: 'High',
      data: alphabetStock.map((day: AlphabetStockEntry) => day.high),
    },
  ];

  return (
    <div style={{ width: '100%', backgroundColor: 'white', padding: '5px 10px', borderRadius: '10px', boxShadow: '0px 0px 20px grey' }}>
      <div>
        <ResponsiveChartContainer
          series={series}
          height={200}
          margin={{ top: 10 }}
          xAxis={[
            {
              id: 'date',
              data: alphabetStock.map((day: AlphabetStockEntry) => new Date(day.date)),
              scaleType: 'band',
              valueFormatter: (value: Date) => value.toLocaleDateString(),
            },
          ]}
          yAxis={[
            {
              id: 'price',
              scaleType: 'linear',
            },
            {
              id: 'volume',
              scaleType: 'linear',
              valueFormatter: (value: number) => `${(value / 1000000).toLocaleString()}M`,
            },
          ]}
        >
          <ChartsAxisHighlight x="line" />
          <BarPlot />
          <LinePlot />
          <LineHighlightPlot />
          <ChartsXAxis
            position="bottom"
            axisId="date"
            tickInterval={(index: number) => index % 30 === 0}
            tickLabelStyle={{
              fontSize: 10,
            }}
          />
          <ChartsYAxis
            position="left"
            axisId="price"
            tickLabelStyle={{ fontSize: 10 }}
            sx={{
              [`& .${axisClasses.label}`]: {
                transform: 'translateX(-5px)',
              },
            }}
          />
          <ChartsYAxis
            label="Volume"
            position="right"
            axisId="volume"
            tickLabelStyle={{ fontSize: 10 }}
            sx={{
              [`& .${axisClasses.label}`]: {
                transform: 'translateX(5px)',
              },
            }}
          />
          <ChartsTooltip />
        </ResponsiveChartContainer>
      </div>
    </div>
  );
}

export default Chart;
