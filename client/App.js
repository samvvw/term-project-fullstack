import { useState, useMemo, useEffect } from 'react'
import { FormProductionLog, ProductionLogsTable } from './components'
import {
    ComposedChart,
    Area,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from 'recharts'

export default function App({ title }) {
    const [data, setData] = useState([])

    const tableData = useMemo(() => data, [data])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/production-log')

            const responseData = await response.json()

            setData(responseData)
        }
        fetchData()
    }, [])
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {title && <h1>{title}</h1>}
            <FormProductionLog setData={setData} />
            <ResponsiveContainer width="90%" height={350}>
                <ComposedChart
                    data={tableData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#8884d8"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#8884d8"
                                stopOpacity={0}
                            />
                        </linearGradient>
                        <linearGradient
                            id="colorPv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#82ca9d"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#82ca9d"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <Tooltip />
                    <Legend />
                    <Area
                        type="monotone"
                        dataKey="shiftProduction.totalRawMaterial"
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                        name="Total OCC"
                    />
                    <Line
                        type="monotone"
                        dataKey="shiftProduction.totalProduction"
                        stroke="#8884d8"
                        strokeWidth={3}
                        label={{
                            fill: 'black',
                            fontSize: 14,
                        }}
                        position="insideTopLeft"
                        name="Total Production"
                    />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis
                        dataKey={
                            (e) =>
                                new Date(Date.parse(e.date)).toLocaleDateString(
                                    'en-US',
                                    {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    }
                                )
                            // .toISOString()
                            // .split('T')[0]
                        }
                    />
                    <YAxis domain={['auto', 'auto']} />
                </ComposedChart>
            </ResponsiveContainer>
            <ProductionLogsTable tableData={tableData} />
        </div>
    )
}
