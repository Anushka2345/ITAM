import { useState, useEffect } from 'react';
import * as agCharts from 'ag-charts-community';
import { AgChartsReact } from 'ag-charts-react';
import { Component } from 'ag-grid-community';
import { getPieChartData } from './ChartHelper';

interface LineChartProps {
    name: string
    title: string
}

export const LineChart = (props: LineChartProps) => {

    const [data, setData] = useState<any>([])

    const getData = async () => {
        const dat: any = await getPieChartData(props.name)
        setData(dat)
        
    }

    useEffect (() => {
        getData()
    }, [])

    const state = {
        options: {
          autoSize: true,
          title: { text: props.title },
          data: data,
          series: [
            {
              xKey: 'label',
              yKey: 'value',
              yName: 'Number of devices',
            },
          ],
        },
      };
    

  

      return (
          <>
          <AgChartsReact options={state.options} />
          </>
      )
}
