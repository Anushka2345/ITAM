import { ColDef } from "ag-grid-community"
import axios from "axios"

export async function fetchData(name: string) {
    if (name === 'TCP') {
        const response: any = await axios.get("http://127.0.0.1:5000/fetchTCP").then(res => {return res})
        return response
    } else if (name == 'UDP') {
        const response: any = await axios.get("http://127.0.0.1:5000/fetchUDP").then(res => {return res})
        return response
    } else if (name === 'DETAILS') {
        const response: any = await axios.get("http://127.0.0.1:5000/fetchDetails").then(res => {return res})
        return response
    } else if (name === 'PORT_USED') {
        const response: any = await axios.get("http://127.0.0.1:5000/fetchStats").then(res => {return res})
        return response    
    }
}

export const getColumnDefs = (name: string) => {
    if (name === "TCP" || name === "UDP") 
        return TCP_defs
    else if (name === "PORT_USED")
        return Stats_defs
    else 
        return Detail_defs
}

const TCP_defs: ColDef[] = [
    {
        headerName: 'Port Number',
        field: 'port_number'
    }, 
    {
        headerName: 'Configuration',
        field: 'conf'
    },
    {
        headerName: 'CPE',
        field: 'cpe'
    },
    {
        headerName: 'Extra Information',
        field: 'extrainfo'
    },
    {
        headerName: 'Name',
        field: 'name'
    },
    {
        headerName: 'Product',
        field: 'product'
    },
    {
        headerName: 'Reason',
        field: 'reason'
    },
    {
        headerName: 'State',
        field: 'state'
    },
    {
        headerName: 'Version',
        field: 'version'
    }
]

const Detail_defs: ColDef[] = [
    {
        headerName: "Host",
        field: 'host'
    },
    {
        headerName: 'Name',
        field: "name"
    },
    {
        headerName: 'Type',
        field: 'type'
    },
    {
        headerName: 'Reason',
        field: 'reason'
    },
    {
        headerName: 'State',
        field: 'state'
    },
    {
        headerName: 'OS Line',
        field: 'os_line'
    },
    {
        headerName: 'OS Name',
        field: 'os_name'
    },
    {
        headerName: 'OS Generation',
        field: 'os_gen'
    },
    {
        headerName: 'OS Type',
        field: 'os_type'
    },
    {
        headerName: 'Vendor',
        field: 'vendor'
    }

]

const Stats_defs: ColDef[]= [
    {
        headerName: 'Host',
        field: "host"
    },
    {
        headerName: "Scan Date",
        field: "scan_date"
    },
    {
        headerName: "Number of probes",
        field: "num_probes"
    }
]