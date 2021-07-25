import { fetchData } from "../Grid/GridHelper"

export {}

export const getPieChartData = async (name: string) => {
    if (name === "TCP")
        return await generateTcpChart()
    else if (name === 'UDP')
        return generateUdpChart()
    else if (name === 'DETAILS')
        return generateDetailsChart()
    else if (name === 'PORT_USED')
        return generateStatsChart()
}

const generateTcpChart: any = async () => {
    let tcpChartData: any[] = []

    const getData = async () => {
        const results  = await fetchData("TCP")
        tcpChartData = results.data.result
        return tcpChartData
    }
    tcpChartData=await getData()
    
    let returnOject: any = {}
    tcpChartData.forEach(element => {
        if (element['name'] in returnOject) {
            returnOject[element['name']] = returnOject[element['name']]+1
        } else {
            returnOject[element['name']] = 0
        }
    });
    let ret: any = []
    for (const [key, value] of Object.entries(returnOject)) {
        ret.push({label:key, value:value})
    }
    
    return ret
}

const generateUdpChart:  any = async () => {
    let udpChartData: any[] = []

    const getData = async () => {
        const results  = await fetchData("UDP")
        udpChartData = results.data.result
        return udpChartData
    }
    udpChartData=await getData()
    
    let returnOject: any = {}
    udpChartData.forEach(element => {
        if (element['name'] in returnOject) {
            returnOject[element['name']] = returnOject[element['name']]+1
        } else {
            returnOject[element['name']] = 0
        }
    });
    let ret: any = []
    for (const [key, value] of Object.entries(returnOject)) {
        ret.push({label:key, value:value})
    }
    
    return ret

}

const generateDetailsChart: any = async () => {
    let detailsChartData: any[] = []

    const getData = async () => {
        const results  = await fetchData("DETAILS")
        detailsChartData = results.data.result
        return detailsChartData
    }
    detailsChartData=await getData()
    
    let returnOject: any = {}
    detailsChartData.forEach(element => {
        if (element['os_name'] in returnOject) {
            returnOject[element['os_name']] = returnOject[element['os_name']]+1
        } else {
            returnOject[element['os_name']] = 1
        }
    });
    let ret: any = []
    for (const [key, value] of Object.entries(returnOject)) {
        ret.push({label:key, value:value})
    }
    
    return ret
}

const generateStatsChart: any = async () => {
    let detailsChartData: any[] = []

    const getData = async () => {
        const results  = await fetchData("PORT_USED")
        detailsChartData = results.data.result
        return detailsChartData
    }
    detailsChartData=await getData()
    
    let returnOject: any = {}
    detailsChartData.forEach(element => {
        if (element['scan_date'] in returnOject) {
            returnOject[element['scan_date']] = returnOject[element['scan_date']]+1
        } else {
            returnOject[element['scan_date']] = 1
        }
    });
    let ret: any = []
    for (const [key, value] of Object.entries(returnOject)) {
        ret.push({label:key, value:value})
    }
    return ret
}