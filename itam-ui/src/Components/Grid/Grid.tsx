import React, { useEffect, useState } from 'react'
import {AgGridReact, AgGridColumn} from 'ag-grid-react'
import {getColumnDefs, fetchData} from "./GridHelper"

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { getPieChartData } from '../Charts/ChartHelper';

interface GridProps {
    name: string
}

export const Grid = (props: GridProps) => {

    const [rowData, setRowData] = useState<any[]>([])

    const getData = async () => {
        const results  = await fetchData(props.name)
        setRowData(results.data.result)
        console.log(results)
    }

    useEffect(() => {
        getData()
        getPieChartData("TCP")
    }, [])
   
    
    return (
        <>
        <div className='ag-theme-alpine'  style={{height: "100vh", width: "100vw"}}>
        <AgGridReact
                defaultColDef={{
                    sortable: true,
                    editable: true,
                    filter: true,
                    floatingFilter: true,
                    resizable: true,
                }}
                rowData={rowData}
                columnDefs={getColumnDefs(props.name)}
            />
        </div>
            
        </>
    )
}