import { useState, useEffect } from 'react';
import * as agCharts from 'ag-charts-community';
import { AgChartsReact } from 'ag-charts-react';
import { Component } from 'ag-grid-community';
import { getPieChartData } from './ChartHelper';

interface PieChartProps {
    name: string
    title: string
}

export const PieChart = (props: PieChartProps) => {
    const [data, setData] = useState<any>([])
    const getData = async () => {
        const dat: any = await getPieChartData(props.name)
        console.log("pie",dat)
        setData(dat)
    }
    useEffect (() => {
        getData()
    }, [])
    const state = {
        options: {
          autoSize: true,
          title: {
            text: props.title,
            fontSize: 18,
          },
          series: [
            {
              data: data,
              type: 'pie',
              labelKey: "label",
              angleKey: "value",
              label: { minAngle: 0 },
              callout: { strokeWidth: 2 },
            },
          ],
          legend: { enabled: true },
        },
    };
      return (
          <>
          <AgChartsReact options={state.options} />
          </>
      )
}
