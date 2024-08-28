import { BarPlot } from '@mui/x-charts/BarChart';
import { LineHighlightPlot, LinePlot } from '@mui/x-charts/LineChart';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { AllSeriesType } from '@mui/x-charts/models';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { ChartsAxisHighlight } from '@mui/x-charts/ChartsAxisHighlight';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import alphabetStock from './GOOGL1.json';


const PortfolioChart = () => {
	const series = [
		{
		  type: 'line',
		  yAxisId: 'price',
		  color: '#18749D',
		  label: 'High',
		  data: alphabetStock.map((day) => day.high),
		},
	  ] as AllSeriesType[];
  return (
    <div style={{ width: '100%', backgroundColor: 'white', padding: '5px 10px', borderRadius: '10px', boxShadow: '0px 0px 20px grey'}}>
        <div className='flex justify-between'>
        <h1 className='text-[#18749D] p-2'>Total Investments</h1>
        <div className='flex gap-2 mb-5'>
            <button className='p-2 bg-[#18749D] text-white rounded-md'>7 Days</button>
            <button className='p-2 bg-[#18749D] text-white rounded-md'>30 Days</button>
        </div>
        </div>
      <div>
        <ResponsiveChartContainer
          series={series}
          height={300}
          margin={{ top: 10 }}
          xAxis={[
            {
              id: 'date',
              data: alphabetStock.map((day) => new Date(day.date)),
              scaleType: 'band',
              valueFormatter: (value) => value.toLocaleDateString(),
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
              valueFormatter: (value) => `${(value / 1000000).toLocaleString()}M`,
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
            tickInterval={(value, index) => {
              return index, value;
            }}
            tickLabelStyle={{
              fontSize: 10,
            }}
          />
          <ChartsYAxis
            position="right"
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

export default PortfolioChart;
