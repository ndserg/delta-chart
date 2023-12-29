import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface ChartProps {
  dayData: number[],
}

const options: Highcharts.Options = {
  accessibility: {
    enabled: false
  },
  title: {
    text: undefined,
  },
  yAxis: {
    title: {
        text: undefined,
    }
  },
  xAxis: {
    title: {
        text: undefined,
    },
    categories: ['today', 'yesterday', 'selected day'],
  },
  legend: {
    enabled: false
  },
};

const DaysChart = ({ dayData }: ChartProps) => {
  const series = [{
    type: 'line',
    name: 'Данные по дням',
    data: dayData
  }];

  const chartOptions = {...options, series};

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartOptions}
    />
  );
};

export default DaysChart;